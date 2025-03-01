// document.addEventListener('DOMContentLoaded',() =>{
//     const addToCartButtons= document.querySelectorAll('.add-to-cart');
//     const cartItemCount= document.querySelectorAll('.cart-icon span');
//     const cartItemList= document.querySelectorAll('.cart-items');
//     const cartTotal= document.querySelectorAll('.cart-total');
//     const cartIcon= document.querySelectorAll('.cart-icon');
//     const sidebar= document.querySelectorAll('#sidebar');
   
//     let cartItems=[];
//     let totalAmount=0;
//     addToCartButtons.forEach((button, index) =>{
//         button.addEventListener('click', ()=>{
//             const item={
//                 name: document.querySelectorAll('.card .card-title')[index].textContent,
//                 price: parseFloat(
//                     document.querySelectorAll('.price')[index].textContent.slice(1),
//                 ),
//                 quantity: 1,
//             };
//             const existingItem =cartItems.find(
//                 (cartItem)=> cartItem.name === item.name,
//             );
//             if(existingItem){
//                 existingItem.quantity++;
//             } else{
//                 cartItems.push(item);
//             }
//             totalAmount +=item.price;
// updateCartUI();
//         });
//         function updateCartUI(){
//             updateCartItemCount(cartItems.length);
//             updateCartItemList();
//             updateCartTotal();
//         }
//         function updateCartItemCount(count){
//             cartItemCount.textContent = count;
//         }
//         function updateCartItemList(){
//             cartItemList.inneHTML ='';
//             cartItems.forEach((item, index)=>{
//                 const cartItem= document.createElement('div');
//                 cartItem.classList.add('cart-item','individual-cart-item');
//                 cartItem.innerHTML=`
//                 <span>(${item.quantity}x)${item.name}</span>
//                 <span class="cart-item-price">$${(item.price * item.quantity).toFixed(
//                     2,
//                 )}
//                 <button class="remove-btn" data-index="${index}"><i class="fa-solid .fa-times"></i></button>
//                 </span>
//                 `;
            
//             });
//             const removeButtons = document.querySelectorAll('.remove-item');
//             removeButtons.forEach((button)=>{
//                 button.addEventListener('click',(event) =>{
//                     const index= event.target.dataset.index;
//                     removeItemFromCart(index);
//                 });
//             });
//         }
//        function removeItemFromCart(index){
//         const removeItem = cartItems.splice(index, 1)[0];
//         totalAmount -= removeItem.price * removeItem.quantity;
//         updateCartUI();
//        }
//        function updateCartTotal(){
//         cartTotal.textContent=`$${totalAmount.toFixed(2)}`;
//        }
//        cartIcon.addEventListener('click', ()=>{
//         sidebar.classList.toggle('open');
//        });
//        const closeButton = document.querySelector('.sidebar-close');
//        closeButton.addEventListener('click',()=>{
//         sidebar.classList.remove('open');
//        });
//     })
//     });
//     let openShopping = document.querySelector('.shopping');
// let closeShopping = document.querySelector('.closeShopping');
// let list = document.querySelector('.list');
// let listCard = document.querySelector('.listCard');
// let body = document.querySelector('body');
// let total = document.querySelector('.total');
// let quantity = document.querySelector('.quantity');

// openShopping.addEventListener('click', ()=>{
//     body.classList.add('active');
// })
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// })

// let products = [
//     {
//         id: 1,
//         name: 'PRODUCT NAME 1',
//         image: '1.PNG',
//         price: 120000
//     },
//     {
//         id: 2,
//         name: 'PRODUCT NAME 2',
//         image: '2.PNG',
//         price: 120000
//     },
//     {
//         id: 3,
//         name: 'PRODUCT NAME 3',
//         image: '3.PNG',
//         price: 220000
//     },
//     {
//         id: 4,
//         name: 'PRODUCT NAME 4',
//         image: '4.PNG',
//         price: 123000
//     },
//     {
//         id: 5,
//         name: 'PRODUCT NAME 5',
//         image: '5.PNG',
//         price: 320000
//     },
//     {
//         id: 6,
//         name: 'PRODUCT NAME 6',
//         image: '6.PNG',
//         price: 120000
//     }
// ];
// let listCards  = [];
// function initApp(){
//     products.forEach((value, key) =>{
//         let newDiv = document.createElement('div');
//         newDiv.classList.add('item');
//         newDiv.innerHTML = `
//             <img src="image/${value.image}">
//             <div class="title">${value.name}</div>
//             <div class="price">${value.price.toLocaleString()}</div>
//             <button onclick="addToCard(${key})">Add To Card</button>`;
//         list.appendChild(newDiv);
//     })
// }
// initApp();
// function addToCard(key){
//     if(listCards[key] == null){
//         // copy product form list to list card
//         listCards[key] = JSON.parse(JSON.stringify(products[key]));
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }
// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key)=>{
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString()}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//                 listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString();
//     quantity.innerText = count;
// }
// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('closed');
}

function openCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.remove('closed');
}
renderProducts();

// Add event listener to cart toggle button
document.getElementById('cartToggleBtn').addEventListener('click', toggleCart);

