const fs = require('fs');
const path = require('path');

// third-party
const slug = require('slug');
const csv = require('csv');
const fse = require('fs-extra');
const mustache = require('mustache');

const csvText = fs.readFileSync(__dirname + '/data.csv', 'utf8');



/**
 * Copyright 2012 Akseli Palén.
 * Created 2012-07-15.
 * Licensed under the MIT license.
 * 
 * <license>
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files
 * (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
 * BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * </lisence>
 * 
 * Implements functions to calculate combinations of elements in JS Arrays.
 * 
 * Functions:
 *   k_combinations(set, k) -- Return all k-sized combinations in a set
 *   combinations(set) -- Return all combinations of the set
 */


/**
 * K-combinations
 * 
 * Get k-sized combinations of elements in a set.
 * 
 * Usage:
 *   k_combinations(set, k)
 * 
 * Parameters:
 *   set: Array of objects of any type. They are treated as unique.
 *   k: size of combinations to search for.
 * 
 * Return:
 *   Array of found combinations, size of a combination is k.
 * 
 * Examples:
 * 
 *   k_combinations([1, 2, 3], 1)
 *   -> [[1], [2], [3]]
 * 
 *   k_combinations([1, 2, 3], 2)
 *   -> [[1,2], [1,3], [2, 3]
 * 
 *   k_combinations([1, 2, 3], 3)
 *   -> [[1, 2, 3]]
 * 
 *   k_combinations([1, 2, 3], 4)
 *   -> []
 * 
 *   k_combinations([1, 2, 3], 0)
 *   -> []
 * 
 *   k_combinations([1, 2, 3], -1)
 *   -> []
 * 
 *   k_combinations([], 0)
 *   -> []
 */
function k_combinations(set, k) {
	var i, j, combs, head, tailcombs;
	
	// There is no way to take e.g. sets of 5 elements from
	// a set of 4.
	if (k > set.length || k <= 0) {
		return [];
	}
	
	// K-sized set has only one K-sized subset.
	if (k == set.length) {
		return [set];
	}
	
	// There is N 1-sized subsets in a N-sized set.
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}
	
	// Assert {1 < k < set.length}
	
	// Algorithm description:
	// To get k-combinations of a set, we want to join each element
	// with all (k-1)-combinations of the other elements. The set of
	// these k-sized sets would be the desired result. However, as we
	// represent sets with lists, we need to take duplicates into
	// account. To avoid producing duplicates and also unnecessary
	// computing, we use the following approach: each element i
	// divides the list into three: the preceding elements, the
	// current element i, and the subsequent elements. For the first
	// element, the list of preceding elements is empty. For element i,
	// we compute the (k-1)-computations of the subsequent elements,
	// join each with the element i, and store the joined to the set of
	// computed k-combinations. We do not need to take the preceding
	// elements into account, because they have already been the i:th
	// element so they are already computed and stored. When the length
	// of the subsequent list drops below (k-1), we cannot find any
	// (k-1)-combs, hence the upper limit for the iteration:
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		// head is a list that includes only our current element.
		head = set.slice(i, i + 1);
		// We take smaller combinations from the subsequent elements
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		// For each (k-1)-combination we join it with the current
		// and store it to the set of k-combinations.
		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}


/**
 * Combinations
 * 
 * Get all possible combinations of elements in a set.
 * 
 * Usage:
 *   combinations(set)
 * 
 * Examples:
 * 
 *   combinations([1, 2, 3])
 *   -> [[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
 * 
 *   combinations([1])
 *   -> [[1]]
 */
function combinations(set) {
	var k, i, combs, k_combs;
	combs = [];
	
	// Calculate all non-empty k-combinations
	for (k = 1; k <= set.length; k++) {
		k_combs = k_combinations(set, k);
		for (i = 0; i < k_combs.length; i++) {
			combs.push(k_combs[i]);
		}
	}
	return combs;
}






















const optionGroupings = require('./data-parsing/option-groupings');

const BASIC_DATA_PICKERS = [
  {
    property: 'name',
    question: 'Qual o nome da organização da qual faz parte?',
  },
  {
    property: 'estado',
    question: 'Estado:',
  },
  {
    property: 'cidade',
    question: 'Cidade:',
  },
  
];

function findGroupingForValue(value) {
  return optionGroupings.find(function (g) {
    return g.options.find(function (opt) {
      return opt.value === value;
    });
  });
};

function findOptionDetail(grouping, optionValue) {
  return grouping.options.find(function (opt) {
    return opt.value === optionValue;
  });
}

function Entity(columnNames, line) {
  // basic data
  
  BASIC_DATA_PICKERS.forEach((picker) => {
    columnNames.forEach((colName, index) => {
      if (picker.question === colName) {
        this[picker.property] = line[index]
      }
    })
  });
  
  // find optionGroupings (colNames are values actually)
  columnNames.forEach((colName, index) => {
    if (line[index]) {
      var grouping = findGroupingForValue(colName);
      
      if (grouping) {
        this[grouping.name] = this[grouping.name] || [];
        
        this[grouping.name].push(findOptionDetail(grouping, colName));
      }
    }
  });
  
}


var parser = csv.parse(csvText, function (err, data) {

  var columnNames = data.shift();
  
  var entities = data.map(function (lineEntry, index) {
    
    var entity = new Entity(columnNames, lineEntry);
    
    return entity;

  });
  
  // partial data parsing ended
  // console.log(entities[0]);
  
  
  writeUIFiles(entities);
});

/**
 * Writes ui files
 */
function writeUIFiles(entities) {
  // TO BE SEPARATED into sole function
  
  const VERSION_BASE_PATH = path.join(__dirname, 'ui/versions');
  const UI_INDEX_TEMPLATE = fs.readFileSync(path.join(__dirname, 'ui/template/index.html'), 'utf8');
  const UI_TEMPLATE = fs.readFileSync(path.join(__dirname, 'ui/template/interactive/index.html'), 'utf8');
  
  var allOptions = optionGroupings.map(function (g) {
    return g.name;
  });
  
  // combine all possible whitelists
  var versions = combinations(allOptions)
    .filter(function (comb) {
      // console.log(comb)
      return comb.length > 0;
    })
    .map(function (comb) {
      return {
        optionWhitelist: comb,
      }
    });
  
  // special version named 'all'
  versions.unshift({
    name: 'all',
    optionWhitelist: allOptions
  });
  
  
  versions.forEach(function (v) {
    var versionName = v.name || v.optionWhitelist.join('-');
    v.name = versionName;
    var versionPath = path.join(VERSION_BASE_PATH, versionName);
    
    var versionData = genImportLikeData(entities, v.optionWhitelist);
    
    fse.emptyDirSync(versionPath);
    
    fs.writeFileSync(
      path.join(VERSION_BASE_PATH, versionName + '/data.json'),
      JSON.stringify(versionData)
    );
    fs.writeFileSync(
      path.join(VERSION_BASE_PATH, versionName + '/index.html'),
      mustache.render(UI_TEMPLATE, v)
    );
  });
  
  // write index
  fs.writeFileSync(
    path.join(VERSION_BASE_PATH, 'index.html'),
    mustache.render(UI_INDEX_TEMPLATE, {
      versions: versions
    })
  );
}

// transforms an array of entities into
// an array of "import like" data, that match 
// http://bl.ocks.org/mbostock/7607999
// example
function genImportLikeData(entities, optionWhitelist) {
  
  var nodes = [];
  
  
  // parsing the entities data into data like the
  // one for the readme-flare.json
  // example of d3 chord.
  entities.forEach(function (entity) {
    
    nodes.push({
      name: 'entity.' + slug(entity.name),
      imports: parseEntityImports(entity, optionWhitelist),
    });
    
  });
  
  // build the 'option' nodes
  optionGroupings.forEach(function (g) {
    var gName = g.name;
    
    // only whitelisted stuff
    if (optionWhitelist.indexOf(gName) === -1) {
      return;
    }
    
    g.options.forEach(function (opt) {
      
      var optAggregateStats = computeOptionAggregateStats(
        entities,
        gName,
        opt.name
      );
      
      nodes.push({
        name: gName + '.' + opt.name,
        count: optAggregateStats.count,
        totalEntityCount: entities.length
      });
    });
  });
  
  return nodes;
}

// parses out entity imports: transforms entity data into
// an array of "imports"
function parseEntityImports(entity, optionWhitelist) {
  optionWhitelist = optionWhitelist || [];
  
  var imports = [];
  
  optionGroupings.forEach(function (g) {
    
    var gName = g.name;
    
    // only whitelisted stuff
    if (optionWhitelist.indexOf(gName) === -1) {
      return;
    }
    
    if (entity[gName]) {
      entity[gName].forEach(function (opt) {
        imports.push(gName + '.' + opt.name);
      });
    }
  });
  
  return imports;
}

/**
 * Computes aggregate data on all entities
 * for a given option with a given value
 * @return {Object}
 *         - total:
 */
function computeOptionAggregateStats(entities, targetOption, targetValue) {
  
  var aggregateStats = {
    count: 0,
  };
  
  entities.forEach(function (entity) {
    
    if (entity[targetOption]) {
      var countEntity = entity[targetOption].find(function (item) {
        return item.name === targetValue
      });
      
      if (countEntity) {
        aggregateStats.count += 1;
      }
    }
  });
  
  return aggregateStats;
}