//Mutable data types are types that can be changed or overwritten. Such data types are object and arrays


/*

 Object literal - list of zero or more pairs of property names and associated values of an object
  
  {}

  {key: 'value'}

  {
    key: 'value',
    key: 'value',
    key: 'value'
  }

*/


// Create a function that creates an object with the key of car and the value of Tesla.

var createCarObject = function(){
  //Code Here
  return;
}


//return the brand of the truck
var truckName = function(){
 var obj = {
  car: 'tesla',
  truck: 'dodge',
  boat: false
 };

 return;

}

var addToObject = function(){
  var obj = {car: 'tesla'}
  obj.car2 = 'porche';
  return obj;

}



var changeObject = function() {
  var obj = {car: 'toyato'};
  obj.car = 'skateboard';
  return obj;
};

//return the color yellow 
var example = function(){
var obj = {
  name: 'JS Jack'
  email: 'reactNative@tga.com'
  colors: ['blue', 'yellow', 'black'];
}
  return;
}
/************************


Array - a list of values


**************************/


// Create an array with 4 string values (strings can be anything you want, example: 'cat', 'heyheyheyhey'..ect):

var createArrayOfStrings = function(){

  // return;
};


// Create an array of 5 numbers:
var createArrayOfNumbers = function(){
 
  // return;
};


// Create an array of mixed data types:

var createArrayOfMixedDataTypes = function(){

// return;

};



//Return last string value in the array:
//['The', 'fat', 'cat', 'is', 'fat', '!'];

var lastStringValueInArray = function(){
  //return;
};


//Return last element in the array:
// [1, 2, 5, 8, 100];

var thirdNumberInArray = function(){
  //return;
};

//Return the 4th character in the first string value within the array:
// ['Javascript', 'is' 'Awesome'];
//Output: 'a'
var forthCharacterOfStringValueInArray = function(){
  //return;

};

//Return the number 9 within the array:

//[{car: 'RangeRover'}, 'ES6', [2, 4, 6], [[3, 6, 9]], 1000]

var mixedDataTypeArray = function(){

  //return;
}

//Change the 2nd element in the array to a string value:
var changeArray = function(){
  var changeMe = [1, 3, 100, 30000, 1.9];
  
  return changeMe;

};

//add an object with a key of javascript and the value of true to the end of the array
var addToArray = function(){
  var addElement = ['hi', {}, '[]', [1, 2, 3]];
  
  return addElement;

};