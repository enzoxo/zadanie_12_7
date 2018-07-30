// OGÓLNA FUNKCJA

var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	 'X-Client-Id': '3124',
	 'X-Auth-Token': 'cb9dd6f844126eec9c2a9c27ff0f1866'
};

$.ajaxSetup({
	heders: myHeaders
});

$.ajax({
	url: baseUrl + '/board',
	method: 'GET',
	success: function(response) {
		setupColumns(response.columns);
	}
});

function setupColumns(columns) {
	columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
		board.createColumn(col);
		setupCards(col, column.cards),
	});
}

function setupCards(col, cards){
	cards.forEach(function (card) {
	var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
	col.createCard(cardObj);
	})
}
function randomString() {
	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ'.split();
	var str = '', i;
	for (i = 0; i < 10; i++) {
	  str += chars[Math.floor(Math.random() * chars.length)];
	}
	return str;
}

