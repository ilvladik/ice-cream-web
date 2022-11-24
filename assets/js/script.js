// Данные

const shopCartKey = "shop-cart";
const DataBase = JSON.parse(`{
  "Вега": {
    "image": "../assets/img/waffle/w-1.jpg",
    "price": 200,
    "weight": 100
  },
  "Капелла": {
    "image": "../assets/img/waffle/w-2.webp",
    "price": 300,
    "weight": 200
  },
  "Альриша": {
    "image": "../assets/img/waffle/w-3.jpg",
    "price": 400,
    "weight": 300
  },
  "Тайгета": {
    "image": "../assets/img/waffle/w-4.jpg",
    "price": 500,
    "weight": 400
  },
  "Проксима": {
    "image": "../assets/img/waffle/w-5.webp",
    "price": 600,
    "weight": 500
  },
  "Электра": {
    "image": "../assets/img/waffle/w-6.jpg",
    "price": 700,
    "weight": 600
  },

  "Сириус": {
    "image": "../assets/img/ball/b-1.jpg",
    "price": 200,
    "weight": 100
  },
  "Эпсилон": {
    "image": "../assets/img/ball/b-2.jpg",
    "price": 300,
    "weight": 200
  },
  "Мицар": {
    "image": "../assets/img/ball/b-3.jpg",
    "price": 400,
    "weight": 300
  },
  "Бернарда": {
    "image": "../assets/img/ball/b-4.jpg",
    "price": 500,
    "weight": 400
  },
  "Кастра": {
    "image": "../assets/img/ball/b-5.jpg",
    "price": 600,
    "weight": 500
  },
  "Лейтена": {
    "image": "../assets/img/ball/b-6.jpg",
    "price": 700,
    "weight": 600
  },

  "Химера": {
    "image": "../assets/img/stick/s-1.jpg",
    "price": 200,
    "weight": 100
  },
  "Сирена": {
    "image": "../assets/img/stick/s-2.jpg",
    "price": 300,
    "weight": 200
  },
  "Василиск": {
    "image": "../assets/img/stick/s-3.jpg",
    "price": 400,
    "weight": 300
  },
  "Гарпия": {
    "image": "../assets/img/stick/s-4.jpg",
    "price": 500,
    "weight": 400
  },
  "Мантикора": {
    "image": "../assets/img/stick/s-5.jpg",
    "price": 600,
    "weight": 500
  },
  "Дракайн": {
    "image": "../assets/img/stick/s-6.jpg",
    "price": 700,
    "weight": 600
  },

  "Вереск": {
    "image": "../assets/img/fruit/f-1.jpg",
    "price": 200,
    "weight": 100
  },
  "Ирис": {
    "image": "../assets/img/fruit/f-2.webp",
    "price": 300,
    "weight": 200
  },
  "Лаванда": {
    "image": "../assets/img/fruit/f-3.jpg",
    "price": 400,
    "weight": 300
  },
  "Нерине": {
    "image": "../assets/img/fruit/f-4.jpg",
    "price": 500,
    "weight": 400
  },
  "Подсолнух": {
    "image": "../assets/img/fruit/f-5.jpg",
    "price": 600,
    "weight": 500
  },
  "Ромашка": {
    "image": "../assets/img/fruit/f-6.jpg",
    "price": 700,
    "weight": 600
  },

  "Туя": {
    "image": "../assets/img/cake/c-1.jpg",
    "price": 200,
    "weight": 100
  },
  "Бузина": {
    "image": "../assets/img/cake/c-2.jpg",
    "price": 300,
    "weight": 200
  },
  "Зверобой": {
    "image": "../assets/img/cake/c-3.jpg",
    "price": 400,
    "weight": 300
  },
  "Леея": {
    "image": "../assets/img/cake/c-4.jpg",
    "price": 500,
    "weight": 400
  },
  "Мак": {
    "image": "../assets/img/cake/c-5.jpg",
    "price": 600,
    "weight": 500
  },
  "Морозник": {
    "image": "../assets/img/cake/c-6.jpg",
    "price": 700,
    "weight": 600
  },

  "Нисса": {
    "image": "../assets/img/milkshake/m-1.jpg",
    "price": 200,
    "weight": 100
  },
  "Петуния": {
    "image": "../assets/img/milkshake/m-2.jpg",
    "price": 300,
    "weight": 200
  },
  "Секвойя": {
    "image": "../assets/img/milkshake/m-3.jpg",
    "price": 400,
    "weight": 300
  },
  "Хоя": {
    "image": "../assets/img/milkshake/m-4.jpg",
    "price": 500,
    "weight": 400
  },
  "Хоста": {
    "image": "../assets/img/milkshake/m-5.jpg",
    "price": 600,
    "weight": 500
  },
  "Колючник": {
    "image": "../assets/img/milkshake/m-6.jpg",
    "price": 700,
    "weight": 600
  }
}`);

// Функции для изменения содержимого корзины

// проверка корзины на пустоту
function isEmptyShopCart() {
  return (
    localStorage.getItem(shopCartKey) == undefined ||
    localStorage.getItem(shopCartKey) == "{}"
  );
}

// добавление в корзину
function putInShopCart(productName) {
  if (DataBase[productName] != undefined) {
    let item = {};
    let shopCart = {};
    Object.assign(item, DataBase[productName]);
    if (!isEmptyShopCart()) {
      shopCart = JSON.parse(localStorage.getItem(shopCartKey));
      if (shopCart[productName] == undefined) {
        item.count = 1;
        shopCart[productName] = item;
      } else {
        shopCart[productName].count++;
      }
    } else {
      item.count = 1;
      shopCart[productName] = item;
    }
    localStorage.setItem(shopCartKey, JSON.stringify(shopCart));
  }
}

// удаление из корзины
function putOutShopCart(productName) {
  if (DataBase[productName] != undefined) {
    if (!isEmptyShopCart()) {
      shopCart = JSON.parse(localStorage.getItem(shopCartKey));
      if (shopCart[productName] != undefined) {
        shopCart[productName].count--;
        if (shopCart[productName].count <= 0) {
          delete shopCart[productName];
        }
        localStorage.setItem(shopCartKey, JSON.stringify(shopCart));
      }
    }
  }
}

// изменение корзины
function changeShopCart(productName, count) {
  if (count == "+") {
    putInShopCart(productName);
  } else if (count == "-") {
    putOutShopCart(productName);
  } else if (parseInt(count)) {
    setProductCount(productName, parseInt(count));
  } else {
    setProductCount(productName, 0);
  }
  markerShopCart();
  displayShopCart();
}

// Функции для визуализации

// подсветка иконки корзины
function markerShopCart() {
  let shopCart = document.getElementById("shop-cart-icon");
  if (shopCart != null) {
    if (!isEmptyShopCart()) {
      shopCart.style.fill = "var(--bg-red)";
    } else {
      shopCart.style.fill = "var(--bg-white)";
    }
  }
}

// добавление информации о продуктах
function fillProductsInfo() {
  let imagesHTML = document.getElementsByClassName("product-image");
  let productsHTML = document.getElementsByClassName("product-title");
  let detailsHTML = document.getElementsByClassName("product-details");
  let btnCartsHTML = document.getElementsByClassName("shop-cart-btn");
  let length = productsHTML.length;
  if (
    length != 0 &&
    length == imagesHTML.length &&
    length == detailsHTML.length &&
    length == btnCartsHTML.length
  ) {
    for (let i = 0; i < productsHTML.length; i++) {
      let details = DataBase[productsHTML[i].innerText];
      if (details == undefined) continue;

      let img = document.createElement("img");
      img.src = details.image;
      img.alt = productsHTML[i].innerText;

      let divW = document.createElement("div");
      divW.innerText = "Вес: " + details.weight + " г.";
      let divP = document.createElement("div");
      divP.innerText = "Цена: " + details.price + " ₽";

      btnCartsHTML[i].addEventListener("click", function () {
        changeShopCart(productsHTML[i].innerText, "+");
      });

      imagesHTML[i].appendChild(img);
      detailsHTML[i].appendChild(divW);
      detailsHTML[i].appendChild(divP);
    }
  }
}

// визуализация корзины
function displayShopCart() {
  let shopCart = document.getElementById("shop-cart");
  if (shopCart == null) {
    return;
  }
  if (!isEmptyShopCart()) {
    changeVisibility("shop-cart-flex", "flex");
    changeVisibility("empty-shop-cart", "none");
    let info = JSON.parse(localStorage.getItem(shopCartKey));
    let sum = 0;
    shopCart.innerHTML = "";
    for (let key in info) {
      sum += info[key].price * info[key].count;
      let item = createProductShopCart(info, key);
      shopCart.appendChild(item);
    }
    let span = document.getElementById("order-btn-wrapper");
    span.innerHTML = `<div class="price">${sum} ₽</div>
                      <button type="submit" form="order-form" id="order-btn">
                        <div>Заказать</div>
                      </button>`;
    let orderForm = document.getElementById("order-form");
    processForm(orderForm);
  } else {
    changeVisibility("shop-cart", "none");
    changeVisibility("order-btn-wrapper", "none");
    changeVisibility("empty-shop-cart", "flex");
  }
}

// Функции вспомогательные

// изменение видимости объекта по id
function changeVisibility(id, display) {
  let element = document.getElementById(id);
  if (element != null) {
    element.style.display = display;
  }
}

// создание одного элемента корзины
function createProductShopCart(info, key) {
  let item = document.createElement("div");
  item.className = "item";
  item.innerHTML = `<div>
                      <img src="${info[key].image}" alt="${key}"/>
                    </div>
                    <div>
                      ${key}
                    </div>
                    <div>
                      ${info[key].price * info[key].count} ₽
                    </div>
                    <div style="text-align: center;">
                      <button class="change-btn" onclick="changeShopCart('${key}', '+')">
                        <svg
                          width="0.5rem"
                          height="0.5rem"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                          >
                            <path
                              d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                              stroke="#000000"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div style="text-align: center;">
                        ${info[key].count}
                      </div>
                      <div style="text-align: center;">
                        <button class="change-btn" onclick="changeShopCart('${key}', '-')">
                          <svg
                            width="0.5rem"
                            height="0.5rem"
                            stroke-width="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="#000000"
                          >
                            <path
                              d="M6 12h12"
                              stroke="#000000"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </button>
                      </div>`;
  return item;
}

// Обработка формы

// отмена перезагрузки страницы
function handleFormSubmit(event) {
  event.preventDefault();
  serializeForm();
  localStorage.removeItem(shopCartKey);
  changeVisibility("form-sent", "flex");
  changeVisibility("order-btn-wrapper", "none");
  changeVisibility("shop-cart", "none");
}

// получение данных формы
function serializeForm(formNode) {
  let data = new FormData(formNode);
  console.log(Array.from(data.entries()));
}

// установка настроек обработки формы
function processForm(applicantForm) {
  applicantForm.addEventListener("submit", handleFormSubmit);
}

// визуализация
fillProductsInfo();
displayShopCart();
markerShopCart();
