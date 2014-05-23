// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var nodes;
	var regExp = new RegExp("(?:^|\\s)"+className+"(?:\\s|$)");
	var newArr = [];
	if (this.hasOwnProperty('document')) {
		if (document.body.className.match(className)) {
			newArr.push(document.body);
		}
		nodes = this.document.body.children;
	}
	else{
		nodes = this.children;
	}
	
	
	_.each(nodes, function(value){
		//var length = value.children.length;
		//if (length !== 0 && length !== undefined) console.log(true);
		if (regExp.test(value.className)) {
			var temp =  value;
			newArr.push(temp);
		}
		else if (value.hasOwnProperty('children')) {
			if (value.children.length > 0){
				var temp = _.flatten(getElementsByClassName.call(value,className));
				if (temp.length) {newArr.push(temp[0]);}
				
			}
		}
		
	});
	console.log(newArr);
	return newArr;
};
