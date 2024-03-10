

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

// переменные для добавления элементов на страницу
const cartImg = document.querySelectorAll('[data-cart-img]')
const cartTitle = document.querySelectorAll('[data-cart-title]')
const cartPrice = document.querySelectorAll('[data-cart-Price]')
const cartButton = document.querySelectorAll('[data-cart-btn')


// Добавление элементов на страницу и событие по кнопке на добавление элемента в корзину
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
		//Если не найдена то пуш в корзину карточку и ее задаем ее количество
		else {
			basket.push({ ...cart, counter: 1 })
		}

		//Добавляем элемент в корзину
		renderBasket()
	})
})

// Функция изменения counter в корзине
function addCounter(idProduct) {
	let findIndexProduct = basket.findIndex((product) => product.id === Number(idProduct))   //  ???
	//Увеличиваем counter на 1
	basket[findIndexProduct].counter = basket[findIndexProduct].counter + 1

	//обновляем карточку в корзине
	renderBasket()
} 

function delCounter(idProduct) {
	
	let findIndexProduct = basket.findIndex((product) => product.id === Number(idProduct))
	console.log(basket[findIndexProduct])
	//Если количество равно 1 то удалить объект из корзины
	if (basket[findIndexProduct].counter == 1) {   // ???
		//Удалем элемент
		basket.splice(findIndexProduct,1)
	}else{
		//Уменьшаем counter на один
		basket[findIndexProduct].counter = basket[findIndexProduct].counter - 1
	}
	//обновляем карточку в корзине
	renderBasket()
}

//Переменная корзина куда мы добавляем карточки
const cartwrapper2 = document.querySelector(".cap__bucket-items-inside-wrapper")

//Функция добавление карточки в корзину 
//и в html коде у кнопок "+"  и "-" стоят функции действий с количеством товара в корзине
function renderBasket() {
	cartwrapper2.innerHTML = ""

	basket.forEach((product) => {
		let cartaddeds = `<div  class="cap__bucket-item-wrapper">
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
			<div onclick='deleteErr()'  class="cap__bucket-trash">
					<img class='cap__bucket-trash-img' src="img/icon/free-icon-trash-bin-4620083.png" alt="">
			</div>
		</div>`

		cartwrapper2.insertAdjacentHTML("beforeend", cartaddeds)
	})
}
