async function getDatas() {
  const req = await fetch("../data.json");
  const res = await req.json();
  console.log(res);
  return res;
}

async function populateDatas() {
  const datas = await getDatas();
  const productList = document.querySelector("#product-list");
  datas.forEach((produit) => {
    const { category, name, price } = produit;
    let image;
    console.log(window.innerWidth);
    if (window.innerWidth > 1024) {
      image = produit.image.desktop;
    }
    if (window.innerWidth <= 1024 && window.innerWidth > 767) {
      image = produit.image.tablet;
    }
    if (window.innerWidth <= 767) {
      image = produit.image.mobile;
    }
    const template = `
        <article>
          <div>
            <img src="${image}" alt="${name}">
            <a href="#" class="add-button"><img src="assets/images/icon-add-to-cart.svg" alt="Icon add to cart">Add to cart</a>
          </div>
          <p class="subtitle">${category}</p>
          <h3>${name}</h3>
          <p class="price-tag">$${price}</p>
        </article>
    `
    productList.insertAdjacentHTML('beforeend', template)
  });
}

populateDatas();
