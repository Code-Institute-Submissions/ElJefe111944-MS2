window.onload = function(){
   // Shopping Cart
   const shoppingCartIcon = document.querySelector('.shoppingCartIcon');
   const shoppingCart = document.querySelector('.shoppingCart');
   const cartCloseBtn = document.querySelector('i.fa-times-circle');

   shoppingCartIcon.addEventListener("click", function (){
      shoppingCart.classList.add('open');
  });
   cartCloseBtn.addEventListener("click", function (){
      shoppingCart.classList.remove('open');
   })


// Adding product selected by user to local storage.
const addToShoppingCartBtn = document.getElementsByClassName('addToShoppingCartBtn')
let items = [];

for (let i=0; i < addToShoppingCartBtn.length; i++){
    addToShoppingCartBtn[i].addEventListener("click", function(e){
        if(typeof(Storage) !== 'undefined'){
           let item = {
           
           
              id:i+1,
              name: e.target.parentElement.children[0].textContent,
              price:e.target.parentElement.children[1].children[0].textContent,
              no:1
            
           }; 
        

            if (JSON.parse(localStorage.getItem('items')) === null){
                items.push(item);  //Pushing items into empty array
                localStorage.setItem("items", JSON.stringify(items));
                window.location.reload();
            } else {
const localItems = JSON.parse(localStorage.getItem("items"));
					localItems.map(data=>{
						if(item.id == data.id){
							item.no = data.no + 1;
						}else{
							items.push(data);
						}
					});
					items.push(item);
					localStorage.setItem('items',JSON.stringify(items));
					window.location.reload();
				}
			}else{
				alert('Sorry! No Web Storage support..');
			}
		});
	}
// shoppingCartIcon updated with number of items selected.
const shoppingCartIconNumber = document.querySelector('.shoppingCartIcon p');
let no = 0;
JSON.parse(localStorage.getItem('items')).map(data=> {
     no = no+data.no    

});
 shoppingCartIconNumber.textContent = no;
// Adding items to the table in the class shoppingCart to be displayed to the user
const shoppingCartTable = shoppingCart.querySelector('table');
// Create string to recieve item information selected 
let itemSelected = '';
// Data to go inside empty string
itemSelected += '<tr><th>Item Number</th><th>Item Name</th><th>Item Price</th><th></th></tr>';

// Condition if no items have been selcted and the Shopping Cart is empty
if (JSON.parse(localStorage.getItem('items')) === null) {
    itemSelected += '<tr><td colspan="4">Your shopping cart is empty</td></tr>';
// Condition for if items have been selected and to be displayed in the Shopping Cart
} else {

   JSON.parse(localStorage.getItem('items')).map(data=>{
    itemSelected += '<tr><th>'+data.id+'</th><th>'+data.name+'</th><th>€'+data.price+'</th><th><button type="button" class="btn btn-danger" onclick=Delete(this); >Remove</button></th><tr>';
    });

 
}

    shoppingCartTable.innerHTML = itemSelected;    
};









