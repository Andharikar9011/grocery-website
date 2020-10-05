"use strict";

function LoadPage(){
  var tbody=document.getElementById("my")
  while (tbody.firstChild) {
    tbody.removeChild(tbody.lastChild);
  }
  // tbody.removeChild(tbody.chil)
  window.onload = cart_generator();
}

var cartvalue = 0;
function addproduct(product,value,per,quant) {
  var prod = [];
  var val = [];
  var mass = [];
  var quantity=[];
  console.log(sessionStorage);
  if (
    sessionStorage.getItem("products") == undefined ||
    sessionStorage.getItem("products") == []
  ) {
    console.log("emptycart");
    prod.push(product);
    val.push(value);
    mass.push(per);
    quantity.push(quant)
    sessionStorage.setItem("products", prod);
    sessionStorage.setItem("value", val);
    sessionStorage.setItem("per", mass);
    sessionStorage.setItem("quantity",quantity);
    console.log(sessionStorage.getItem("products"));
  } else if (sessionStorage.getItem("products") != []) {
    var prod = sessionStorage.getItem("products").split(",");
    console.log(prod);
    console.log(typeof prod);
    console.log(prod.indexOf(product));

    if (prod.indexOf(product) == -1) {
      prod.push(product);
      sessionStorage.setItem("products", prod);
      var val = sessionStorage.getItem("value").split(",");
      val.push(value);
      sessionStorage.setItem("value", val);
      var mass = sessionStorage.getItem("per").split(",");
      mass.push(per);
      sessionStorage.setItem("per", mass);
      var quantity = sessionStorage.getItem("quantity").split(",");
      quantity.push(quant);
      sessionStorage.setItem("quantity", quantity);
      console.log(prod, val, mass,quantity);
    } else {
      alert("Product Already Added.");
    }
  }
}

try {
  cartvalue = sessionStorage.getItem("products").split(",").length;
  var a = document.getElementById("cartvalue");
  a.innerHTML = cartvalue;
} catch (error) {
  cartvalue = 0;
  try{
  var a = document.getElementById("cartvalue");
  a.innerHTML = cartvalue;
}catch(err){
  cartvalue=0;
}
}
function cart_generator() {
  
  try {
    cartvalue = sessionStorage.getItem("products").split(",").length;
  } catch (error) {
    cartvalue = 0;
   
  }
  if (cartvalue != 0) {
    var prod = sessionStorage.getItem("products").split(",");
    var val = sessionStorage.getItem("value").split(",");
    var mass = sessionStorage.getItem("per").split(",");
    var quantitylist = sessionStorage.getItem("quantity").split(",");
    for (let index = 0; index < cartvalue; index++) {
       
      // first tr
      var firsttr = document.createElement("TR");
      firsttr.setAttribute("id", index + "-1");
      document.getElementById("my").appendChild(firsttr);
      // td1
      var td1 = document.createElement("TD");
      td1.setAttribute("id", index + "-21");
      td1.setAttribute("class", "shoping__cart__item");
      document.getElementById(index + "-1").appendChild(td1);
      // td1 img

      // td1 h5
      var td1h5 = document.createElement("H5");
      td1h5.setAttribute("id", index+"-211");
      td1h5.innerHTML = prod[index];
      document.getElementById(index + "-21").appendChild(td1h5);

      // td2
      var td2 = document.createElement("TD");
      td2.setAttribute("id", index + "-2");
      td2.setAttribute("class", "shoping__cart__price");
      td2.innerHTML ="₹ "+ val[index] + "&nbsp&nbsp/&nbsp&nbsp" + mass[index];
      document.getElementById(index + "-1").appendChild(td2);
      // td3
      var td3 = document.createElement("TD");
      td3.setAttribute("id", index + "-3");
      td3.setAttribute("class", "shoping__cart__quantity");
      document.getElementById(index + "-1").appendChild(td3);
      // td3-div
      var td3div = document.createElement("DIV");
      td3div.setAttribute("id", index + "-31");
      td3div.setAttribute("class", "quantity");
      document.getElementById(index + "-3").appendChild(td3div);
      // td3-div-div
      var td3divdiv = document.createElement("DIV");
      td3divdiv.setAttribute("id", index + "-311");
      td3divdiv.setAttribute("class", "pro-qty");
      document.getElementById(index + "-31").appendChild(td3divdiv);
      // td3-div-div-span
          var td3divdivspan1 = document.createElement("span");
          td3divdivspan1.setAttribute("id",index+"-3111")
          td3divdivspan1.setAttribute("class","dec qtybtn")
          td3divdivspan1.setAttribute("onclick","subquantity('"+prod[index]+"')")
          td3divdivspan1.innerHTML="-"
          document.getElementById(index+"-311").appendChild(td3divdivspan1);
      // td3-div-div-input
      var td3divdivinp = document.createElement("input");
      td3divdivinp.setAttribute("id", index + "-3112");
      td3divdivinp.setAttribute("type", "text");
      td3divdivinp.value=quantitylist[index]
      document.getElementById(index + "-311").appendChild(td3divdivinp);
      // td3-div-div-span
          var td3divdivspan2 = document.createElement("span");
          td3divdivspan2.setAttribute("id",index+"-3113")
          td3divdivspan2.setAttribute("class","inc qtybtn")
          td3divdivspan2.setAttribute("onclick","addquantity('"+prod[index]+"')")
          td3divdivspan2.innerHTML="+"
          document.getElementById(index+"-311").appendChild(td3divdivspan2);

      // td4
      var td4 = document.createElement("TD");
      td4.setAttribute("id", index + "-4");
      td4.setAttribute("class", "shoping__cart__total");
      td4.innerHTML ="₹ " + (parseInt(val[index])*parseInt(quantitylist[index])).toString()
      document.getElementById(index + "-1").appendChild(td4);
      // td5
      // var td5 = document.createElement("TD");
      // td5.setAttribute("id", index + "-5");
      // td5.setAttribute("class", "shoping__cart__item__close");
      // document.getElementById(index + "-1").appendChild(td5);
      // // td5-span
      // var td5span = document.createElement("SPAN");
      // td5span.setAttribute("id", index + "-51");
      // td5span.setAttribute("class", "icon_close");
      // document.getElementById(index + "-5").appendChild(td5span);
      
    }
    
  } else {
    console.log("Empty cart");
    
  }
}
// function getvalue(productname){
//   var prodlist = sessionStorage.getItem("products").split(",");
//   var quantitylist = sessionStorage.getItem("quantity").split(",");
  // if (prodlist.indexOf(productname)!=-1){
  //   value=quantitylist[prodlist.indexOf(productname)]
  //   return value
  // }else{
  //   return 0
  // }
// }
function addquantity(productname){
  console.log('entry')
    var prodlist = sessionStorage.getItem("products").split(",");
  var quantitylist = sessionStorage.getItem("quantity").split(",");
  // console.log(prodlist)
  // console.log(quantitylist)
  // console.log(productname)
//  console.log(prodlist.indexOf(productname))
 var i = prodlist.indexOf(productname)
//  console.log(i)
  var value=quantitylist[i]
  // console.log(typeof(value))
  var value1=parseInt(value)+1
  // console.log(typeof(value1))
  // console.log(value1)
  var value2 =value1.toString()
  // console.log(value2)
  // console.log(typeof(value2))
  quantitylist[i]=value2

  console.log(quantitylist)
  sessionStorage.setItem("quantity",quantitylist)
  alert("Item:"+productname+" \n Quantity:"+value2)  
  // console.log(sessionStorage)
}
function subquantity(productname){
  console.log('entry1')
    var val = sessionStorage.getItem("value").split(",");
    var mass = sessionStorage.getItem("per").split(",");
  var prodlist = sessionStorage.getItem("products").split(",");
var quantitylist = sessionStorage.getItem("quantity").split(",");
var value= parseInt(quantitylist[prodlist.indexOf(productname)])
if(value>1){
  value=value-1
  quantitylist[prodlist.indexOf(productname)]=value.toString()
sessionStorage.setItem("quantity",quantitylist)
alert("Item:"+productname+" \n Quantity:"+value.toString())  
}else if(value==1){
  var i = prodlist.indexOf(productname)
val.splice(i,1)
mass.splice(i,1)
quantitylist.splice(i,1)
prodlist.splice(i,1)
sessionStorage.setItem("products", prodlist);
sessionStorage.setItem("value", val);
sessionStorage.setItem("per", mass);
sessionStorage.setItem("quantity",quantitylist);
alert("Item:"+productname+" \n Removed")  
console.log(sessionStorage)
}
}

function Total(){
  var totalvalue=0;
    var val = sessionStorage.getItem("value").split(",");
    var quantitylist = sessionStorage.getItem("quantity").split(",");
    for (let index = 0; index < val.length; index++) {
      totalvalue = totalvalue + parseInt(val[index])*parseInt(quantitylist[index])      
    }
    var item = document.getElementById("totalvalue")
    item.innerHTML="₹ "+totalvalue.toString()
}

function Message_generator(){
var val = sessionStorage.getItem("value").split(",");
var mass = sessionStorage.getItem("per").split(",");
var prodlist = sessionStorage.getItem("products").split(",");
var quantitylist = sessionStorage.getItem("quantity").split(",");
var totalvalue=0;
var message = "Welcome This is Quick N Fresh !!! \nYour Cart Contains: \n";
for (let index = 0; index < prodlist.length; index++) {
  totalvalue = totalvalue + parseInt(val[index])*parseInt(quantitylist[index])      
}
for (let ind = 0; ind < prodlist.length; ind++) {
  message =message + "Item "+(ind+1)+" : "+prodlist[ind]+" Price: ₹"+val[ind]+" / "+mass[ind]+" Quantity : "+quantitylist[ind]+" "+mass[ind]+"\n";
}
message = message + "Total Items Cost = ₹"+totalvalue +"\nKindly Share your Location so we can reach you Quick N Fresh !!!"
  var win = window.open(`https://wa.me/8983778453?text=${message}`, '_blank');
  // alert(message);
  // alert("Order Sent To Distributer.")

}