$(function () {
    // First we hide all menus, but the one with all courses.

    $("#allMenu").show();
    $("#beerMenu").hide();
    $("#wineMenu").hide();
    $("#whiskeyMenu").hide();
	
	$("#allButton").addClass("currentButton");

    // Here we define the action when switching between menus. We add the activity as a click-function,
    // which is connected to the respective "tabs". The actual switching is done by
    // showing and hiding the fields.

    $("#allButton").click(function () {
		$("#allButton").addClass("currentButton");
		$("#beerButton").removeClass("currentButton");
		$("#wineButton").removeClass("currentButton");
		$("#whiskeyButton").removeClass("currentButton");
		$("#allMenu").show();
		$("#beerMenu").hide();
		$("#wineMenu").hide();
		$("#whiskeyMenu").hide();
    });

    // Here we show the beer menu and hide all other menus.
   
    $("#beerButton").click(function () { 
		$("#allButton").removeClass("currentButton");
		$("#beerButton").addClass("currentButton");
		$("#wineButton").removeClass("currentButton");
		$("#whiskeyButton").removeClass("currentButton");
		$("#allMenu").hide();
		$("#beerMenu").show();
		$("#wineMenu").hide();
		$("#whiskeyMenu").hide();
    });

    // Here we show the wine menu and hide all other menus.
    
    $("#wineButton").click(function () { 
		$("#allButton").removeClass("currentButton");
		$("#beerButton").removeClass("currentButton");
		$("#wineButton").addClass("currentButton");
		$("#whiskeyButton").removeClass("currentButton");
		$("#allMenu").hide();
		$("#beerMenu").hide();
		$("#wineMenu").show();
		$("#whiskeyMenu").hide();
    });

    // Here we show the whiskey menu and hide all other menus.
    
    $("#whiskeyButton").click(function () { 
		$("#allButton").removeClass("currentButton");
		$("#beerButton").removeClass("currentButton");
		$("#wineButton").removeClass("currentButton");
		$("#whiskeyButton").addClass("currentButton");
		$("#allMenu").hide();
		$("#beerMenu").hide();
		$("#wineMenu").hide();
		$("#whiskeyMenu").show();
    });

    // Here we put the different kinds of food into the respective menus.
    
    $(getFoods("beer", getFoodData())).appendTo("#beerMenu");
    $(getFoods("wine", getFoodData())).appendTo("#wineMenu");
    $(getFoods("whiskey", getFoodData())).appendTo("#whiskeyMenu");
    $(getAllMenu(getFoodData())).appendTo("#allMenu");
	
	$(".moreDetail").click(function() {
		if($(this).hasClass("anker-inverse")){
			$(this).removeClass("anker-inverse");
			$(this).addClass("anker-normal");
		}else{
			$(this).addClass("anker-inverse");
			$(this).removeClass("anker-normal");
		}
		$(this).parent().parent().next().slideToggle(); 
	});

});

function getAllMenu(arr) {

    // Collection variable
    //
    var temp = "";

    // One array contains the type descriptors, one the proper names to be entered in the menu listing.
    //
    var types = ["beer", "wine", "whiskey"];
    var names = ["Beers","Wines", "Whiskeys"];

    len = types.length;

    for (var i = 0; i < len; i++) {

        // For each type, the proper name and a horisontal ruler is added to the output.
        //
        temp += '<strong>' + names[i] + '</strong><br><hr>';

        // and then the resulting list for the type.
        //
        temp += getFoods(types[i], arr) +"<br>";

    }
    return temp;
}

function getFoods(type, arr) {

    // The collection variable
    var out = "";
    // Go through the array and collect all the items of the desired type.
    for (var i = 0; i < arr.length; i++) {

        // if the item is of the desired type, then we add the HTML string to the collection variable.
        // Otherwise we skip to the next item.
        //
        if (arr[i].type == type) {
            out += '<div class="menuItem" id="' + "menuitem" + arr[i].product_id + '" draggable="true" ondragstart="drag(event)">' + 
					'<img class="productImg" src="assets/pictures/' + arr[i].productname + '.png">' + 
					'<span class="productName">' + arr[i].productname + '</span>' + 
					'<span class="price">' + arr[i].price + ' kr </span>' +
					'<div class="productInfo">' + arr[i].alk + '% ' + arr[i].capacity + 'CL' + 
						'<span class="stock" style="color:#F75000;"> Stock: ' + arr[i].stock + '</span>' +
					'<img class="moreDetail" src="assets/pictures/anker.png"></div></div>' +
					'<div class="productDetail" id="menuitem'+ i +'" style="display:none;">' + 
					'<p class="productNation">Made in ' + arr[i].nation + '</p>' + 
					'<p class="productDsc">' + arr[i].dsc + '</p>' + '</div>'+
					'<div class="addToCart"></div>';
        }
    }
    // Once we are finished we return the resulting HTML string containing all the menu items for the desired menu.
    //
    return out;
}

function getFoodData() {
    var productData = DB.product;
	return productData;
}