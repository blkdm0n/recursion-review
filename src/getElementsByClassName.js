// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//inputs: classname
//output = an array of all elements matchign that classanme
//constraints = no native methods, use recusion
//edge: n/a


var getElementsByClassName = function(className
) {
  var results = [];
  var element = element || document.body;

  //if there are no more children nodes, return results

  if (!element.childNodes.length) {
    return results;
  }

  //else recursive call (getElementsByClassName) on current element

  //look at an element
  if (element.className === className) {
    results.push(element);
    return getElementsByClassName();
    
     //if it matches class name
       //push the element to the array  
  }  
};
