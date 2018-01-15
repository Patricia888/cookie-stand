'use strict';

var cookieStandLocations = ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];

var pikeCookieStore = {
  miles: [13, 52, 44, 82, 6],
   render: function() {
     //access the ul from index.html
     var ulEl = document.getElementById('pikeStore');
 
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


