'use strict';

var cookieStandLocations = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];




//Example:
var twoThousandFifteen = {
  miles: [13, 52, 44, 82, 6],
  render: function() {
    //access the ul from index.html
    var ulEl = document.getElementById('fifteen');
 
    for(var i = 0; i < this.miles.length; i++) {
      //1. create list items
      var liEl = document.createElement('li');
      //2 give them content
      liEl.textContent = months[i] + ': ' + this.miles[i] + ' miles';
      //3 append the li to the ul
      //parentElement.appendChild(childElement);
      ulEl.appendChild(liEl);
    }
   
  }
};
//Store 1
//1 minmax cust per hour AND avg cookies in properties
//2 use method to generate random # of customers
//3 calculate and store cookies purchase each hour
//        -using random customer and avg cookies purchased per customer
//store the results for each hour in an array
//        -perhaps as a property of the object
//display values of each array for each location as unordered lists
//have total cookies sold that day at bottom
var pikeCookieStore = {
  minCustomerdPerHour: 23,
  maxCustomerPerHour: 65,
  avgCookiesPerCust: 6.3,

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

  //cookies per hr
  //cookiesSoldPerHour: randomCustomer1 * avgCookiesPerCust,
  //store results in an array
  //resultsArray: 




  render: function() {
    //access the ul from sales.html
    var ulEl = document.getElementById('pikeStore');
 
    this.customerLoopFunction();
    this.cookieLoopFunction();
    console.log(this.customerPerHourArray);

    for(var i = 0; i < storeHours.length; i++) {
      //1. create list items
      var liEl = document.createElement('li');
      //2 give them content
      liEl.textContent = storeHours[i] + ': ' + this.cookiesPerHourArray[i] + ' cookies';
      //3 append the li to the ul
      //parentElement.appendChild(childElement);
      ulEl.appendChild(liEl);
    }
   
  }
};

pikeCookieStore.render();

//Store 2

//Store 3

//Store 4

//Store 5
