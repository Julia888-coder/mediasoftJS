import Product from "./data";

Product.querySelector('.sorting__price').onclick = function() {
    let prices = Product.getElementsByClassName('.appartments-item__price');
    prices.sort(a, b);
      if (a > b)
        return -1;
      if (a < b)
        return 1;
      if (a == b)
        return 0;
  };

  //стрелочная ф-я

  const sortById = function () {
    const items = this.sort((a, b) => a.id - b.id);
    return items;
  };
  
  // стрелочная ф-я 2

  const sortByRating = function () {
    const items = this.sort((a, b) => b.rating - a.rating);
    return items;
  };

  

// зафейлила, потому что пока не совсем разобралась для чего конкретно он мне пригодится

promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve({
        message: "Do you want to buy this stuff?",
      });
    }, 10 * 1000);
  });
  console.log(promise) 
