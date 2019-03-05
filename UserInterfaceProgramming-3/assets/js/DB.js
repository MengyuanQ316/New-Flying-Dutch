var DB = {
    "vipcustomer": [
        {
            "user_id": "1",
            "password": "password",
            "username": "Tor",
            "first_name": "Tor",
            "last_name": "Assies",
			"credit": "200",
            "email": "tor.assies@it.uu.se",
            "phone": "0704811411"
        },
        {
            "user_id": "2",
            "password": "bbb456",
            "username": "sulstr",
            "first_name": "Sulayman",
            "last_name": "Street",
			"credit": "500",
            "email": "sulayman.street@it.uu.se",
            "phone": "0701517627"
        }
    ],
    "order": [
		{
            "transaction_id": "9",
			"order_id": "12",
            "product_id": "101",
			"user_id": "1",
            "amount": "4",
            "totalprice": "48",
			"orderprice": "108",
            "timestamp": "2019-02-12 16:05:21"
        }, {
			"transaction_id": "8",
			"order_id": "12",
            "product_id": "102",
			"user_id": "1",
            "amount": "2",
            "totalprice": "60",
			"orderprice": "108",
            "timestamp": "2019-02-12 19:05:21"
        }, {
			"transaction_id": "7",
			"order_id": "03",
            "product_id": "102",
			"user_id": "1",
            "amount": "2",
            "totalprice": "60",
			"orderprice": "120",
            "timestamp": "2019-02-12 19:05:21"
        }, {
			"transaction_id": "6",
			"order_id": "03",
            "product_id": "202",
			"user_id": "1",
            "amount": "2",
            "totalprice": "60",
			"orderprice": "120",
            "timestamp": "2019-02-12 19:05:21"
        }, {
			"transaction_id": "5",
			"order_id": "06",
            "product_id": "202",
			"user_id": "1",
            "amount": "2",
            "totalprice": "60",
			"orderprice": "120",
            "timestamp": "2019-02-12 19:05:21"
        }, {
			"transaction_id": "4",
			"order_id": "06",
            "product_id": "302",
			"user_id": "1",
            "amount": "2",
            "totalprice": "60",
			"orderprice": "120",
            "timestamp": "2019-02-12 19:05:21"
        }, {
			"transaction_id": "3",
			"order_id": "22",
            "product_id": "102",
			"user_id": "1",
            "amount": "2",
            "totalprice": "60",
			"orderprice": "60",
            "timestamp": "2019-02-12 19:05:21"
        }, {
			"transaction_id": "2",
			"order_id": "17",
            "product_id": "101",
			"user_id": "1",
            "amount": "2",
            "totalprice": "60",
			"orderprice": "120",
            "timestamp": "2019-02-12 19:05:21"
        }, {
			"transaction_id": "1",
			"order_id": "17",
            "product_id": "202",
			"user_id": "1",
            "amount": "2",
            "totalprice": "60",
			"orderprice": "120",
            "timestamp": "2019-02-12 19:05:21"
        }
	],
    "employee": [
		{
			"employee_id": "86",
			"password": "password",
			"username": "Sara",
			"first_name": "Sara",
			"last_name": "White",
			"email": "sara.white@it.uu.se",
			"phone": "0701517630",
			"employdate": "2014-10-10 19:04:13"
		}, {
			"employee_id": "87",
			"password": "aaa123",
			"username": "mikbl",
			"first_name": "Mike",
			"last_name": "Black",
			"email": "mike.black@it.uu.se",
			"phone": "0701517730",
			"employdate": "2017-10-10 19:00:10"
		}
	],
    "product": [
		{
            "product_id": "101",
			"productname": "Breznak",
			"type": "beer",
			"stock": "20",
			"price": "12",
			"special": "n",
			"alk": "5.1",
			"capacity": "33",
			"nation": "Czech Republic",
			"dsc": "Spicy taste with hints of crispbread, apricot and orange peel. Served at 8-10 ° C as a social drink or for home cooking."
        },
        {
            "product_id": "102",
			"productname": "Falcon Export",
			"type": "beer",
			"stock": "9",
			"price": "12.9",
			"special": "n",
			"alk": "5.2",
			"capacity": "50",
			"nation": "Sweden",
			"dsc": "Bready taste with hints of honey, apricot and citrus. Served at 8-10 ° C for home cooking or as a social drink."
        },
		{
            "product_id": "103",
			"productname": "Mariestads Export",
			"type": "beer",
			"stock": "9",
			"price": "15",
			"special": "n",
			"alk": "5.3",
			"capacity": "50",
			"nation": "Sweden",
			"dsc": "Spicy taste with hints of honey, light bread and citrus. Served at about 8 ° C as a social drink or for home cooking."
        },
		{
            "product_id": "201",
			"productname": "Stone Neapolitan Dynamite",
			"type": "beer",
			"stock": "9",
			"price": "12",
			"special": "y",
			"alk": "8.5",
			"capacity": "65",
			"nation": "the United States",
			"dsc": "Complex, roasted flavor with sweetness, with elements of coffee, dark chocolate, vanilla, pumpernickel, nuts and red berries. Served at 12-14 ° C as a drink or for chocolate desserts."
        },
		{
            "product_id": "202",
			"productname": "Chimay Grande Reserve",
			"type": "beer",
			"stock": "9",
			"price": "12",
			"special": "y",
			"alk": "10.5",
			"capacity": "37.5",
			"nation": "Belgium",
			"dsc": "Complex taste with sweetness and character of whiskey barrels, elements of dried fruit, vanilla, cloves, sweet liquorice, nuts and rolls. Served at 12-14 ° C as a companion drink or to hard cheese."
        },
		{
            "product_id": "203",
			"productname": "Rodenbach",
			"type": "beer",
			"stock": "9",
			"price": "11.5",
			"special": "y",
			"alk": "7",
			"capacity": "75",
			"nation": "Belgium",
			"dsc": "Variegated, slightly sour taste with hints of barrels, dried apple rings, apple cider vinegar, buttermilk, chocolate, orange, nougat and apricot. Served at 8-10 ° C as a drink or aperitif or for cold cuts."
        },
		{
            "product_id": "301",
			"productname": "The Famous Grouse",
			"type": "whiskey",
			"stock": "9",
			"price": "30",
			"special": "n",
			"alk": "40",
			"capacity": "70",
			"nation": "the UK , Scotland ",
			"dsc": "Maltig, slightly smoky whiskey with fat character, hints of straw, heather honey, butter cream and iodine. Served as a digestif."
        },
		{
            "product_id": "302",
			"productname": "Jack Daniel's",
			"type": "whiskey",
			"stock": "9",
			"price": "33",
			"special": "n",
			"alk": "40",
			"capacity": "70",
			"nation": "USA , Tennessee ",
			"dsc": "Tasty, spicy whiskey with the character of chilled oak barrels, slices of dried apricots, nuts, buttermilk, orange and vanilla. Served room temperature as avec, or used as a drinking ingredient."
        },
		{
            "product_id": "303",
			"productname": "Aberlour",
			"type": "whiskey",
			"stock": "9",
			"price": "65",
			"special": "n",
			"alk": "40",
			"capacity": "70",
			"nation": "the UK , Scotland ",
			"dsc": "Characteristic, spicy taste with some smokiness, elements of barrels, orange peel, chocolate and dried fruits. Served room temperature as avec."
        },
		{
            "product_id": "401",
			"productname": "Langhe Chardonnay",
			"type": "wine",
			"stock": "1",
			"price": "10.9",
			"special": "n",
			"alk": "12.5",
			"capacity": "75",
			"nation": "Italy",
			"dsc": "The drink is stocked by supplier and not by Systembolaget . It is not tested by Systembolaget and therefore no taste description is shown. Please contact the supplier for more information about the beverage."
        },
		{
            "product_id": "402",
			"productname": "Les Fumées Blanches",
			"type": "wine",
			"stock": "9",
			"price": "11.5",
			"special": "n",
			"alk": "12",
			"capacity": "75",
			"nation": "France",
			"dsc": "Weary, very fresh flavor with hints of rhubarb, herbs, red currants and citrus. Served at about 8 ° C as a companion wine, for dishes of fish or bird, and for salads."
        },
		{
            "product_id": "403",
			"productname": "Torres Gran Coronas",
			"type": "wine",
			"stock": "9",
			"price": "9.9",
			"special": "n",
			"alk": "14",
			"capacity": "75",
			"nation": "Spain",
			"dsc": "Fruity, slightly developed flavor with roasted barrel character, elements of black currants, chocolate, dark cherries, licorice and tobacco. Served at 16-18 ° C for lamb or beef dishes."
        }
	]
};