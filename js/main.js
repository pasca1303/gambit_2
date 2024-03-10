

// click gambit to up page 
document.querySelector(".btn-up").onclick = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	})
}




const cartsBlock = document.querySelectorAll(".cart__price-bucket")
const quantityItem = document.querySelector(".cap__right-bucket-text2")
let defaultQuantity = document.querySelectorAll(".cap__bucket-item-wrapper")
const cartwrapper = document.querySelector(".cap__bucket-items-inside-wrapper")

// default value quantity on bucketbtn
quantityItem.innerHTML = defaultQuantity.length;

// click trash to delete cart in bucket
		//check if 0 items in bucket 
// function deleteErr (){
// 	let quantityInBucket = document.querySelectorAll(".cap__bucket-item-wrapper")
// 	const trashWrapp = document.querySelectorAll(".cap__bucket-trash")

// 	if (quantityItem.innerHTML > 0) {
// 		trashWrapp.forEach((item, index) => {
// 			trashWrapp[index].addEventListener("click", function () {
// 				quantityInBucket[index].remove()
// 				quantityItem.innerHTML -=1;
// 				changeSumOfShop()
// 			})
// 		})
// 	}else if(quantityItem.innerHTML <= 0) {
// 		console.log("В корзине 0 элементов")
// 	}
// }


// click trash to delete new cart in bucket
// function deleteNewCartInBucket() {
// 	let newCartInBucket = document.querySelectorAll(".cap__bucket-item-wrapper")
// 	//also check if 0 item in bucket
// 	if (quantityItem.innerHTML > 0) {

// 		newCartInBucket.forEach((item, index) => {
// 			item.addEventListener("click", () => {
// 				newCartInBucket[index].remove()
// 				quantityItem.innerHTML-=1;
// 				changeSumOfShop()
// 			})
// 		})
// 	}if(quantityItem.innerHTML <= 0) {
// 		console.log("В корзине 0 элементов")
// 	}
// }

//Add to bucket Rolls from listrolls
// cartsBlock.forEach((cart, index) => {
	
// 	cart.addEventListener("click", function () {
		// let cartaddeds = `<div  class="cap__bucket-item-wrapper">
		// <div class="cap__bucket-img-wrapper">
		// 		<img class='cap__bucket-img' src="${listrolls[index].img}"">
		// </div>
		// <div class="cap__bucket-item-right">
		// 		<div class="cap__bucket-text">
		// 		${listrolls[index].title}
		// 		</div><div class="cap__bucket-item-right-bottom">
		// 		<div class="cap__bucket-price">
		// 				${listrolls[index].price}
		// 		</div>
		// 		<div class="cap__bucket-moreless-wrapper">
		// 				<div class="cap__bucket-moreless">
		// 						<div class="cap__bucket-minus" data-bucket-btnMinus="btnMinus">-
		// 						</div>
		// 						<div class="cap__bucket-quantity">0</div>
		// 						<div class="cap__bucket-plus" data-bucket-btnPlus="btnPlus">+</div>
		// 				</div>
		// 		</div>
		// </div>
		// <div onclick='deleteErr()'  class="cap__bucket-trash">
		// 		<img class='cap__bucket-trash-img' src="img/icon/free-icon-trash-bin-4620083.png" alt="">
		// </div>
		// </div>`
		
// 		cartwrapper.insertAdjacentHTML("beforeend", cartaddeds)

// 		quantityItem.innerHTML++
// 		changeSumOfShop()
// 		counter()
// 	})
// })
// cartsBlock.forEach((cart, index) => {
	

//Add to bucket Rolls from listrolls

// cartsBlock.forEach((cart, index) => {
// 	cart.addEventListener("click", () => {
// 		let cartaddeds = `<div  class="cap__bucket-item-wrapper">
// 			<div class="cap__bucket-img-wrapper">
// 					<img class='cap__bucket-img' src="${listrolls[index].img}"">
// 			</div>
// 			<div class="cap__bucket-item-right">
// 					<div class="cap__bucket-text">
// 					${listrolls[index].title}
// 					</div><div class="cap__bucket-item-right-bottom">
// 					<div class="cap__bucket-price">
// 							${listrolls[index].price}
// 					</div>
// 					<div class="cap__bucket-moreless-wrapper">
// 							<div class="cap__bucket-moreless">
// 									<div class="cap__bucket-minus" data-bucket-btnMinus="btnMinus">-
// 									</div>
// 									<div class="cap__bucket-quantity">0</div>
// 									<div class="cap__bucket-plus" data-bucket-btnPlus="btnPlus">+</div>
// 							</div>
// 					</div>
// 			</div>
// 			<div onclick='deleteErr()'  class="cap__bucket-trash">
// 					<img class='cap__bucket-trash-img' src="img/icon/free-icon-trash-bin-4620083.png" alt="">
// 			</div>
// 		</div>`

// 		cartwrapper.insertAdjacentHTML("beforeend", cartaddeds)
		
// 		counter()
// 		changeSumOfShop()
// 	})
// })


//change summ of shop...



function changeSumOfShop (){
	let sumOfPrices = document.querySelector(".cap__bucket-items-sum")
	let priceitem = document.querySelectorAll(".cap__bucket-price")

	return sumOfPrices.innerHTML = [...priceitem].reduce((item1, item2) => item1 + Number(item2.innerHTML), 0)
}

changeSumOfShop()



// deleteErr()

