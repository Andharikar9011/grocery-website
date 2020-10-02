var cartvalue=0;
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
      console.log(typeof(prod));
      console.log(prod.indexOf(product));
      
      if (prod.indexOf(product)==-1) {
       
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
        alert("Product Already Added.")
      }
    }
  }


  
 try {
    cartvalue=sessionStorage.getItem("products").split(",").length
    var a= document.getElementById("cartvalue");
    a.innerHTML= cartvalue;
 } catch (error) {
    var a= document.getElementById("cartvalue");
    a.innerHTML= 0;
 }
 
  
  