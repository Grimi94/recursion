// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var nodes = this;
	var result = [];
	var regExp = new RegExp(className, 'i');
	
	if (this.hasOwnProperty('document')) {
		if (document.body.className.match(className)) {
			result.push(document.body);
		}
		nodes = this.document.body.children;
	}

	_.each(nodes, function(value){
		if (regExp.test(value.className)) {
			result.push(value);
		}
		else  {
			var temp = getElementsByClassName.call(value.children, className);
			if (temp.length ) {
				result.push(temp[0]);
			}
		}
	});
	return result;
};
