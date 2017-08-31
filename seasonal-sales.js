








function executeThisCodeAfterFileLoads(){
  var productsData = JSON.parse(this.responseText);
  getCategoriez(productsData.products);

};

function executeThisCodeIfFileErrors(){
  console.log("Shit's broke");
}

var myProductz = new XMLHttpRequest();
myProductz.addEventListener("load", executeThisCodeAfterFileLoads);
myProductz.addEventListener("error", executeThisCodeIfFileErrors);
myProductz.open("GET", "products.json");
myProductz.send();


function getCategoriez(productz) {
  var myCategoriez = new XMLHttpRequest();
  myCategoriez.addEventListener("load", executeThisCodeAfterFileLoads2);
  myCategoriez.addEventListener("error", executeThisCodeIfFileErrors);
  myCategoriez.open("GET", "categories.json");
  myCategoriez.send();

  function executeThisCodeAfterFileLoads2(){
    var categoriesData = JSON.parse(this.responseText);
    console.log("combined Array", categoriesData.categories);
    console.log("JSON object", categoriesData);
    combinedArray(productz, categoriesData.categories);
  }
}

function combinedArray (productsArray, categoriesArray) {
  productsArray.forEach(function(product){
    var currentCategoriesId = product["category_id"];

    categoriesArray.forEach(function(category) {
      if (currentCategoriesId === category.id) {
          product["type"] = category.name;
          product["season"] = category.season_discount;
          product["discount"] = category.discount;
          product["finalPrice"] = product.price - (product.price * product.discount);
         }
      });

   
  });
   domString(productsArray); 
  }


function domString (products) {
  
  var discountSelection = document.getElementById("containerSelect").innerHTML;
  var productString = "";
  for(var i =0; i < products.length; i++) {

      productString += '<section class="sectionOverall" id="productSection">';
      productString += '<h1 class="allH">' + products[i].name + '</h1>';
      productString += '<h2 class="allH2">' + products[i].type + '</h2>';


      if (discountSelection === products[i].season) {
        productString += '<h2>' + products[i].finalPrice + '</h2>';
        } else {
        productString += '<h2>' + products[i].price + '</h2>';
        }
        
      productString += '</section>'
      }
        console.log(productString);
        writeToDom(productString);
 };  
};


var overallList = document.getElementById("containerOverall");

function writeToDom(strang) {
  console.log("strang", strang);
  overallList.innerHTML = strang;

}


containerSelect.addEventListener("change", function(e) {
  // console.log(e);
  //   domString(e);
  //   // console.log(e);
  //   // product[i].price = product[i].finalPrice;
  // })



























//-----------------------------------------------------------------------//


// JSON STUFF TO GET IT //

// var product = [];
// var category = [];

// function executeThisCodeAfterFileLoads (){
//   var data = JSON.parse(this.responseText);
//   product = data.products;
//   for (var i = 0; i < product.length; i++) {
//     product[i].displayPrice = product[i].price;
//   }
//   domString(product);
  

// }

// function executeThisCodeAfterFileLoads2 (){
//   var data = JSON.parse(this.responseText);
//  category = data.categories;
//   selectString(category);
//   console.log(category);

// }

// var myRequest2 = new XMLHttpRequest();
// myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
// myRequest2.open("GET", "categories.json");
// myRequest2.send();

// var myRequest = new XMLHttpRequest();
// myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
// myRequest.open("GET", "products.json");
// myRequest.send();





// var overallSelect = document.getElementById("containerSelect");


// function  domString(products) {
//   var productString = "";
// console.log(product);
// console.log(category);
//   for(var i =0; i < products.length; i++) {

//      productString += '<section class="sectionOverall" id="productSection">';
//       productString += '<h1 class="allH">' + products[i].name + '</h1>';

//     for(var j = 0; j < category.length; j++) {

  
//       if (products[i].category_id === category[j].id) {
//         console.log(products[i].category_id, category[j].id);
//         //fix so it doesn't rename
//           products[i].category_id = category[j].name;
//         console.log(products[i].category_id, category[j].name);
//         productString += '<h2>' + products[i].category_id + '</h2>';
//       }
      
//   }
//  productString += '<p class="allH">' + products[i].displayPrice + '</p>';
//       productString += '</section>';
//       // console.log(productString);
//         writeToDom(productString);
// }
    
// }



// function writeToDom(strang) {
//   overallList.innerHTML = strang;
// }



// function selectString(categories) {
//   var bigCategoryString = "";

// for(var j = 0; j < categories.length; j++) {
//     var categoriesString = "";
    
//     categoriesString +=   `"<option value=${categories[j].id} id=${categories[j].id}>${categories[j].season_discount}</option>"`;
//     bigCategoryString += categoriesString;
// }
//   writeToDom2(bigCategoryString);
// }


// function writeToDom2(strang) {
//   overallSelect.innerHTML += strang;
// }



// //EVENT LISTENER FUNCTION NEEDED HERE//

// overallSelect.addEventListener("change", function(e){
//   getDiscount(e.target.value);

// })




// /// NEED TO FINISH EVENT LISTENER HERE//

// function getDiscount(categoryId) {
//   var discountPrice = "";
//   var discount = 0;
//   for(var i = 0; i < category.length; i++) {
 
//     // getting discount of correct category

//   }

//   for(var i = 0; i < product.length; i++) {
//     products[i].displayPrice = products[i].price;
//       if (product[i].category_id.toString() == categoryId) {
          
//           var discountPrice = product[i].price * discount;
//           product[i].displayPrice = discountPrice;
//       }
        

// }
//   console.log(discountPrice);
//    domString(product);
// }



// // domString();


