var billAmount = 0;

function preparePagePostLoad() {
    setCartScore();
}

function getCartScore(){
    if(localStorage.getItem("score")) {
        return localStorage.getItem("score");
    }
    return 0;
}

function setCartScore() {
    document.getElementById('cart-score').innerHTML = " "+getCartScore();
}

function incrementCartScore() {

    var score = document.getElementById('cart-score').innerHTML.trim();
    score++;  
    document.getElementById('cart-score').innerHTML = " "+score;
    localStorage.setItem("score", score);

    generateBillAmount();

    return false;
}

function generateBillAmount() {
	billAmount += 1.25;
    localStorage.setItem("cost", billAmount);

    return false;
}


function toggleMenuCard(cardID) {    
    var x = document.getElementById('card'+cardID);
    var y = document.getElementById('card-alt'+cardID);
    
    
      if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'block';
    } 
    else {
        x.style.display = 'none';
        y.style.display = 'none';
    }
}