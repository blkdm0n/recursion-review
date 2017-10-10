// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//input: object
//output: stringified object
//constraints: no native methods
//edge:

var stringifyJSON = function(obj) {
  var arr;

  //if obj is array
  if (typeof obj != 'function') {
    arr = [];
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        arr = arr.concat(stringifyJSON(arr[i]));
        console.log('array', arr);
      }
      
    } else if (typeof obj === 'object') {
      for (var key in obj) {
        arr = arr.concat(stringifyJSON(obj.key));
        console.log('object', arr);
      }
  
    } else {
      if (typeof obj === 'string') { 
        return '"' + obj + '"';
      } else {
        var primitive = '';
        primitive += obj;
        return primative;
        console.log('primative', arr);
      }

    }
  }
  return arr;
};
