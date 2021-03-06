'use strict';

var cookieStandLocations = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//1 minmax cust per hour AND avg cookies in properties
//2 use method to generate random # of customers
//3 calculate and store cookies purchase each hour
//        -using random customer and avg cookies purchased per customer
//store the results for each hour in an array
//        -perhaps as a property of the object
//display values of each array for each location as unordered lists
//have total cookies sold that day at bottom


//Store 1
// var pikeCookieStore = {
//   minCustomerdPerHour: 23,
//   maxCustomerPerHour: 65,
//   avgCookiesPerCust: 6.3,
//   total: 0,

//   customerPerHourArray: [],
//   cookiesPerHourArray: [],
//   cookieLoopFunction: function() {
//     for(var x = 0; x < storeHours.length; x++) {
//       //* each entry in customerPerHourArray by avgCookiesPerCust
//       this.cookiesPerHourArray.push(Math.floor(this.customerPerHourArray[x] * this.avgCookiesPerCust));
//     }
//   },

//   //random cust between min and max
//   customerLoopFunction: function() {
//     for(var i = 0; i < storeHours.length; i++) {

//       this.customerPerHourArray.push(Math.floor(Math.random () * (this.maxCustomerPerHour - this.minCustomerdPerHour) + this.minCustomerdPerHour));
//     }
//   },

//   //Total Cookie Stuff
//   totalCookiesForPikeFunction: function() {
//     for(var y = 0; y < this.cookiesPerHourArray.length; y++) {
//       this.total += this.cookiesPerHourArray[y];
//     }
//     console.log(this.total);
//   },

//   // Push total to end of cookiesPerHourArray
//   // pushTotalAtEndOfArray: function() {
//   // this.cookiesPerHourArray.push(this.total);
//   // },

//   renderHourlyCookies: function() {
//     //access the ul from sales.html
//     var ulEl = document.getElementById('pikeStore');

//     this.customerLoopFunction();
//     this.cookieLoopFunction();
//     //this.totalCookiesForPikeFunction();
//     //this.pushTotalAtEndOfArray('Total');
//     console.log(this.customerPerHourArray);

//     for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
//       //1. create list items
//       var liEl = document.createElement('li');
//       //2 give them content
//       liEl.textContent = storeHours[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//   },

//   renderTotal: function() {
//     var ulEl = document.getElementById('pikeStore');

//     this.totalCookiesForPikeFunction();

//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total cookies sold: ' + this.total;
//     ulEl.appendChild(liEl);
//   }
// };

// pikeCookieStore.renderHourlyCookies();
// pikeCookieStore.renderTotal();



// //Store 2
// var seatacCookieStore = {
//   minCustomerdPerHour: 3,
//   maxCustomerPerHour: 24,
//   avgCookiesPerCust: 1.2,
//   totalSeatac: 0,

//   customerPerHourArray: [],
//   cookiesPerHourArray: [],

//   cookieLoopFunction: function() {
//     for(var x = 0; x < storeHours.length; x++) {
//       this.cookiesPerHourArray.push(Math.floor(this.customerPerHourArray[x] * this.avgCookiesPerCust));
//     }
//   },

//   //random cust between min and max
//   customerLoopFunction: function() {
//     for(var i = 0; i < storeHours.length; i++) {

//       this.customerPerHourArray.push(Math.floor(Math.random () * (this.maxCustomerPerHour - this.minCustomerdPerHour) + this.minCustomerdPerHour));
//     }
//   },

//   //Total Cookie Stuff
//   totalCookiesForSeatacFunction: function() {
//     for(var y = 0; y < this.cookiesPerHourArray.length; y++) {
//       this.totalSeatac += this.cookiesPerHourArray[y];
//     }
//     console.log(this.totalSeatac);
//   },

//   renderSeatacHourlyCookies: function() {
//     //access the ul from sales.html
//     var ulEl = document.getElementById('seatacStore');

//     this.customerLoopFunction();
//     this.cookieLoopFunction();
//     //this.totalCookiesForPikeFunction();
//     //this.pushTotalAtEndOfArray('Total');
//     console.log(this.customerPerHourArray);

//     for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
//       //1. create list items
//       var liEl = document.createElement('li');
//       //2 give them content
//       liEl.textContent = storeHours[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//   },

//   renderSeatacTotal: function() {
//     var ulEl = document.getElementById('seatacStore');

//     this.totalCookiesForSeatacFunction();

//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total cookies sold: ' + this.totalSeatac;
//     ulEl.appendChild(liEl);
//   }
// };

// seatacCookieStore.renderSeatacHourlyCookies();
// seatacCookieStore.renderSeatacTotal();


//Constructor Object
var infoForAllLocations = [];
var tableForCookies = document.getElementById('tableForCookieSales');

//access form
var formCookies = document.getElementById('formId');


function ConstructorForCookies(salmonCookieLocationName, minCustomerPerHour, maxCustomerPerHour, avgCookiesPerCust) {
  this.salmonCookieLocationName = salmonCookieLocationName;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.total = 0;
  infoForAllLocations.push(this);

  this.customerPerHourArray = [];
  this.cookiesPerHourArray = [];

  //random cust between min and max
  this.customerLoopFunction = function() {
    this.customerPerHourArray = [];
    for(var i = 0; i < storeHours.length; i++) {
      this.customerPerHourArray.push(Math.floor(Math.random () * (this.maxCustomerPerHour - this.minCustomerPerHour) + this.minCustomerPerHour));
      //console.log(this.customerPerHourArray);
    }
  },

  this.cookieLoopFunction = function() {
    this.cookiesPerHourArray = [];
    for(var x = 0; x < storeHours.length; x++) {
      this.cookiesPerHourArray.push(Math.floor(this.customerPerHourArray[x] * this.avgCookiesPerCust));
      //console.log(this.customerPerHourArray[x]);
      //console.log(this.avgCookiesPerCust);

    }
  },

  //Total Cookie Stuff
  this.totalCookiesForAnyLocation = function() {
    for(var y = 0; y < this.cookiesPerHourArray.length; y++) {
      this.total += this.cookiesPerHourArray[y];
    }
    // console.log(this.total);
  };
}

ConstructorForCookies.prototype.render = function () {
  //create tr and td
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');


  this.customerLoopFunction();
  this.cookieLoopFunction();
  //console.log(this.customerPerHourArray);
  //console.log(this);

  tdEl.textContent = this.salmonCookieLocationName;
  trEl.appendChild(tdEl);


  for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
    //1. create list items
    var tdEl = document.createElement('td');
    //2 give them content
    tdEl.textContent = this.cookiesPerHourArray[i];
    
    trEl.appendChild(tdEl);
    tableForCookies.appendChild(trEl);
  }

  this.totalCookiesForAnyLocation();

  var tdEl = document.createElement('td');
  tdEl.textContent = 'cookies sold: ' + this.total;
  trEl.appendChild(tdEl);

};

function renderAllStoreLocations() {
  for (var b = 0; b < infoForAllLocations.length; b++) {
    var keepTrackOfStores = infoForAllLocations[b];
    keepTrackOfStores.render();
  }
}

new ConstructorForCookies('1st and Pike', 23, 65, 6.3);
new ConstructorForCookies('Seatac', 3, 24, 1.2, 0);
new ConstructorForCookies('Seattle Center', 11, 38, 3.7);
new ConstructorForCookies('Capitol Hill', 20, 38, 2.3);
new ConstructorForCookies('Alki', 2, 16, 4.6);

//Make Table Header
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');

  thEl.textContent = '';
  trEl.appendChild(thEl);

  for (var i = 0; i < storeHours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = storeHours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);

  tableForCookies.appendChild(trEl);
}

function makeFooterRow() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');

  tdEl.textContent = 'Total per hour: ';
  trEl.appendChild(tdEl);

  for (var m = 0; m < storeHours.length; m++) {
    tdEl = document.createElement('td');
    //sum of array [m] for all the stores
    //tdEl.textContent = cookiesPerHourArray[m];

    for (var i = 0; i < infoForAllLocations.length; i++) {
      // console.log('info',infoForAllLocations[i].cookiesPerHourArray[m]);
      // console.log('hours',storeHours[m]);
      // console.log(m);

      tdEl.textContent = infoForAllLocations[3].cookiesPerHourArray[m];

      var columnTotal = 0;
      for (var t = 0; t < infoForAllLocations.length; t++) {
        columnTotal = infoForAllLocations[t].cookiesPerHourArray[m] + columnTotal;
        tdEl.textContent = columnTotal;
      }
      // var columnTotal = infoForAllLocations[0].cookiesPerHourArray[m] + infoForAllLocations[1].cookiesPerHourArray[m];
      // var columnTotal += infoForAllLocations[2].cookiesPerHourArray[m];
      // var columnTotal = columnTotal + infoForAllLocations[3].cookiesPerHourArray[m];
      // var columnTotal = columnTotal + infoForAllLocations[4].cookiesPerHourArray[m];

      // tdEl.textContent = columnTotal;
    }
    trEl.appendChild(tdEl);
  }
  tableForCookies.appendChild(trEl);
}

//Event
function addNewSalmonCookieLocation(event) {
  event.preventDefault();
  console.log(event.target.storeName.value);
  var newName = event.target.storeName.value;
  console.log(newName);
  var newMin = event.target.minCustomer.value;
  console.log(newMin);
  var newMax = event.target.maxCustomer.value;
  console.log(newMax);
  var newAvg = event.target.avgCookiesBoughtPerCustomer.value;
  console.log(newAvg);

  new ConstructorForCookies(newName, parseInt(newMin), parseInt(newMax), parseFloat(newAvg));

  tableForCookies.innerHTML = '';

  makeHeaderRow();

  renderAllStoreLocations();


  makeFooterRow();

  event.target.reset();
}
formCookies.addEventListener('submit', addNewSalmonCookieLocation);


makeHeaderRow();

renderAllStoreLocations();

makeFooterRow();



//1. html needs table element
//2. in the js, add rows, one for each store
//3. each row needs to have the data from the list items




//Store 3
// var seattleCenterCookieStore = {
//   minCustomerdPerHour: 11,
//   maxCustomerPerHour: 38,
//   avgCookiesPerCust: 3.7,
//   totalSeattleCenter: 0,

//   customerPerHourArray: [],
//   cookiesPerHourArray: [],

//   cookieLoopFunction: function() {
//     for(var x = 0; x < storeHours.length; x++) {
//       this.cookiesPerHourArray.push(Math.floor(this.customerPerHourArray[x] * this.avgCookiesPerCust));
//     }
//   },

//   //random cust between min and max
//   customerLoopFunction: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.customerPerHourArray.push(Math.floor(Math.random () * (this.maxCustomerPerHour - this.minCustomerdPerHour) + this.minCustomerdPerHour));
//     }
//   },

//   //Total Cookie Stuff
//   totalCookiesForSeattleCenterFunction: function() {
//     for(var y = 0; y < this.cookiesPerHourArray.length; y++) {
//       this.totalSeattleCenter += this.cookiesPerHourArray[y];
//     }
//     console.log(this.totalSeattleCenter);
//   },

//   renderSeattleCenterHourlyCookies: function() {
//     //access the ul from sales.html
//     var ulEl = document.getElementById('seaCenterStore');

//     this.customerLoopFunction();
//     this.cookieLoopFunction();
//     console.log(this.customerPerHourArray);

//     for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
//       //1. create list items
//       var liEl = document.createElement('li');
//       //2 give them content
//       liEl.textContent = storeHours[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//   },

//   renderSeattleCenterTotal: function() {
//     var ulEl = document.getElementById('seaCenterStore');

//     this.totalCookiesForSeattleCenterFunction();

//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total cookies sold: ' + this.totalSeattleCenter;
//     ulEl.appendChild(liEl);
//   }
// };

// seattleCenterCookieStore.renderSeattleCenterHourlyCookies();
// seattleCenterCookieStore.renderSeattleCenterTotal();


// //Store 4
// var capitolHillCookieStore = {
//   minCustomerdPerHour: 20,
//   maxCustomerPerHour: 38,
//   avgCookiesPerCust: 2.3,
//   totalCapitolHill: 0,

//   customerPerHourArray: [],
//   cookiesPerHourArray: [],

//   cookieLoopFunction: function() {
//     for(var x = 0; x < storeHours.length; x++) {
//       this.cookiesPerHourArray.push(Math.floor(this.customerPerHourArray[x] * this.avgCookiesPerCust));
//     }
//   },

//   //random cust between min and max
//   customerLoopFunction: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.customerPerHourArray.push(Math.floor(Math.random () * (this.maxCustomerPerHour - this.minCustomerdPerHour) + this.minCustomerdPerHour));
//     }
//   },

//   //Total Cookie Stuff
//   totalCookiesForCapitolHillFunction: function() {
//     for(var y = 0; y < this.cookiesPerHourArray.length; y++) {
//       this.totalCapitolHill += this.cookiesPerHourArray[y];
//     }
//     console.log(this.totalCapitolHill);
//   },

//   renderCapitolHillHourlyCookies: function() {
//     //access the ul from sales.html
//     var ulEl = document.getElementById('capitolHillStore');

//     this.customerLoopFunction();
//     this.cookieLoopFunction();
//     console.log(this.customerPerHourArray);

//     for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
//       //1. create list items
//       var liEl = document.createElement('li');
//       //2 give them content
//       liEl.textContent = storeHours[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//   },

//   renderCapitolHillTotal: function() {
//     var ulEl = document.getElementById('capitolHillStore');

//     this.totalCookiesForCapitolHillFunction();

//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total cookies sold: ' + this.totalCapitolHill;
//     ulEl.appendChild(liEl);
//   }
// };

// capitolHillCookieStore.renderCapitolHillHourlyCookies();
// capitolHillCookieStore.renderCapitolHillTotal();


// //Store 5
// var alkiCookieStore = {
//   minCustomerdPerHour: 2,
//   maxCustomerPerHour: 16,
//   avgCookiesPerCust: 4.6,
//   totalAlki: 0,

//   customerPerHourArray: [],
//   cookiesPerHourArray: [],

//   cookieLoopFunction: function() {
//     for(var x = 0; x < storeHours.length; x++) {
//       this.cookiesPerHourArray.push(Math.floor(this.customerPerHourArray[x] * this.avgCookiesPerCust));
//     }
//   },

//   //random cust between min and max
//   customerLoopFunction: function() {
//     for(var i = 0; i < storeHours.length; i++) {
//       this.customerPerHourArray.push(Math.floor(Math.random () * (this.maxCustomerPerHour - this.minCustomerdPerHour) + this.minCustomerdPerHour));
//     }
//   },

//   //Total Cookie Stuff
//   totalCookiesForAlkiFunction: function() {
//     for(var y = 0; y < this.cookiesPerHourArray.length; y++) {
//       this.totalAlki += this.cookiesPerHourArray[y];
//     }
//     console.log(this.totalAlki);
//   },

//   renderAlkiHourlyCookies: function() {
//     //access the ul from sales.html
//     var ulEl = document.getElementById('alkiStore');

//     this.customerLoopFunction();
//     this.cookieLoopFunction();
//     console.log(this.customerPerHourArray);

//     for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
//       //1. create list items
//       var liEl = document.createElement('li');
//       //2 give them content
//       liEl.textContent = storeHours[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
//       ulEl.appendChild(liEl);
//     }
//   },

//   renderAlkiTotal: function() {
//     var ulEl = document.getElementById('alkiStore');

//     this.totalCookiesForAlkiFunction();

//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total cookies sold: ' + this.totalAlki;
//     ulEl.appendChild(liEl);
//   }
// };

// alkiCookieStore.renderAlkiHourlyCookies();
// alkiCookieStore.renderAlkiTotal();

