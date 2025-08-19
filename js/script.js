async function getDatas() {
  const req = await fetch("../data.json");
  const res = await req.json();
  return res;
}

async function populateDatas() {
  const datas = await getDatas();
  const productList = document.querySelector("#product-list");
  let i = 1;
  datas.forEach((produit) => {
    const { category, name, price } = produit;
    let image;
    if (window.innerWidth > 1024) {
      image = produit.image.desktop;
    }
    if (window.innerWidth <= 1024 && window.innerWidth > 767) {
      image = produit.image.tablet;
    }
    if (window.innerWidth <= 767) {
      image = produit.image.mobile;
    }
    //             <div class="add"><button class="add-button"><img src="assets/images/icon-add-to-cart.svg" alt="Icon add to cart">Add to cart</button></div>

    // <div class="in-cart">
    //   <button class="decrement"><img src="assets/images/icon-decrement-quantity.svg" alt="Icon to decrement quantity"></button>
    //   1
    //   <button class="increment"><img src="assets/images/icon-increment-quantity.svg" alt="Icon to decrement quantity"></button>
    // </div>

    const template = `
        <article>
          <div>
            <img src="${image}" alt="${name}">
            <div class="in-cart">
              <button class="decrement"><img src="assets/images/icon-decrement-quantity.svg" alt="Icon to decrement quantity"></button>
              1
              <button class="increment"><img src="assets/images/icon-increment-quantity.svg" alt="Icon to decrement quantity"></button>
            </div>
          </div>
          <p class="subtitle">${category}</p>
          <h3>${name}</h3>
          <p class="price-tag">$${price.toFixed(2)}</p>
        </article>
    `;
    productList.insertAdjacentHTML("beforeend", template);
  });
}

populateDatas();
