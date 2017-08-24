var overallList = document.getElementById("containerOverall");
var overallSelect = document.getElementById("containerSelect");

function  domString(products) {
  var productString = "";

  for(var i =0; i < products.length; i++) {

    productString += '<section class="sectionOverall" id="productSection">';
    productString += '<h1 class="allH">' + products[i].name + '</h1>';
    productString += '<h2 class="allH">' + products[i].category_id + '</h2>';
    productString += '<p class="allH">' + products[i].price + '</p>';
    productString += '</section>';

  }
    writeToDom(productString);
}

function writeToDom(strang) {
  overallList.innerHTML += strang;
}



function selectString(categories) {
  var bigCategoryString = "";

  for(var i = 0; i < categories.length; i++) {
    var categoriesString = "";
    categoriesString +=   `<option value=${categories[i].discount} id=${categories[i].id}>${categories[i].season_discount}</option>`;
    bigCategoryString += categoriesString;
}
  writeToDom2(bigCategoryString);
}

function writeToDom2(strang) {
  overallSelect.innerHTML += strang;
}

//EVENT LISTENER FUNCTION NEEDED HERE//

overallSelect.addEventListener("change", function(e){
  season_discount.value


})




/// NEED TO FINISH EVENT LISTENER HERE//

function getDiscount() {
  for(var i = 0; i < products.length; i++) {
    for(var j = 0; j < categories.length; j++){
      if (categories[j].season_discount === "Winter" && products[i].category_id === 1 ) {
          var price = products[i].price * categories[j].discount
      }
        else if (categories[j].season_discount === "Autumn" && products[i].category_id === 2 ) {
          var price = products[i].price * categories[j].discount
      } else if (categories[j].season_discount === "Spring" && products[i].category_id === 3 ) {
          var price = products[i].price * categories[j].discount
      }
  console.log(price);
}
}
}

// JSON STUFF TO GET IT //

var products = [];
var categories = [];

function executeThisCodeAfterFileLoads (){
  // console.log("this", this.responseText);
  var data = JSON.parse(this.responseText);
  domString(data.products);

}

function executeThisCodeAfterFileLoads2 (){
  // console.log("this", this.responseText);
  var data = JSON.parse(this.responseText);
  selectString(data.categories);

}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.open("GET", "products.json");
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
myRequest2.open("GET", "categories.json");
myRequest2.send();





