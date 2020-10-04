"use strict";
var cartvalue = 0;
function addproduct(product, value, per) {
  var prod = [];
  var val = [];
  var mass = [];
  console.log(sessionStorage);
  if (
    sessionStorage.getItem("products") == undefined ||
    sessionStorage.getItem("products") == []
  ) {
    console.log("emptycart");
    prod.push(product);
    val.push(value);
    mass.push(per);
    sessionStorage.setItem("products", prod);
    sessionStorage.setItem("value", val);
    sessionStorage.setItem("per", mass);
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
      console.log(prod, val, mass);
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
      td2.innerHTML = val[index] + " " + mass[index];
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
          td3divdivspan1.setAttribute("onclick","addquantity("+index+"-211"+")")
          td3divdivspan1.innerHTML="-"
          document.getElementById(index+"-311").appendChild(td3divdivspan1);
      // td3-div-div-input
      var td3divdivinp = document.createElement("label");
      td3divdivinp.setAttribute("id", index + "-3112");
      td3divdivinp.setAttribute("type", "text");
      td3divdivinp.setAttribute("value", "1");
      document.getElementById(index + "-311").appendChild(td3divdivinp);
      // td3-div-div-span
          var td3divdivspan2 = document.createElement("span");
          td3divdivspan2.setAttribute("id",index+"-3113")
          td3divdivspan2.setAttribute("class","inc qtybtn")
          td3divdivspan1.setAttribute("onclick","addquantity("+index+"-211"+")")
          td3divdivspan2.innerHTML="+"
          document.getElementById(index+"-311").appendChild(td3divdivspan2);

      // td4
      var td4 = document.createElement("TD");
      td4.setAttribute("id", index + "-4");
      td4.setAttribute("class", "shoping__cart__total");
      td4.innerHTML = val[index];
      document.getElementById(index + "-1").appendChild(td4);
      // td5
      var td5 = document.createElement("TD");
      td5.setAttribute("id", index + "-5");
      td5.setAttribute("class", "shoping__cart__item__close");
      document.getElementById(index + "-1").appendChild(td5);
      // td5-span
      var td5span = document.createElement("SPAN");
      td5span.setAttribute("id", index + "-51");
      td5span.setAttribute("class", "icon_close");
      document.getElementById(index + "-5").appendChild(td5span);
    }
  } else {
    console.log("Empty cart");
  }
}

function addquantity(productid){
console.log(document.getElementById('"'+productid+'"').value)
}