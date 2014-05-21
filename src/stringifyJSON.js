// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) { return 'null';}
  else if (typeof obj === 'function' || typeof obj === 'undefined') {return '';} 
  else if( obj instanceof String || typeof obj === 'string'){
  	return "\""+obj+"\"";
  }
  else if (typeof obj === 'number' || typeof obj === 'boolean'){
  	return ""+obj+"";
  }
  else if (Array.isArray(obj)) {
  	var stringified = [];
  	_.each(obj,function(val){
  		stringified.push(stringifyJSON(val));
  	});
  	return "["+stringified+"]";
  }
  else if (typeof obj === 'object'){
  	var stringified = [];
  	_.each(obj,function(val, key){
  		stringified.push("\""+key+"\""+':'+stringifyJSON(val));
  	});
  	return "{"+stringified+"}";

  }

};
