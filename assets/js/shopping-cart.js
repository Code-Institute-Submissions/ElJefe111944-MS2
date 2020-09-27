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

// Local Storage to retain items selected by user.
if(typeof(Storage) !== 'undefined'){
    console.log('funciona');
}else{
    console.log('no funciona');
}

