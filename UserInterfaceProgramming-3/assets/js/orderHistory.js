//This js file include the function for display order history and cancel specific order

//get order data from DB.js
var orderData = DB.order;
//get product data from DB.js
var productData = DB.product;
//display order history
newOrder();
displayHistory();

//This function is for getting element by ID
function dom(id) {
	return document.getElementById(id);
}

function newOrder(){
	var orderinfo = sessionStorage.getItem('order');
	var orderDate = sessionStorage.getItem('newDate');
	var orderTprice = sessionStorage.getItem('orderTotalPrice');
	var orderID = sessionStorage.getItem('newOrderID');
	orderList = JSON.parse(orderinfo);
	
	var olength = 0;
	for(var ever in orderList.name) {
		olength++;
	}
	var newoInfo = 
				'<li class="order" id="Order_0">' +
					'<span class="orderID">' + orderID + '</span>' +
					'<span class="orderItems">' +
						'<ul id="orderitem_0"></ul>' +
					'</span>' +
					'<span class="orderTotalPrice">' + orderTprice + '</span>' +
					'<span class="timeStamp">' + orderDate + ' </span>' +
					'<button class="cancelOrder">Cancel</button>' +
				'</li>';
	var ohl = dom('orderHistoryList');
	ohl.innerHTML += newoInfo;
	var new_oI = dom('orderitem_0');
	for(var i=0;i<olength;i++){
		newoInfo = 
				'<li>' +
					'<span class="itemName">' + orderList.name[i] + '</span>' +
					'<span class="itemAmount">' + orderList.num[i] + '</span>' +
					'<span class="itemTotalPrice">' + orderList.totalPrice[i] + '</span>' +
				'</li>';		
		new_oI.innerHTML += newoInfo;
	}
}

//This function is for displaying order history
function displayHistory() {
	var oLength = orderData.length;
	var pLength = productData.length;
	//alert(pLength);
	var oInfo = ''; //for adding new order
	var n = 0;
	var ohl = dom('orderHistoryList');
	var tempID = 0;
	var proName = '';
	var iInfo = ''; //for adding new item in an existing order
	for(var i=0;i<oLength;i++){
		if(tempID != orderData[i].order_id){
			tempID = orderData[i].order_id;
			for(var t=0;t<pLength;t++){
				if(orderData[i].product_id == productData[t].product_id){
					proName = productData[t].productname;
					break;
				}
			}
			n = i+1;
			oInfo = 
				'<li class="order" id="order_' + n + '">' +
					'<span class="orderID">' + orderData[i].order_id + '</span>' +
					'<span class="orderItems">' +
						'<ul id="orderitem_' + tempID +'">' +
							'<li>' +
								'<span class="itemName">' + proName + '</span>' +
								'<span class="itemAmount">' + orderData[i].amount + '</span>' +
								'<span class="itemTotalPrice">' + orderData[i].totalprice + ' kr</span>' +
							'</li>' +
						'</ul>' +
					'</span>' +
					'<span class="orderTotalPrice">' + orderData[i].orderprice + ' kr</span>' +
					'<span class="timeStamp">' + orderData[i].timestamp + ' </span>' +
					'<button class="cancelOrder" style="visibility:hidden">Cancel</button>' +
				'</li>';
			ohl.innerHTML  += oInfo;
		}
		else{
			var itemID = 'orderitem_' + tempID;
			var oi = dom(itemID);
			for(var t=0;t<pLength;t++){
				if(orderData[i].product_id == productData[t].product_id){
					proName = productData[t].productname;
					break;
				}
			}
			iInfo =
				'<li>' +
					'<span class="itemName">' + proName + '</span>' +
					'<span class="itemAmount">' + orderData[i].amount + '</span>' +
					'<span class="itemTotalPrice">' + orderData[i].totalprice + ' kr</span>' +
				'</li>';
			oi.innerHTML  += iInfo;
		}
	}
}

$(function () {
	//This function is for canceling the specific order
	$(".cancelOrder").click(function () {
		var result = confirm('Are you sure you want to cancel this order?');
		if(result){
			$(this).parent().empty();
		}
	});
});