sap.ui.define([
  "tutorial/products/controller/BaseController"
], function(Controller) {
  "use strict";

  return Controller.extend("tutorial.products.controller.ProductDetail", {

    onInit: function () {
      const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.getRoute("ProductDetail").attachMatched(this._onRouteMatched, this);
    },

    _onRouteMatched: function (oEvent) {
      const iProductId = oEvent.getParameter("arguments").productId;
      const oView = this.getView();
      oView.bindElement({
        path: "/Products(" + iProductId + ")",
        events: {
          dataRequested: function () {
            oView.setBusy(true);
          },
          dataReceived: function () {
            oView.setBusy(false);
          }
        }
      });
    },

    addToCart: function(oEvent){

      var message = "";
      var oButton = oEvent.getSource();

      if (oButton.getIcon() == "sap-icon://cart-3") {
        oButton.setIcon("sap-icon://cart-2");
        message = this.getView().getModel("i18n").getResourceBundle().getText("add.cart");
      } else {
        oButton.setIcon("sap-icon://cart-3");
        message = this.getView().getModel("i18n").getResourceBundle().getText("del.cart");
      }
      sap.m.MessageToast.show(message);
    },

    addToFav: function(oEvent){

      var message = "";
      var oButton = oEvent.getSource();

      if (oButton.getIcon() == "sap-icon://unfavorite") {
        oButton.setIcon("sap-icon://favorite");
        message = this.getView().getModel("i18n").getResourceBundle().getText("add.favorite");
      } else {
        oButton.setIcon("sap-icon://unfavorite");
        message = this.getView().getModel("i18n").getResourceBundle().getText("del.favorite");
      }
      sap.m.MessageToast.show(message);
    }
    
  });
});
