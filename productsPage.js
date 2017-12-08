var bagCounter = 0;
//create nodes
var addToBasket = document.getElementById("bagCounterId");
var ProductsRender = document.getElementById("productsInside");
var compareContainer = document.getElementById("compareContainer");
var selected = document.getElementById("selectId");

//create products objects
var product = [{
	id: 0,
	brand: "Cube",
	name: "Hanzz 190 Race 27.5\" 2018",
	price: "9999",
	category: "Biciclete",
  },{
	id: 1,
	brand: "Cube",
	name: "Stereo 140 Youth 24\" 2018",
	price: "7999",
	category: "Biciclete",
  },{
	id: 2,
	brand: "Cannondale",
	name: "Trail 6 29\" 2016",
	price: "2229",
	category: "Biciclete",
  },{
	id: 3,
	brand: "Cannondale",
	name: "CAAD Optimo Sora 2017",
	price: "3199",
	category: "Biciclete",
  },{
	id: 4,
	brand: "Focus",
	name: "Whistler Pro 27\" 20G 2017",
	price: "3499",
	category: "Biciclete",
  },{
	id: 5,
	brand: "Focus",
	name: "Whistler Elite 27\" 24G 2017",
	price: "2199",
	category: "Biciclete",
  },{
	id: 6,
	brand: "Giant",
	name: "Talon 3 2017",
	price: "2499",
	category: "Biciclete",
  },{
	id: 7,
	brand: "Giant",
	name: "Avail 1 2017",
	price: "2999",
	category: "Biciclete",
  },{
	id: 8,
	brand: "Kross",
	name: "Vento 1.0 2016",
	price: "2290",
	category: "Biciclete",
  },{
	id: 9,
	brand: "Kross",
	name: "Hexagon R5 2017",
	price: "1690",
	category: "Biciclete",
  },{
	id: 10,
	brand: "Sprint",
	name: "Maverick 27.5\" 2017",
	price: "1499",
	category: "Biciclete",
  },{
	id: 11,
	brand: "Sprint",
	name: "GTS 29\" 2017",
	price: "1799",
	category: "Biciclete",
  },{
	id: 12,
	brand: "Trek",
	name: "Marlin 7 2017",
	price: "2980",
	category: "Biciclete",
  }]

//insert product inside to an element
function renderProduct(product) {
  var nodeSection = document.createElement("section");
  var nodeArticle = document.createElement("article");
  var node1 = document.createElement("h5");
  var node2 = node1.cloneNode(false);
  var node3 = node1.cloneNode(false);
  var textProductBrand = document.createTextNode(product.brand);
  var textProductName = document.createTextNode(product.name);
  var textProductPrice = document.createTextNode(product.price + " lei"); 
  var buttonNode = document.createElement("button");
  var myImage = new Image(200,150);  //Image(width, height) //equivalent to document.createElement('img')
	myImage.src = product.img;
	myImage.alt = "Image can't be loaded!";
	myImage.className = "ProductImage";
  var checkBoxNode = document.createElement("input");
	checkBoxNode.type = "checkbox";
	checkBoxNode.className = "compareButtonClass";
	checkBoxNode.id = "compareButtonId";
  
  buttonNode.addEventListener('click', addToBasketFunction);
  nodeArticle.appendChild(myImage);
  nodeArticle.appendChild(checkBoxNode);
  nodeArticle.appendChild(node1);
  nodeArticle.appendChild(node2);
  nodeArticle.appendChild(node3);
  nodeArticle.appendChild(buttonNode);
  buttonNode.textContent = "Add to Basket!";
  node1.appendChild(textProductBrand);
  node2.appendChild(textProductName);
  node3.appendChild(textProductPrice);
  nodeSection.appendChild(nodeArticle);
  ProductsRender.appendChild(nodeSection);
}

//function for incrementing the basket when the button is pressed using -event delegation-
var addToBasketFunction = function(event) {
  if (event.target.innerHTML = "Add to Basket!") {
	  bagCounter++; 
  }
  addToBasket.textContent = bagCounter;
}

//create a number of elements equal to the # of products
function init() {
  for (i = 0; i < product.length; i++) {
	renderProduct(product[i]);
  }
}

document.addEventListener("DOMContentLoaded", function() {
	init();
	console.log(ProductsRender.childElementCount);
	addToBasket.innerHTML = bagCounter;
  //EventListener for showing the compareContainer when one checkbox is checked
	var compareButton = document.getElementsByClassName('compareButtonClass');
		for (var i=0; i < compareButton.length; i++) {
		  compareButton[i].addEventListener("change", function(event) {
			if(event.target.checked) {
				compareContainer.style.visibility = "visible";
				var product_img_div = document.createElement('div');
				var product_img = new Image(50,40);
			}
			if(event.target.checked == false) {
				compareContainer.style.visibility = "hidden";
			}
		  });
		}
	selected.addEventListener('change', function(){
		console.log(ProductsRender.childElementCount);
		//delete all products
		if(ProductsRender.hasChildNodes()){
			ProductsRender.parentNode.removeChild(ProductsRender);
		}
		//sorting
		var sortedProducts = product.sort(function(product){
			
		});
	});
	console.log(ProductsRender.childElementCount);
});


	  

