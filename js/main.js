
//Переменная список продуктов куда мы добавляем карточки 
const cartMenu = document.querySelector(".menu__carts")

//Загружаем карточки ттоваров на страницу
function renderCarts() {
	cartMenu.innerHTML = ""

	//html карточки 
	let cartaddeds = `<div class="cart">
			<div class="cart__img">
					<img data-cart-img alt="">
			</div>
			<div data-cart-title class="cart__title">
			</div>
			<div class="cart__price">
					<div data-cart-price class="cart__price-number">

					</div>
					<div data-cart-btn class="cart__price-bucket">
							В корзину
					</div>
					
					<div class="cart__price-counter display-none">
							<div class="cart-moreless">
									<div class="cart__price-minus" data-cart-btnMinus="btnMinus" onclick="delCounter()" >-
									</div>
									<div class="cart__price-quantity" data-cart-quantity ></div>
									<div class="cart__price-plus" data-cart-btnPlus="btnPlus" onclick="console.log('Плюс')">+</div>
							</div>
					</div>
			</div>
		</div>`

	//загружаем карточку на страницу 12 раз
	for(let i = 0; i<12; i++){
		cartMenu.insertAdjacentHTML("beforeend", cartaddeds)
	}
	
	
}renderCarts()


// переменные для добавления информации продуктов на страницу
const cartImg = document.querySelectorAll('[data-cart-img]')
const cartTitle = document.querySelectorAll('[data-cart-title]')
const cartPrice = document.querySelectorAll('[data-cart-Price]')
const  cartButton = document.querySelectorAll('[data-cart-btn]')
//Переменная корзина куда мы добавляем карточки
const cartwrapper = document.querySelector(".cap__bucket-items-inside-wrapper")


// Массив которые пушится в корзину
let basket = []

// массив  объекты которого мы добавляем на страницу
let listrolls = [
	{
		id: 1,
		img: "img/rolls/калифорния маки Запеченный.png",
		title: "Ролл Калифорния Маки Запеченный",
		price: 1375,
	},
	{
		id: 2,
		img: "img/rolls/Авокадо-маки Ролл.png",
		title: "Авокадо-маки Ролл",
		price: 135,
	},
	{
		id: 3,
		img: "img/rolls/Акаи Ролл.png",
		title: "Акаи ролл",
		price: 397,
	},
	{
		id: 4,
		img: "img/rolls/Кагувасэ Ролл.png",
		title: "Ролл Кагувасэ",
		price: 363,
	},
	{
		id: 5,
		img: "img/rolls/Дракон Ролл.png",
		title: "Дракон Ролл",
		price: 604,
	},
	{
		id: 6,
		img: "img/rolls/цезарь эби.png",
		title: "Ролл цезарь эби",
		price: 364,
	},
	{
		id: 7,
		img: "img/rolls/Кани хотто-маки Ролл.png",
		title: "Ролл Кани хотто-маки",
		price: 472,
	},
	{
		id: 8,
		img: "img/rolls/Ойси ролл.png",
		title: "Ойси ролл",
		price: 399,
	},
	{
		id: 9,
		img: "img/rolls/Кани спайси Гункан.png",
		title: "Ролл Кани спайси-гункан",
		price: 199,
	},
	{
		id: 10,
		img: "img/rolls/Ролл Калифорния Хот.png",
		title: "Ролл Калифорния Хот",
		price: 362,
	},
	{
		id: 11,
		img: "img/rolls/Ролл_Итальянский_запеченый_сырный.png",
		title: "Ролл Итальянский запеченый сырный",
		price: 330,
	},
	{
		id: 12,
		img: "img/rolls/Боул с семгой.png",
		title: "Боул с семгой",
		price: 419,
	}
]

// Добавление инфы в карточки на странице и событие по кнопке на добавление элемента в корзину
listrolls.map((cart, index) => {
	//Добавление элементов на страницу
	cartImg[index].setAttribute("src", cart.img),
	cartTitle[index].innerHTML = cart.title,
	cartPrice[index].innerHTML = cart.price

	//Событие при клике на "В корзину"
	cartButton[index].addEventListener('click', () => {
		
		//Если карточка уже есть в массиве, то просто изменить ее количество(counter)
		let findCartId = basket.find(product => product.id === cart.id)?.id    // ???
		if (findCartId) {
			let findIndexProduct = basket.findIndex((product) => product.id === findCartId)  // ???
			basket[findIndexProduct].counter = basket[findIndexProduct].counter + 1

		}
		//Если не найдена то пуш в корзину карточку и  задаем ее количество
		else{
			basket.push({ ...cart, counter: 1 })
		}


		
		//Добавляем элемент в корзину
		renderBasket()
		//Изменяем сумма заказа в корзине
		changeSumOfShop()
		//Обновляем количество продуктов в корзине
		ChangeQuantity()

	})




})


//Функция добавление карточки в корзину 
//и в html коде у кнопок "+"  и "-" стоят функции действий с количеством товара в корзине
function renderBasket() {
	cartwrapper.innerHTML = ""

	basket.forEach((product) => {
		let cartaddeds = `<div  class="cap__bucket-item-wrapper" id="${product.id}">
			<div class="cap__bucket-img-wrapper">
					<img class='cap__bucket-img' src="${product.img}"">
			</div>
			<div class="cap__bucket-item-right">
					<div class="cap__bucket-text">
					${product.title}
					</div><div class="cap__bucket-item-right-bottom">
					<div class="cap__bucket-price">
							${product.price}
					</div>
					<div class="cap__bucket-moreless-wrapper">
							<div class="cap__bucket-moreless">
									<div class="cap__bucket-minus" data-bucket-btnMinus="btnMinus" onclick="delCounter(${product.id})" >-
									</div>
									<div class="cap__bucket-quantity">${product.counter}</div>
									<div class="cap__bucket-plus" data-bucket-btnPlus="btnPlus" onclick="addCounter(${product.id})">+</div>
							</div>
					</div>
			</div>
			<div onclick="delProdClickTrash(${product.id})"  class="cap__bucket-trash">
					<img class='cap__bucket-trash-img' src="img/icon/free-icon-trash-bin-4620083.png" alt="">
			</div>
		</div>`

		cartwrapper.insertAdjacentHTML("beforeend", cartaddeds)
		
		// console.log(product)
	showCounter(product.id)
	})
}






//Функция изменения итоговой суммы
function changeSumOfShop() {
	let sumOfPrices = document.querySelector(".cap__bucket-items-sum")
	let priceitem = document.querySelectorAll(".cap__bucket-price")
	let massiv1 = [...priceitem].map(price => {
		let findIndexProduct = basket.findIndex((product) => product.id === Number(price.parentElement.parentElement.parentElement.id))
		return Number(price.innerHTML) * basket[findIndexProduct].counter 
		// console.log(Number(price.innerHTML) * basket[findIndexProduct].counter)
		

	})
	
	return sumOfPrices.innerHTML = [...massiv1].reduce((total, item) => total + Number(item), 0)
}
//Фунция изменения количества продуктов в корзине
function ChangeQuantity() {
	const quantityItem = document.querySelector(".cap__right-bucket-text2")
	let defaultQuantity = document.querySelectorAll(".cap__bucket-item-wrapper")
	quantityItem.innerHTML = defaultQuantity.length
}
// Функция Увеличивания counter в корзине
function addCounter(idProduct) {
	let findIndexProduct = basket.findIndex((product) => product.id === Number(idProduct))   //  ???
	//Увеличиваем counter на 1
	basket[findIndexProduct].counter = basket[findIndexProduct].counter + 1
	//обновляем карточку в корзине
	renderBasket()
	//Изменяем сумма заказа в корзине
	changeSumOfShop()

}
// Функция уменьшения counter в корзине
function delCounter(idProduct) {
	let findIndexProduct = basket.findIndex((product) => product.id === Number(idProduct))
	
	//Если количество равно 1 то удалить объект из корзины
	if (basket[findIndexProduct].counter == 1) {   // ???
		//Удалем элемент
		basket.splice(findIndexProduct, 1)
	} else {
		//Уменьшаем counter на один
		basket[findIndexProduct].counter = basket[findIndexProduct].counter - 1
	}
	//Если объектов в корзине стало 0 то скрываем корзину
	const bucketBtn = document.querySelector(".cap__bucket")
	if(basket.length >0){
		console.log("В корзине больше 0 элементов")
	}else {
		bucketBtn.classList.add("display-none")
	}
	//обновляем карточку в корзине
	renderBasket()
	//Изменяем сумма заказа в корзине
	changeSumOfShop()
	//Обновление количество продуктов в корзине
	ChangeQuantity()

}
//Функция удаления карточки по нажатию на мусорку
function delProdClickTrash(idProduct){
	let findIndexProduct = basket.findIndex((product) => product.id === Number(idProduct))
	basket.splice(findIndexProduct, 1)

	//Если объектов в корзине стало 0 то скрываем корзину
	const bucketBtn = document.querySelector(".cap__bucket")
	if(basket.length <=0) {
		bucketBtn.classList.add("display-none")
	}

	//обновляем карточку в корзине
	renderBasket()
	//Изменяем сумма заказа в корзине
	changeSumOfShop()
	//Обновление количество продуктов в корзине
	ChangeQuantity()
}
//Функция показа корзины
function showBucket(){
	const bucketBtn = document.querySelector(".cap__bucket")
	const quantityItem = document.querySelector(".cap__right-bucket-text2")
	const bodyJs = document.querySelector("body")

	//Если 0 элементов то не открвать корзину
		if (quantityItem.innerHTML == 0  ){
			bucketBtn.classList.add("display-none")
		}
		else{
			bucketBtn.classList.toggle("display-none")
			bodyJs.classList.toggle("overflow-hidden")
		}
	
}
// click gambit to up page 
function pageUp(){
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	})
}
//Функция показа counter для увелечения продуктов на карточке
function showCounter(idProduct){
	let hhh = document.querySelectorAll(".cart__price-counter")
	cartButton[idProduct - 1].classList.add("display-hidden")
	hhh[idProduct -1].classList.remove("display-none")
	
}

