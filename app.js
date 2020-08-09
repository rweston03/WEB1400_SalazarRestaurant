/*function changeMenu(name, color) {
	var myArr = ["brunch", "dinner", "drinks", "dessert"];
	
	var colorString = "box-shadow: 2px 2px 5px var(--color-drk-" + color + ");";
	var locationString = "assets/menus/" + name + ".png";
	
	document.getElementById(name).style = colorString;
	document.getElementById('menu-img').setAttribute("src", `${locationString}`);
	
	myArr.forEach(function(e) {
		if (e != name) {
			document.getElementById(e).style = "box-shadow: none;";
		}
	});
}*/


function changeMenu(name, color) {
	var myArr = ["#brunch", "#dinner", "#drinks", "#dessert"];
	
	var colorString = "2px 2px 5px var(--color-drk-" + color + ")";
	var locationString = "assets/menus/" + name + ".png";
	
	name = "#" + name;
	
	$(name).css("box-shadow", colorString);
	$("#menu-img").attr("src", locationString);
	
	myArr.forEach(function(e) {
		if (e != name) {
			$(e).css("box-shadow", "none");
		}
	});
}

$("#dinner").click(function() { 
	changeMenu("dinner", "orng");
});
$("#drinks").click(function() { 
	changeMenu("drinks", "prpl");
});
$("#dessert").click(function() { 
	changeMenu("dessert", "pink");
});
$("#brunch").click(function() { 
	changeMenu("brunch", "blue");
});
