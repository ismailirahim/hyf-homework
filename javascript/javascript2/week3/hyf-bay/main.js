
let ul = document.getElementById('products');
let search = document.getElementById('searchInput');
let shipsTo = document.getElementById('shipsTo');
let sorting = document.getElementById('sort');
let shopingCard = [];
let productList = [];
let priceList = [];



// Function for adding elements 
function createDisplay (products) {
    products.forEach(element => {
        let li = document.createElement('li');
        ul.appendChild(li);
        let divName = document.createElement('div');
        divName.innerHTML = element.name;
        divName.setAttribute('class','name')
        li.appendChild(divName);
        let divPrice = document.createElement('div')
        divPrice.innerHTML = element.price;
        divPrice.setAttribute('class','price')
        li.appendChild(divPrice);
        let divRating = document.createElement('div');
        divRating.innerHTML = element.rating;
        divRating.setAttribute('class','rating')
        li.appendChild(divRating);
        let shipsTo = document.createElement('div');
        shipsTo.setAttribute('class','ships-to');
        li.appendChild(shipsTo);
        let ulCountries = document.createElement('ul')
        shipsTo.appendChild(ulCountries);
        let liShipTo = document.createElement('li')
        ulCountries.appendChild(liShipTo);
        liShipTo.innerHTML = element.shipsTo;
        let liSecondContry = document.createElement('li');
        ulCountries.appendChild(liSecondContry);
        let btn = document.createElement('button');
        btn.innerHTML = 'Add to cart';
        li.appendChild(btn); 
        btn.onclick = () => addToShopingCard(element);        
    });
}



// Displaying products and geting the price list 
function displayProducts() {
    productList = getAvailableProducts();
    createDisplay(productList);
    priceList = productList.map(val => val.price);
}

displayProducts();


// Price analytics
function callBackFunc(param) {
    console.log(param);
};
sendPricesToServer(priceList, callBackFunc);

// Function for clearing the products that are currently shown
function clearDisplay () {
    let clear = document.getElementById('products')
    clear.innerHTML = '';
}

// Render products function
function renderProducts (products) {
    clearDisplay();
    createDisplay(products);
}
renderProducts(productList);




// Filter Products by search input
search.addEventListener('keyup', function (){
    if (event.keyCode === 13) {
        let value = searchInput.value;
        let result = productList.filter(prod => value === prod.name );
        if(result.length == 0) {
            renderProducts(productList);
        }
        else {
            renderProducts(result);
        }
    }
})

// first letter capitalize 
function capitalize(s) {
    return s && s[0].toUpperCase() + s.slice(1);
}


// Get product's from selected country
shipsTo.addEventListener('change',countries) 
function countries (){
    let country = shipsTo.value;
    let filteredCountryProd = productList.filter(product => product.shipsTo.includes(capitalize(country)));
    if(filteredCountryProd.length === 0) {
        renderProducts(productList);
    }
    else {
        renderProducts(filteredCountryProd);
    }
}


// sort the product's by price and name 
sorting.addEventListener('change', function (){
    if(sorting.value === 'expensive'){
    productList.sort((a, b) => b.price - a.price);
    }
    else if (sorting.value === 'cheap') {
        productList.sort((a, b) => a.price - b.price);
    }
    else {
        productList.sort((a,b) =>(a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    }
    renderProducts(productList);
});


// Shopping cart 

function addToShopingCard (element){
    let cart = document.getElementsByClassName('cart')[0].children[2];
    let li = document.createElement('li');
    cart.appendChild(li);
    let divCartName = document.createElement('div');
    divCartName.innerHTML = element.name;
    divCartName.setAttribute('class', 'name')
    li.appendChild(divCartName)
    let divCartPrice = document.createElement('div');
    divCartPrice.innerHTML = element.price
    divCartPrice.setAttribute('class', 'price')
    li.appendChild(divCartPrice);
    var total = document.getElementsByClassName('total')[0].children[0].children[0];;
    let totalPrice = parseInt(total.innerHTML);
    if (totalPrice) {
        totalPrice = totalPrice + element.price;
    }
    else {
        totalPrice = element.price;
    }
    total.innerHTML =  totalPrice;
}