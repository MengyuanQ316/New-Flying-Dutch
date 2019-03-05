$(function () {
	$("#confirmOrderButton").click(function (){
		var orderInfo = {};
		orderInfo.name = {};
		orderInfo.price = {};
		orderInfo.num = {};
		orderInfo.totalPrice = {};
		var items = $("#orderList").children();
		//alert(items);
		for(var i=0;i<items.length;i++){
			var subitem = items[i].children;
			orderInfo.name[i] = subitem[1].innerHTML;
			orderInfo.price[i] = subitem[7].innerHTML;
			orderInfo.num[i] = subitem[5].value;
			orderInfo.totalPrice[i] = subitem[3].innerHTML;
		}
		//alert(orderInfo);
		var totalprice = $("#totalP").val();
		var rand = Math.floor(Math.random () * 90) + 10;
		sessionStorage.setItem('order', JSON.stringify(orderInfo));
		sessionStorage.setItem('orderTotalPrice', totalprice);
		sessionStorage.setItem('newOrderID', rand);
		window.location.href = "confirm.html";
	});
});