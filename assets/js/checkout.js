var itemNames;
	var itemQuant;
	var itemPrice;
	var itemTotalPrice;

function preparePagePostLoad() {
	setCartScore();
	generateReceipt();
}

function numberChanged(rowNumber) {


itemQuant[rowNumber] = document.getElementById('itemQuant'+rowNumber).value;

document.getElementById('priceData'+rowNumber).innerHTML = itemPrice[rowNumber] * itemQuant[rowNumber];

itemTotalPrice [rowNumber] = itemPrice[rowNumber] * itemQuant[rowNumber]

calculateTotal();
}

function calculateTotal() {
	var total = 0;
	for(var i = 0; i<getCartScore(); i++) {
		total += itemTotalPrice[i];
		console.log(itemTotalPrice[i]);
	}

	total = total.toFixed(2);

	document.getElementById('confirm-checkout').innerHTML = total;
	//console.log(total);
}

function getCartScore(){
	return localStorage.getItem("score");
}

function setCartScore() {
	document.getElementById('cart-score').innerHTML = " "+getCartScore();
}

function generateReceipt() {

	itemNames = new Array();
	itemQuant = new Array();
	itemPrice = new Array();
	itemTotalPrice = new Array();

	itemNames = ['Bacon', 'Maple Apple Pecan', 'Pumpkin Spice', 'Birthday Cake', 'Cranberry', 'Blackberry'];
	itemQuant = [1, 3, 1, 2, 2, 1];
	itemPrice = [1.00, 3.00, 9.00, 1.11, 1.00, 1.65];
	

    var myTable= "<table style='align:center'>";


  for (var i=0; i<getCartScore(); i++) {
  	itemTotalPrice[i] = itemPrice[i]; 
    myTable+="<tr><td style='padding: 2em 0em 0em 3em; float: left;'><div class='quantity'><input id='itemQuant"+i+"' type='number' min='0' max='9' step='1' value='1' onchange='numberChanged("+i+")'></div></td>";
    myTable+="<td style='padding: 2em 3em 0em 0em; width: 200px; '>" + itemNames[i] + "</td>";
    myTable+="<td style='padding: 2em 0em 0em 5em; width: 200px; text-align: right;'>" + "$" + "</td>";
    myTable+="<td id='priceData"+i+"' style='padding: 2em 3em 0em 1em; width: 100px; text-align: right;'>" + itemPrice[i].toFixed(2) + "</td></tr>";

  }  
  calculateTotal();

  myTable+="<td style='padding: 0em 3em 2em 1em; width: 100px; text-align: right;'>" + "" + "</td></tr>";
   myTable+="</table>";

 document.getElementById('tablePrint').innerHTML = myTable;
}

