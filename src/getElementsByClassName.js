// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//inputs: classname
//output = an array of all elements matchign that classanme
//constraints = no native methods, use recusion
//edge: n/a


// var getElementsByClassName = function(className, element) {
//   var results = [];
//   var element = element || document.body;
//   var child = element.children;
//   console.log('children method', child[1].className);
//   var child2 = element.childNodes;
//   console.log('childNodes method', child2[3].className);

//   //if there are no more children nodes, return results

//   if (!child.length) {
//     return results;
//   } else {
//     console.log(element);
//   //else recursive call (getElementsByClassName) on current element
//     for (var i = 0; i < child.length; i++) {
//       if (child[i].className === className) {
//         results.push(child[i]);
//         results = results.concat(getElementsByClassName(className, child[i]));
//         console.log(results);
    
//      //if it matches class name
//        //push the element to the array  
//       } 
//     }

//     return results;
//   }
// };

var getElementsByClassName = function(className, element) {
  var results = [];
  var element = element || document.body;
  var child = element.childNodes;
  
  console.log("Element", element);
  console.log("Child node here", element.childNodes);
  //if there are no more children nodes, return results

  if (element.classList.contains(className)) {
    results.push(element);
  }   

  //else recursive call (getElementsByClassName) on current element
  if (child.length) {
    for (var i = 0; i < child.length; i++) {
      console.log("In the loop:", child[i]);
      if (child[i].className !== undefined) {

        results = results.concat(getElementsByClassName(className, child[i]));

        console.log('results of children',results);
      }
    
     //if it matches class name
       //push the element to the array  
       
    }
  } 
  return results;
};
