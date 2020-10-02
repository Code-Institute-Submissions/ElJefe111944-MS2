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
};

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
const shoppingCartIcon = document.querySelector('.shoppingCartIcon p');
let no = 0;
JSON.parse(localStorage.getItem('items')).map(data=> {
     no = no+data.no
     shoppingCartIcon.textContent = no;

});






