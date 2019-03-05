function dom(id) {
	return document.getElementById(id);
}

function getOrderInfo() {
	//get data from sessionStorage and transfer to json
	var orderinfo = sessionStorage.getItem('order');
	var orderTprice = sessionStorage.getItem('orderTotalPrice');
	var orderID = sessionStorage.getItem('newOrderID');
	var newID = dom('newOrderID');
	newID.innerHTML = orderID;
	
	orderList = JSON.parse(orderinfo);
	//get number of items
	var olength = 0;
	for(var ever in orderList.name) {
		olength++;
	}
	var itemInfo = '';
	var itemList = dom('orderConfirmList');
	var n = 0;
	for(var i=0;i<olength;i++){
		n = i + 1;
		itemInfo = 
				'<li class="orderItem" id="item_' + i + '">' +
					'<span class="itemID">' + n + '</span>' + 
					'<span class="itemName">' + orderList.name[i] + '</span>' +
					'<span class="itemPrice">' + orderList.price[i] + '</span>' +
					'<span class="itemNum">' + orderList.num[i] + ' </span>' +
					'<span class="itemTotalPrice">' + orderList.totalPrice[i] + '</span>' +
				'</li>';
		itemList.innerHTML += itemInfo;
	}
	var otp = dom('tp');
	otp.innerHTML = orderTprice;
}

$(function () {
	$("#backToOrder").click(function (){
		window.location.href = "vip_index.html";
	});
	$("#sendOrderButton").click(function (){
		var currentDate = getNowFormatDate();
		//alert(currentDate);
		sessionStorage.setItem('newDate', currentDate);
		window.location.href = "payment.html";
	});
});

//Get time stamp in the format as YYYY-MM-DD HH:MM:SS
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
    return currentdate;
}