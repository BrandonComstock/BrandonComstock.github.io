// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-brandoncomstock');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
    return _.filter(array, function(item) {
        return item.gender == "male";
    }).length;
}


var femaleCount = function(array) {
    return _.filter(array, function(item) {
        return item.gender == "female";
    }).length;
}


var oldestCustomer = function(array) {
    let oldest;
    let ages = [];
    _.each(array, function(e, i, c) {
        ages.push(e.age);
    });
    let oldestAge = 0;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > oldestAge) {
            oldestAge = ages[i];
        }
    }
    _.each(array, function(e, i, c) {
        if (e.age === oldestAge) {
            oldest = e.name;
        }
    });
    return oldest;
};

var youngestCustomer = function(array) {
    let youngest;
    const ages = [];
    _.each(array, function(e, i, c) {
        ages.push(e.age);
    });
    let youngestAge;
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < youngestAge || youngestAge === undefined) {
            youngestAge = ages[i];
        }
    }
    _.each(array, function(e, i, c) {
        if (e.age === youngestAge) {
            youngest = e.name;
        }
    });
    return youngest;
};


var averageBalance = function(array) {
    let balances = [];
    let total = 0;
    _.each(array, function(e, i, c) {
        let balance = e.balance;
        balances.push(Number(balance.replace(/[^0-9\.-]+/g, "")));
    });
    for (let i = 0; i < balances.length; i++) {
        total += balances[i];
    }
    let avg = total / balances.length;
    return avg;
};

var firstLetterCount = function(array, letter) {
    let arr = [];
    _.filter(array, function(value, loc, array) {
        if(value.name.charAt(0) === letter.toUpperCase()) {
            arr.push(value.name.charAt(0));
        }
    })
    return arr.length;
}

var friendFirstLetterCount = function(array, customer, letter) {
   let arr = [];
   for (let i = 0; i < array.length; i++) {
       if(array[i].name === customer) {
           _.filter(array[i].friends, function(value, loc, array) {
              if(value.name.charAt(0).toUpperCase() === letter.toUpperCase()) {
                  arr.push(value.name.charAt(0))
              }
           });
        }
   }
   return arr.length;
}

var friendsCount = function(array, name) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].friends.length; j++) {
            if (array[i].friends[j].name === name) {
                arr.push(array[i].name);
            }
        }
    }
    return arr;
};

var topThreeTags = function(array) {
    const topThree = [];
    const allTags = [];
    const tagsCount = {};
    let highestTagNum = 0;
    let highestTag;


    _.each(array, function(person, i, c) {
        let tagsArr = person.tags;

        _.each(tagsArr, function(tag, i, c) {
            if (tagsCount[tag] === undefined) {
                tagsCount[tag] = 0;
            }
            tagsCount[tag]++;
        });
    });

    for (let t = 0; t < 3; t++) {
        for (let tag in tagsCount) {
            if (tagsCount[tag] > highestTagNum) {
                highestTagNum = tagsCount[tag];
                highestTag = tag;
                tagsCount[tag] = 0;
            }
        }
        topThree.push(highestTag);
        highestTagNum = 0;
    }
    return topThree;
};

function dedup(array) {
    var newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (!newArr.includes(array[i])) {
            newArr.push(array[i]);
        }

    }
    return newArr;
}


var genderCount = function(array) {
   var obj = {}
   var maleNum = 0;
   var femaleNum = 0;
   var transgenderNum = 0;
   
   _.filter(array, function(value, loc, array) {
       if(value.gender === "male") {
           maleNum += 1;
       }
   });
    _.filter(array, function(value, loc, array) {
       if(value.gender === "female") {
           femaleNum += 1;
       }
   });
    _.filter(array, function(value, loc, array) {
       if(value.gender === "transgender") {
          transgenderNum += 1;
       }
   });
   
    obj.male = maleNum;
    obj.female = femaleNum;
    obj.transgender = transgenderNum;
    
    return obj;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
