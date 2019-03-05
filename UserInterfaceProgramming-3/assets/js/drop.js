//This js file include drag and drop function, delete items in the order, add and minus number of item, and count the total price
//This function is for getting element by ID
function dom(id) {
	return document.getElementById(id);
}

function deleteItem(Obj){
	var result = confirm('Are you sure you want to delete this item?');
	if(result){
		Obj.parentNode.parentNode.removeChild(Obj.parentNode);
		var orderitems = dom('orderList').children;
		if(!orderitems.length){
			dom('orderList').innerHTML = 'Please drag what you want from left menu and drop here.';
		}
	}
	TotalPrice();
}

function numChange(Obj){
	if(Obj.value.length == 1){
		Obj.value = Obj.value.replace(/[^1-9]/g,'')
	}else{
		Obj.value = Obj.value.replace(/\D/g,'')
	}
	var new_num = parseInt(Obj.value);

	if(isNaN(new_num)){
		Obj.value = '0';
	}else if(new_num > 20){
		Obj.value = '20';
	}

	TotalPrice();
}

function allowDrop(ev) {
    ev.preventDefault(); // This makes the item accept drop actions.
}

function drag(ev) {
	var json = {};
	var item_p = dom(ev.target.id).children;
	json.img = item_p[0].src;
	json.name = item_p[1].innerHTML;
	json.price = item_p[2].innerHTML;
	json.id = ev.target.id;
		
	//Order convert to jsonstring
	var jsonStr = JSON.stringify(json);
    ev.dataTransfer.setData("text",jsonStr);
}

function drop(ev) {

    // The default action is to not accept drops
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "copy";
    var data = ev.dataTransfer.getData("text"); // Get the data from the transfer...
    var nodeCopy = JSON.parse(data);
    nodeCopy.draggable = "false"; // The new element is set as being not draggable.
	var txtDom = dom('order_' + nodeCopy.id);
	var p_id = nodeCopy.id.replace(/[^\d.]/g,"");
	var orderitems = dom('orderList').children;
	if(!orderitems.length){
		dom('orderList').innerHTML = '';
	}
    if(!txtDom){
		var html = 
				'<div class="menuItem" id="order_' + nodeCopy.id + '">' +
					'<img class="itemImg" src="' + nodeCopy.img + '">' +
					'<span class="itemName">' + nodeCopy.name + '</span>' + 
					'<span class="delete" onclick="deleteItem(this)"><img src="assets/pictures/delete.png"></span>' + //float:right
					'<span class="totalPrice">' + nodeCopy.price + '</span>' +  //float:right
					'<input type="button" class="plus" value="+">' +  //float:right
					'<input id="num_' + p_id + '" class="num" type="text" value="' + 1 + '" onkeyup="numChange(this)">' +   //float:right
					'<input type="button" class="minus" value="-">' +  //float:right
					'<span class="price">' + nodeCopy.price + '</span>' +  //float:right
				'</div>';
		var cart = dom('orderList');
		
		cart.innerHTML += html;
	}else{
		var spans = dom('order_'+nodeCopy.id).children;	
		var price = spans[3].innerHTML.replace(/[^\d.]/g,"") || 0;
		var num = parseInt(spans[5].value);
		if(num < 20){
			num++;
			spans[3].innerHTML = price * 1 + nodeCopy.price.replace(/[^\d.]/g,"") * 1 + ' kr';
			spans[5].value = num;
		}
	}
	
	//plus number of item
    $(".plus").click(function() { 
		var t = $(this).parent().find('.num'); 
		if(parseInt(t.val()) < 20) {
			t.val(parseInt(t.val()) + 1); 
		}
		if (t.val() <= 1) { 
			t.val(1); 
		} 
		TotalPrice(); 
	});
	
	//minus number of item
	$(".minus").click(function() { 
		var t = $(this).parent().find('.num'); 
		t.val(parseInt(t.val()) - 1); 
		if (t.val() <= 1) { 
			t.val(1); 
		} 
		TotalPrice(); 
	});
	
	TotalPrice();
}

function TotalPrice(){
	var allprice = 0; //total price
	$("#orderList .menuItem").each(function() { //for each item
		var price = parseFloat($(this).find('.price').text());
		var num = $(this).find('.num');
		var new_num = parseInt(num.val());
		var new_tp = parseFloat(price * new_num).toFixed(1);
		$(this).find('.totalPrice').text(new_tp + ' kr');
		var t_price = parseFloat($(this).find(".totalPrice").text()); //total price of this item  
		allprice += t_price;
	});
	$("#totalP").val(allprice.toFixed(1) + ' kr'); //output total price
}
