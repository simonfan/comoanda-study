function _loopObj(obj, fn) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      fn(obj[prop], prop);
    }
  }
}

module.exports = function createTypeformParser(sourceData) {

  function getQuestionByFieldId(fieldId) {
    fieldId = (typeof fieldId === 'string') ? parseInt(fieldId, 10) : fieldId;

    return sourceData.questions.find(function (q) {
      return q.field_id === fieldId;
    });
  }

  /**
   * Auxiliary function that retrieves the question's text
   * given the source data and the question field_id
   */
  function getQuestionString(questionFieldId) {
    var question = getQuestionByFieldId(questionFieldId);

    if (!question) {
      console.warn('question not found', questionFieldId);
    }

    return question ? question.question : 'question_not_found_' + questionFieldId;
  }

  /**
   * List of question answer parsers
   * Parsers must be in order of priority!
   * If one parser is executed, the following one's will not.
   *
   * Only one parser should be executed per anser
   * 
   * @type {Array}
   */
  const ANSWER_PARSERS = [
    /**
     * Questions with list options
     */
    // list_19883191_choice_25541330
    // list_19881916_choice
    // list_19881916_other
    {
      name: 'list',
      keyRegExp: /^list_(\d+)_.*$/,
      processFn: function (srcValue, srcKey) {

        var match = srcKey.match(this.keyRegExp);

        if (!match) {
          return false;
        }
        
        return {
          type: 'list',
          question: getQuestionString(match[1]),
          response: srcValue,
        }
      },
    },
    {
      name: 'default',
      keyRegExp: /^\w+_(\d+)$/,
      processFn: function (srcValue, srcKey) {
        var match = srcKey.match(this.keyRegExp);

        if (!match) {
          return false;
        }
        
        return {
          type: 'default',
          question: getQuestionString(match[1]),
          response: srcValue,
        };
      },
    }

  ];
  
  function parseAnswer(srcValue, srcKey) {
    
    var parseRes = false;
    
    ANSWER_PARSERS.some(function (parser) {
      parseRes = parser.processFn(srcValue, srcKey);
      
      return parseRes ? true : false;
    });
    
    return parseRes;
  }
  
  function parse() {
    var parsedAnswers = sourceData.responses.map(function (r) {
      var parsedAnswer = {};

      _loopObj(r.answers, function (srcValue, srcKey) {
        // run through ANSWER_PARSERS until one of them returns truthy
        var parseResult = parseAnswer(srcValue, srcKey);
        
        if (!parseResult) {
          console.warn('could not parse ', srcKey, srcValue);
        } else {
          // set the value onto the parsedAnswer
          // use the correct setter for the type of the response
          
          switch (parseResult.type) {
            case 'list':
              parsedAnswer[parseResult.question] =
                parsedAnswer[parseResult.question] || [];
              
              if (parseResult.response) {
                parsedAnswer[parseResult.question].push(parseResult.response);
              }
              break;
            case 'default':
              parsedAnswer[parseResult.question] = parseResult.response;
              break;
          }
        }
      });

      return parsedAnswer;
    });

    return parsedAnswers;
  }

  return {
    parse: parse,
    getQuestionByFieldId: getQuestionByFieldId,
    getQuestionString: getQuestionString,
  };

};
