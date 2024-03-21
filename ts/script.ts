
//Переменная куда мы добавляем карточки 
const cartMenu: HTMLElement = document.querySelector(".menu__carts")!

//Переменная корзина 
const cartWrapper: HTMLElement = document.querySelector(".cap__bucket-items-inside-wrapper")!

// Определение интерфейса для элементов корзины
interface BasketItem {
	id: number
	counter: number
	img: string
	price: number
	title: string
}

// Массив, в который вы добавляете элементы корзины
let basket: BasketItem[] = []


// Класс для элементов listrolls
class Cart {
	id: number
	img: string
	title: string
	price: number
	constructor(id: number, img: string, title: string, price: number) {
		this.id = id
		this.img = img
		this.title = title
		this.price = price
	}
}

// массив  объекты которого мы добавляем на страницу
let listrolls = [
	new Cart(1, "img/rolls/калифорния маки Запеченный.png", "Ролл Калифорния Маки Запеченный", 1375),
	new Cart(2, "img/rolls/Авокадо-маки Ролл.png", "Авокадо-маки Ролл", 1375),
	new Cart(3, "img/rolls/Акаи Ролл.png", "Акаи ролл", 397),
	new Cart(4, "img/rolls/Кагувасэ Ролл.png", "Ролл Кагувасэ", 363),
	new Cart(5, "img/rolls/Дракон Ролл.png", "Дракон Ролл", 604),
	new Cart(6, "img/rolls/цезарь эби.png", "Ролл цезарь эби", 364),
	new Cart(7, "img/rolls/Кани хотто-маки Ролл.png", "Ролл Кани хотто-маки", 472),
	new Cart(8, "img/rolls/Ойси ролл.png", "Ойси ролл", 399),
	new Cart(9, "img/rolls/Кани спайси Гункан.png", "Ролл Кани спайси-гункан", 199),
	new Cart(10, "img/rolls/Ролл Калифорния Хот.png", "Ролл Калифорния Хот", 362),
	new Cart(11, "img/rolls/Ролл_Итальянский_запеченый_сырный.png", "Ролл Итальянский запеченый сырный", 330),
	new Cart(12, "img/rolls/Боул с семгой.png", "Боул с семгой", 419),

]

// Добавление карточек на страницу 
listrolls.forEach((cart: Cart, index: number) => {
	//html код карточки
	let cartaddeds = `<div id="${cart.id}"  class="cart">
			<div class="cart__img">
					<img src="${cart.img}" alt="">
			</div>
			<div  class="cart__title">
				${cart.title}
			</div>
			<div class="cart__price">
					<div  class="cart__price-number">
						${cart.price}
					</div>
					<div id="${cart.id}" onclick="addCartItem(${cart.id}); showCounter(${cart.id});"  class="cart__price-bucket">
							В корзину
					</div>
					
					<div class="cart__price-counter display-none">
							<div class="cart-moreless">
									<div class="cart__price-minus"  onclick="delCounter(${cart.id})" >-
									</div>
									<div class="cart__price-quantity" id="${cart.id}">1</div>
									<div class="cart__price-plus" onclick="addCounter(${cart.id})">+</div>
							</div>
					</div>
			</div>
		</div>`
	//добавление карточки на страницу

	cartMenu.innerHTML += cartaddeds


})





//добавление кликнутой карточки в массив basket
function addCartItem(cart: number): void {
	//Если карточка уже есть в массиве, то просто изменить ее количество
	let findCartId = basket.find(product => product.id === cart)?.id    // ???

	if (findCartId) {
		let findIndexProduct = basket.findIndex(product => product.id === findCartId)  // ???
		basket[findIndexProduct].counter = basket[findIndexProduct].counter + 1

	}
	//Если не найдена то пуш в корзину карточку и  задаем ее количество
	else {
		basket.push({ ...listrolls[Number(cart - 1)], counter: 1 })
	}
	
	//Добавляем элемент в корзину
	renderBasket()
	//Изменяем сумма заказа в корзине
	changeSumOfShop()
	//Обновляем количество продуктов в корзине
	ChangeQuantity()
	//Показ счетчика карточки
}
// добавление карточки в корзину из массива basket
//и в html коде у кнопок "+"  и "-" стоят функции действий с количеством товара в корзине
function renderBasket(): void {
	cartWrapper.innerHTML = ""

	basket.forEach((product) => {
		let cartaddeds = `<div  class="cap__bucket-item-wrapper" id="${product.id}">
			<div class="cap__bucket-img-wrapper">
					<img class='cap__bucket-img' src="${product.img}"">
			</div>
			<div class="cap__bucket-item-right">
					<div class="cap__bucket-text">
					${product.title}
					</div><div class="cap__bucket-item-right-bottom">
					<div id="${product.id}" class="cap__bucket-price">
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

		cartWrapper.insertAdjacentHTML("beforeend", cartaddeds)
	})
}

//Функция изменения итоговой суммы
function changeSumOfShop(): void {

	let priceitem = document.querySelectorAll(".cap__bucket-price")
	let massiv1 = [...priceitem].map(price => {
		let findIndexProduct = basket.findIndex((product) => product.id === Number(price.id))
		return Number(price.innerHTML) * basket[findIndexProduct].counter
	})
	let sumOfPrices = document.querySelector(".cap__bucket-items-sum")
	if (sumOfPrices !== null) {
		sumOfPrices.innerHTML = [...massiv1].reduce((total, item) => total + Number(item), 0).toString()
	}
}
//Фунция изменения количества продуктов в корзине
function ChangeQuantity(): void {
	const quantityItem = document.querySelector(".cap__right-bucket-text2")
	if (quantityItem !== null) {
		let defaultQuantity = document.querySelectorAll(".cap__bucket-item-wrapper")
		quantityItem.innerHTML = defaultQuantity.length.toString()
	}
}
// Функция Увеличивания counter в корзине
function addCounter(idProduct: number): void {
	let findIndexProduct = basket.findIndex((product) => product.id === Number(idProduct))   //  ???
	let cartCounterQuantity = document.querySelectorAll(".cart__price-quantity")
	//Увеличиваем counter на 1
	basket[findIndexProduct].counter = basket[findIndexProduct].counter + 1
	cartCounterQuantity[idProduct - 1].innerHTML = (Number(cartCounterQuantity[idProduct - 1].innerHTML) + 1).toString()
	//обновляем карточку в корзине
	renderBasket()
	//Изменяем сумма заказа в корзине
	changeSumOfShop()

}
// Функция уменьшения counter в корзине
function delCounter(idProduct: number): void {
	let findIndexProduct = basket.findIndex((product) => product.id === Number(idProduct))
	const cartButton = document.querySelectorAll('.cart__price-bucket')
	let cartCounter = document.querySelectorAll(".cart__price-counter")
	let cartCounterQuantity = document.querySelectorAll(".cart__price-quantity")

	//Если количество равно 1 то удалить объект из корзины
	if (basket[findIndexProduct].counter == 1) {   // ???
		//Скрываем counter на странице если элементов 0 в корзине
		cartButton[Number(idProduct - 1)].classList.remove("display-hidden")
		cartCounter[Number(idProduct - 1)].classList.add("display-none")
		//Удалем элемент
		basket.splice(findIndexProduct, 1)
	} else {
		//Уменьшаем counter на один
		basket[findIndexProduct].counter = basket[findIndexProduct].counter - 1
		cartCounterQuantity[idProduct - 1].innerHTML = (Number(cartCounterQuantity[idProduct - 1].innerHTML) - 1).toString()
	}
	//Если объектов в корзине стало 0 то скрываем корзину
	const bucketBtn = document.querySelector(".cap__bucket")
	if (basket.length > 0) {
		console.log("В корзине больше 0 элементов")
	} else {
		if (bucketBtn !== null) {
			bucketBtn.classList.add("display-none")
		}
	}

	//обновляем карточку в корзине
	renderBasket()
	//Изменяем сумма заказа в корзине
	changeSumOfShop()
	//Обновление количество продуктов в корзине
	ChangeQuantity()


}
//Функция удаления карточки по нажатию на мусорку
function delProdClickTrash(idProduct: number): void {
	let findIndexProduct = basket.findIndex((product) => product.id === Number(idProduct))
	const cartButton = document.querySelectorAll('.cart__price-bucket')
	let cartCounter = document.querySelectorAll(".cart__price-counter")

	//Скрываем counter на странице если удаляем его из корзины
	cartButton[Number(idProduct - 1)].classList.remove("display-hidden")
	cartCounter[Number(idProduct - 1)].classList.add("display-none")

	//Удаляем элемент с корзины
	basket.splice(findIndexProduct, 1)

	//Если объектов в корзине стало 0 то скрываем корзину
	const bucketBtn = document.querySelector(".cap__bucket")
	if (basket.length <= 0) {
		if (bucketBtn !== null) {
			bucketBtn.classList.add("display-none")
		}

	}

	//обновляем карточку в корзине
	renderBasket()
	//Изменяем сумма заказа в корзине
	changeSumOfShop()
	//Обновление количество продуктов в корзине
	ChangeQuantity()
}
//Функция показа корзины
function showBucket(): void {
	const bucketBtn: HTMLElement = document.querySelector(".cap__bucket")!
	const quantityItem: HTMLElement = document.querySelector(".cap__right-bucket-text2")!
	const bodyJs: HTMLElement = document.querySelector("body")!

	//Если 0 элементов то не открвать корзину
	
	if (quantityItem.innerHTML === "0") {
		bucketBtn.classList.add("display-none")		
	}
	
	else {
		bucketBtn.classList.toggle("display-none")
		bodyJs.classList.toggle("overflow-hidden")
	}

}
// click gambit to up page 
function pageUp(): void {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	})
}
// Функция показа counter на странице при клике 
function showCounter(idProduct: number): void {
	let cartCounter = document.querySelectorAll(".cart__price-counter")
	const cartButton = document.querySelectorAll('.cart__price-bucket')

	// скрываем кнопку
	cartButton[Number(idProduct - 1)].classList.add("display-hidden")
	//Показываем counter
	cartCounter[Number(idProduct - 1)].classList.remove("display-none")

}

function delCounter2(cartId: number): void {
	console.log("hello")
	// basket[cartId].counter -1;
	console.log(basket)

}

console.log("hello")



















