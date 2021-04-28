sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/base/strings/formatMessage',
    'sap/m/MessageToast'
], function(Controller, formatMessage, MessageToast) {
    'use strict';

    return Controller.extend("sap.suite.ui.commons.demokit.tutorial.icecream.01.controller.ProcessFlow",{
        formatMessage: formatMessage,

        onNavButtonPressed: function(){
            this.getOwnerComponent().getRouter().navTo("home")
        },

        getValuesDelta: function(fFirstValue, fSecondValue){
            return fSecondValue-fFirstValue;
        },

        onNodePressed: function(oEvent){
            var sItemTitle = oEvent.getParameters().getTitle();
            MessageToast.show(this.getResourceBundle().getText("ProcessFlowNodeClickedMessage", [sItemTitle]));
        },

        getResourceBundle: function(){
            return this.getOwnerComponent().getModel("i18n").getResourceBundle();
        }
    })
    
});