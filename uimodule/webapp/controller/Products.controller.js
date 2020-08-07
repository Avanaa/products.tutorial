sap.ui.define([
  "tutorial/products/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("tutorial.products.controller.Products", {

    handleListItemPress: function(oEvent){
      var selectedItem = oEvent.getSource().getBindingContext().getProperty("ProductID");

      if (selectedItem) {
        
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        
        oRouter.navTo("ProductDetail", {
          productId : selectedItem
        });
      }

    }
  });
});
