//retrive the most-poplular-products div
const mostPopPorducts = document.querySelector(".most-popular-products");

//fetching data from json file
const jsonFile = "./products.json";

fetch(jsonFile)
  .then((respone) => { //using .then() to avoid callback hell
    return respone.json();
  })
  .then((data) => {
    data.map((product) => { // using map() to call every array element in json file
      const { id, name, description, price, images } = product;
      mostPopPorducts.innerHTML += `
        <div class="product-card" data-product-id="${id}">
					<div class="product-card__container">
						<div class="product-card__img">
							<img src="${images[0].url}" alt="${name}" />
						</div>
					</div>
					<div class="product-card__description">
						<div class="product-card__text">${name}</div>
                        <div class="product-card__des">${description}</div>
						<div class="product-card__price">${price}</div>
					</div>
					<div class="product-card__color">
                    ${images
                      .map((image) => {
                        const { url } = image;
                      })
                      .join("")} 
					<!-- using join function to return array as string -->
					</div>
				</div>
        `;
    });
  });
