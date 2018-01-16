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
var pikeCookieStore = {
  minCustomerdPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesPerCust: 6.3,
  total: 0,

  customerPerHourArray: [],
  cookiesPerHourArray: [],
  cookieLoopFunction: function() {
    for(var x = 0; x < storeHours.length; x++) {
      //* each entry in customerPerHourArray by avgCookiesPerCust
      this.cookiesPerHourArray.push(Math.floor(this.customerPerHourArray[x] * this.avgCookiesPerCust));
    }
  },

  //random cust between min and max
  customerLoopFunction: function() {
    for(var i = 0; i < storeHours.length; i++) {

      this.customerPerHourArray.push(Math.floor(Math.random () * (65 - 23) + 23));
    }
  },

  //Total Cookie Stuff
  totalCookiesForPikeFunction: function() {
    for(var y = 0; y < this.cookiesPerHourArray.length; y++) {
      this.total += this.cookiesPerHourArray[y];
    }
    console.log(this.total);
  },

  // Push total to end of cookiesPerHourArray
  // pushTotalAtEndOfArray: function() {
  // this.cookiesPerHourArray.push(this.total);
  // },

  renderHourlyCookies: function() {
    //access the ul from sales.html
    var ulEl = document.getElementById('pikeStore');

    this.customerLoopFunction();
    this.cookieLoopFunction();
    //this.totalCookiesForPikeFunction();
    //this.pushTotalAtEndOfArray('Total');
    console.log(this.customerPerHourArray);

    for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //1. create list items
      var liEl = document.createElement('li');
      //2 give them content
      liEl.textContent = storeHours[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  },

  renderTotal: function() {
    var ulEl = document.getElementById('pikeStore');

    this.totalCookiesForPikeFunction();

    var liEl = document.createElement('li');
    liEl.textContent = 'Total cookies sold: ' + this.total;
    ulEl.appendChild(liEl);
  }
};

pikeCookieStore.renderHourlyCookies();
pikeCookieStore.renderTotal();



//Store 2
var seatacCookieStore = {
  minCustomerdPerHour: 3,
  maxCustomerPerHour: 24,
  avgCookiesPerCust: 1.2,
  totalSeatac: 0,

  customerPerHourArray: [],
  cookiesPerHourArray: [],

  cookieLoopFunction: function() {
    for(var x = 0; x < storeHours.length; x++) {
      this.cookiesPerHourArray.push(Math.floor(this.customerPerHourArray[x] * this.avgCookiesPerCust));
    }
  },

  //random cust between min and max
  customerLoopFunction: function() {
    for(var i = 0; i < storeHours.length; i++) {

      this.customerPerHourArray.push(Math.floor(Math.random () * (24 - 3) + 3));
    }
  },

  //Total Cookie Stuff
  totalCookiesForSeatacFunction: function() {
    for(var y = 0; y < this.cookiesPerHourArray.length; y++) {
      this.totalSeatac += this.cookiesPerHourArray[y];
    }
    console.log(this.totalSeatac);
  },

  renderSeatacHourlyCookies: function() {
    //access the ul from sales.html
    var ulEl = document.getElementById('seatacStore');

    this.customerLoopFunction();
    this.cookieLoopFunction();
    //this.totalCookiesForPikeFunction();
    //this.pushTotalAtEndOfArray('Total');
    console.log(this.customerPerHourArray);

    for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //1. create list items
      var liEl = document.createElement('li');
      //2 give them content
      liEl.textContent = storeHours[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  },

  renderSeatacTotal: function() {
    var ulEl = document.getElementById('seatacStore');

    this.totalCookiesForSeatacFunction();

    var liEl = document.createElement('li');
    liEl.textContent = 'Total cookies sold: ' + this.totalSeatac;
    ulEl.appendChild(liEl);
  }
};

seatacCookieStore.renderSeatacHourlyCookies();
seatacCookieStore.renderSeatacTotal();


//Store 3
var seattleCenterCookieStore = {
  minCustomerdPerHour: 11,
  maxCustomerPerHour: 38,
  avgCookiesPerCust: 3.7,
  totalSeattleCenter: 0,

  customerPerHourArray: [],
  cookiesPerHourArray: [],

  cookieLoopFunction: function() {
    for(var x = 0; x < storeHours.length; x++) {
      this.cookiesPerHourArray.push(Math.floor(this.customerPerHourArray[x] * this.avgCookiesPerCust));
    }
  },

  //random cust between min and max
  customerLoopFunction: function() {
    for(var i = 0; i < storeHours.length; i++) {
      this.customerPerHourArray.push(Math.floor(Math.random () * (38 - 11) + 11));
    }
  },

  //Total Cookie Stuff
  totalCookiesForSeattleCenterFunction: function() {
    for(var y = 0; y < this.cookiesPerHourArray.length; y++) {
      this.totalSeattleCenter += this.cookiesPerHourArray[y];
    }
    console.log(this.totalSeattleCenter);
  },

  renderSeattleCenterHourlyCookies: function() {
    //access the ul from sales.html
    var ulEl = document.getElementById('seaCenterStore');

    this.customerLoopFunction();
    this.cookieLoopFunction();
    console.log(this.customerPerHourArray);

    for(var i = 0; i < this.cookiesPerHourArray.length; i++) {
      //1. create list items
      var liEl = document.createElement('li');
      //2 give them content
      liEl.textContent = storeHours[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
      ulEl.appendChild(liEl);
    }
  },

  renderSeattleCenterTotal: function() {
    var ulEl = document.getElementById('seaCenterStore');

    this.totalCookiesForSeattleCenterFunction();

    var liEl = document.createElement('li');
    liEl.textContent = 'Total cookies sold: ' + this.totalSeattleCenter;
    ulEl.appendChild(liEl);
  }
};

seattleCenterCookieStore.renderSeattleCenterHourlyCookies();
seattleCenterCookieStore.renderSeattleCenterTotal();


//Store 4

//Store 5
