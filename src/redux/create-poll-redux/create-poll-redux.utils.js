




export const format_conversion =(cartItems,TYPE) => {
  console.log(cartItems)
    var arr = [];
    var i;

    if (cartItems.length==0){return}
    for (i = 0; i < cartItems.length; i++) {
        var dict = { name : cartItems[i] , 
            votes : 0 ,type :TYPE}

            arr.push(dict)

      }
      

    return arr
  };



