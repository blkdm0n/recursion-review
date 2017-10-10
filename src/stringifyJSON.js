// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//input: object
//output: stringified object
//constraints: no native methods
//edge:

var stringifyJSON = function(obj) {
  var output = '';

  //if obj is array
  if (typeof obj === 'function') {
    output = '{}';
  } else if (Array.isArray(obj)) {
    output = '[';
    for (var i = 0; i < obj.length; i++) {
      output += stringifyJSON(obj[i]) + ',';
      //console.log('array', output);
    }
    if (!obj.length) {
      output += ']';
    } else {
      output = output.slice(0, -1) + ']';
    }
    
    //console.log('slice', output);
      
  } else if (typeof obj === 'object' && obj !== null) {
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
        output += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
      
      //console.log('object', arr);
    }
    output = '{' + output.slice(0, -1) + '}';
  } else {
    if (typeof obj === 'string') {
      return '"' + obj + '"'; 
    }
    return obj + '';

  }

  
  
  return output;
};

