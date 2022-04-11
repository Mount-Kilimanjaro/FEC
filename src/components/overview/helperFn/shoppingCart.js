module.exports = {
    validOrderQuantity: (newOrder, cart) => {
        const resolve = {
            index: null,
            newOrder,
            error: null
          };
      
          for (let i = 0; i < cart.length; i++) {
            const order = cart[i];
            if (order.sku === newOrder.sku && order.style_id === newOrder.style_id) {
              if (order.quantity + newOrder.quantity > order.maxQuantity ) {
                resolve.error = "You have exeeced the quantity available"
                return resolve;
              }
              resolve.index = i;
              break;
            }
          }
          return resolve;
    },
    resetSizeInputs: () => {
        const targetSelectSize = document.querySelector("#overview_select_size");
        if (targetSelectSize) {
          targetSelectSize.value = "DEFAULT";
        }
    },
    resetQuantityInputs: () => {
        const targetSelectQuantity = document.querySelector("#overview_select_quantity");
        if (targetSelectQuantity) {
          targetSelectQuantity.value = "DEFAULT";
        }
        
    },
    quantityAvailable: (item,cart) => {
        for (let i = 0; i < cart.length; i++) {
            const order = cart[i];
            if (order.sku === item.sku) {
                return item.quantity - order.quantity;
            }
          }
        return item.quantity;
    },
    hideOverFlow: (boolean) => {
      if (boolean) {
          document.body.classList.add("hideOverFlow");
       }else {
          document.body.classList.remove("hideOverFlow");
       }
  },
};