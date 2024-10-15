// Code your solution in this file!
// Function to return the first two drivers from an array
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2); // Returns the first two drivers
  }
  
  // Function to return the last two drivers from an array
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2); // Returns the last two drivers
  }
  
  // Array to store the two functions `returnFirstTwoDrivers` and `returnLastTwoDrivers`
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Function that creates a fare multiplier
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier; // Returns a function that multiplies the fare
    };
  }
  
  // Function that doubles the fare
  const fareDoubler = createFareMultiplier(2);
  
  // Function that triples the fare
  const fareTripler = createFareMultiplier(3);
  
  // Function that selects different drivers based on the function passed as the second argument
  function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers); // Executes the passed function (either returnFirstTwoDrivers or returnLastTwoDrivers)
  }
  
  // Exporting the functions
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers,
  };
  