function myFunction() {
    // first tr
    var firsttr = document.createElement("TR");
    firsttr.setAttribute("id","my1")
    document.getElementById("my").appendChild(firsttr);
    // td1
    var td1 = document.createElement("TD");
    td1.setAttribute("id","my21")
    td1.setAttribute("class","shoping__cart__item")
    document.getElementById("my1").appendChild(td1);
        // td1 img
        var td1img = document.createElement("IMG");
        td1img.setAttribute("id","my211")
        td1img.setAttribute("src","img/cart/cart-1.jpg")
        td1img.setAttribute("alt","/")
        document.getElementById("my21").appendChild(td1img);
        // td1 h5
        var td1h5 = document.createElement("H5");
        td1h5.setAttribute("id","my212")
        td1h5.innerHTML="Apple"
        document.getElementById("my21").appendChild(td1h5);

    // td2
    var td2 = document.createElement("TD");
    td2.setAttribute("id","my22")
    td2.setAttribute("class","shoping__cart__price")
    td2.innerHTML="₹55.00"
    document.getElementById("my1").appendChild(td2);
    // td3
    var td3 = document.createElement("TD");
    td3.setAttribute("id","my23")
    td3.setAttribute("class","shoping__cart__item")
    document.getElementById("my1").appendChild(td3);
        // td3-div
        var td3div = document.createElement("DIV");
        td3div.setAttribute("id","my231")
        td3div.setAttribute("class","quantity")
        document.getElementById("my23").appendChild(td3div);
            // td3-div-div
            var td3divdiv = document.createElement("DIV");
            td3divdiv.setAttribute("id","my2311")
            td3divdiv.setAttribute("class","pro-qty")
            document.getElementById("my231").appendChild(td3divdiv);
                // td3-div-div-input
                var td3divdivinp = document.createElement("DIV");
                td3divdivinp.setAttribute("id","my23111")
                td3divdivinp.setAttribute("type","text")
                td3divdivinp.setAttribute("value","1")
                document.getElementById("my2311").appendChild(td3divdivinp);

    // td4
    var td4 = document.createElement("TD");
    td4.setAttribute("id","my24")
    td4.setAttribute("class","shoping__cart__total")
    td4.innerHTML="₹110.00"
    document.getElementById("my1").appendChild(td4);
    // td5
    var td5 = document.createElement("TD");
    td5.setAttribute("id","my25")
    td5.setAttribute("class","shoping__cart__item__close")
    document.getElementById("my1").appendChild(td5);
      // td5-span
      var td5span = document.createElement("SPAN");
      td5span.setAttribute("id","my251")
      td5span.setAttribute("class","icon_close")
      document.getElementById("my25").appendChild(td5span);
  }

//   <tr>
//  1 <td class="shoping__cart__item">
//     <img src="img/cart/cart-1.jpg" alt="" />
//     <h5>Vegetable’s Package</h5>
//   </td>
//  2 <td class="shoping__cart__price"> ₹55.00</td>
//  3 <td class="shoping__cart__quantity">
//     <div class="quantity">
//       <div class="pro-qty">
//         <input type="text" value="1" />
//       </div>
//     </div>
//   </td>
//  4 <td class="shoping__cart__total"> ₹110.00</td>
//  5 <td class="shoping__cart__item__close">
//     <span class="icon_close"></span>
//   </td>
// </tr>