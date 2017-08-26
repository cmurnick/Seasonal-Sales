// JSON STUFF TO GET IT //

var product = [];
var category = [];

function executeThisCodeAfterFileLoads (){
  var data = JSON.parse(this.responseText);
  product = data.products;
  for (var i = 0; i < product.length; i++) {
    product[i].displayPrice = product[i].price;
  }
  domString(product);
  

}

function executeThisCodeAfterFileLoads2 (){
  var data = JSON.parse(this.responseText);
 category = data.categories;
  selectString(category);
  console.log(category);

}

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
myRequest2.open("GET", "categories.json");
myRequest2.send();

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.open("GET", "products.json");
myRequest.send();




var overallList = document.getElementById("containerOverall");
var overallSelect = document.getElementById("containerSelect");


function  domString(products) {
  var productString = "";
console.log(product);
console.log(category);
  for(var i =0; i < products.length; i++) {

     productString += '<section class="sectionOverall" id="productSection">';
      productString += '<h1 class="allH">' + products[i].name + '</h1>';

    for(var j = 0; j < category.length; j++) {

  
      if (products[i].category_id === category[j].id) {
        console.log(products[i].category_id, category[j].id);
        //fix so it doesn't rename
          products[i].category_id = category[j].name;
        console.log(products[i].category_id, category[j].name);
        productString += '<h2>' + products[i].category_id + '</h2>';
      }
      
  }
 productString += '<p class="allH">' + products[i].displayPrice + '</p>';
      productString += '</section>';
      // console.log(productString);
        writeToDom(productString);
}
    
}



function writeToDom(strang) {
  overallList.innerHTML = strang;
}



function selectString(categories) {
  var bigCategoryString = "";

for(var j = 0; j < categories.length; j++) {
    var categoriesString = "";
    
    categoriesString +=   `<option value=${categories[j].id} id=${categories[j].id}>${categories[j].season_discount}</option>`;
    bigCategoryString += categoriesString;
}
  writeToDom2(bigCategoryString);
}


function writeToDom2(strang) {
  overallSelect.innerHTML += strang;
}



//EVENT LISTENER FUNCTION NEEDED HERE//

overallSelect.addEventListener("change", function(e){
  getDiscount(e.target.value);

})




/// NEED TO FINISH EVENT LISTENER HERE//

function getDiscount(categoryId) {
  var discountPrice = "";
  var discount = 0;
  for(var i = 0; i < category.length; i++) {
 
    // getting discount of correct category

  }

  for(var i = 0; i < product.length; i++) {
    products[i].displayPrice = products[i].price;
      if (product[i].category_id.toString() == categoryId) {
          
          var discountPrice = product[i].price * discount;
          product[i].displayPrice = discountPrice;
      }
        

}
  console.log(discountPrice);
   domString(product);
}



// domString();


