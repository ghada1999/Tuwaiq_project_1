var cart = {
  hPdt : null, 
  hItems : null,
  items:{ },
  iURL : "images/", 

  
  save : function () {
    localStorage.setItem("cart",JSON.stringify(cart.items));
  },

  load : function () {
    cart.items = localStorage.getItem("cart");
    if (cart.items == null) {
		cart.items = {}; 
	}
    else { 
	cart.items =JSON.parse(cart.items);
	}
  },

  nuke : function () {
	  
	
	  
  var de=  window.confirm("Do you want delete all ?");
  if(de == true){
    cart.items= {};
      localStorage.removeItem("cart");
      cart.list();
}else
	
    cart.list();
  },
  nukee : function () {
    cart.items= {};
      localStorage.removeItem("cart");
      cart.list();

    cart.list();
  },

  // (C) INITIALIZE
  init : function () {
    // (C1) GET HTML ELEMENTS
    cart.hPdt= document.getElementById("cart-hot");
    cart.hItems = document.getElementById("cart-items");

    // (C2) DRAW PRODUCTS LIST
    cart.hPdt.innerHTML = "";
    let p, item, part;
    for (let id in hotils) {
      // WRAPPER
         p = hotils[id];
		 
      item = document.createElement("div");
      item.className = "p-item";
      cart.hPdt.appendChild(item);

      // PRODUCT IMAGE
	 

      part = document.createElement("img");
      part.src = cart.iURL+p.img;
      part.className = "p-img";
      item.appendChild(part);
	 
      // PRODUCT NAME
      part = document.createElement("div");
      part.innerHTML=p.name;
      part.className = "p-name";
      item.appendChild(part);

      // PRODUCT DESCRIPTION
      part = document.createElement("div");
      part.innerHTML = p.desc;
      part.className = "p-desc";
      item.appendChild(part);

      // PRODUCT PRICE
      part = document.createElement("div");
      part.innerHTML = "$" + p.price;
      part.className = "p-price";
      item.appendChild(part);
	  
      // ADD TO CART
      part = document.createElement("input");
      part.type = "button";
      part.value = "Resive";
      part.className = "cart p-add";
     
      item.addEventListener("click",cart.checkout);
	   part.onclick = cart.add;
      part.dataset.id =id;
      item.appendChild(part);
 
   }

    // (C3) LOAD CART FROM PREVIOUS SESSION
    cart.load();

    // (C4) LIST CURRENT CART ITEMS
    cart.list();
  },

  // (D) LIST CURRENT CART ITEMS (IN HTML)
   list: function () {
    // (D1) RESET
    cart.hItems.innerHTML = "";
    let item, part, pdt;
    let empty = true;
    for (let key in cart.items) {
		
      if(cart.items.hasOwnProperty(key)) { empty = false; break; }
    }

    // (D2) CART IS EMPTY
    if (empty) {
      item = document.createElement("div");
      item.innerHTML = "";
      cart.hItems.appendChild(item);
	  
    }

    // (D3) CART IS NOT EMPTY - LIST ITEMS
    else{
      let p, total = 0, subtotal = 0;
      for (let id in cart.items) {
        // ITEM
        p = hotils[id];
        item = document.createElement("div");
        item.className = "c-item";
        cart.hItems.appendChild(item);

        // NAME
        part = document.createElement("div");
        part.innerHTML = p.name;
        part.className = "c-name";
        item.appendChild(part);

        // REMOVE
        part = document.createElement("input");
        part.type = "button";
        part.value = "delete";
        part.dataset.id = id;
        part.className = "c-del cart";
        part.addEventListener("click", cart.remove);
        item.appendChild(part);

        // QUANTITY
        part = document.createElement("input");
        part.type = "number";
        part.min = 0;
        part.value = cart.items[id];
        part.dataset.id = id;
        part.className = "c-qty";
        part.addEventListener("change", cart.change);
        item.appendChild(part);

        // SUBTOTAL
        subtotal = cart.items[id] * p.price;
        total += subtotal;
      }

      // TOTAL AMOUNT
      item = document.createElement("div");
      item.className = "c-total";
      item.id = "c-total";
      item.innerHTML ="TOTAL: $" + total;
      cart.hItems.appendChild(item);

      // EMPTY BUTTONS ???? ???????????? ???? ???????? ???????? ?????????? 
      item = document.createElement("input");
      item.type = "button";
      item.value = "Empty";
      item.addEventListener("click", cart.nuke);
      item.className = "c-empty cart";
      cart.hItems.appendChild(item);

      // CHECKOUT BUTTONS 
      item = document.createElement("input");
      item.type = "button";
      item.value = "Checkout";
      item.addEventListener("click", cart.checkout);
      item.className = "c-checkout cart";
      cart.hItems.appendChild(item); 
    }
  },

  // (E) ADD ITEM INTO CART
  add : function () {
    if (cart.items[this.dataset.id] == undefined) {
      cart.items[this.dataset.id] = 1;
      }
    cart.save();
    cart.list();
  },

  // (F) CHANGE QUANTITY
  change : function () {
    // (F1) REMOVE ITEM
    if (this.value <= 0) {
      delete cart.items[this.dataset.id];
      cart.save();
      cart.list();
    }

    // (F2) UPDATE TOTAL ONLY
    else {
      cart.items[this.dataset.id] = this.value;
      var total = 0;
      for (let id in cart.items) {
        total += cart.items[id] * hotils[id].price;
        document.getElementById("c-total").innerHTML ="TOTAL: $" + total;

      }
    }
  },

  // (G) REMOVE ITEM FROM CART
  remove : function () {
    delete cart.items[this.dataset.id];
    cart.save();
    cart.list();
  },
  
   checkout:function () {
$("<style type='text/css'>#boxMX{display:none;background:white;padding: 10px;border: 2px solid #ddd;float: left;font-size: 1.2em;position: fixed;top: 50%; left: 50%;z-index: 99999;box-shadow: 0px 0px 20px #999; -moz-box-shadow: 0px 0px 20px #999; -webkit-box-shadow: 0px 0px 20px #999;  -moz-border-radius: 6px; -webkit-border-radius: 6px; font:13px Arial, Helvetica, sans-serif; padding:6px 6px 4px;width:25%;color:green}h4{color:black}</style>").appendTo("head");

function alertMXx(t){
$( "body" ).append( $( "<div id='boxMX'><h4  class=modal-title>Missge</h4><hr><p class='msgMX'></p></div>" ) );
$('.msgMX').text(t); var popMargTop = ($('#boxMX').height() + 24) / 2, popMargLeft = ($('#boxMX').width() + 24) / 2;

$('#boxMX').css({ 'margin-top' : -popMargTop,'margin-left' : -popMargLeft}).fadeIn(600);
$("#boxMX").hide(7000); };
  
  



if(localStorage.getItem("name1")==null){
	   window.location.href="login.html";
	 
	 }  else{
	 alertMXx("Prosses sacssfully");
	
   
}

   var getitem1=localStorage.getItem("email1");
   var getitem2=localStorage.getItem("pass1");

 document.cookie="emailc= "+getitem1+"; max-age="+60*60*24*2;
 document.cookie="passc= "+getitem2+"; max-age="+60*60*24*2;

    
 
	
 
    }



    

};
window.addEventListener("DOMContentLoaded", cart.init);