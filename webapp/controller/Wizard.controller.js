sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Application.WizardTemplate.controller.Wizard", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Application.WizardTemplate.view.Wizard
		 */
		onInit: function () {
			this._wizard=this.getView().byId("CreateProductWizard");
		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Application.WizardTemplate.view.Wizard
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Application.WizardTemplate.view.Wizard
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Application.WizardTemplate.view.Wizard
		 */
		//	onExit: function() {
		//
		//	}
		
		step1complt:function(){
			debugger;
		},
		
		onBasicBtnPress:function(){
			debugger;
			this.getView().byId("BasicInfoStep").setValidated(true);
			this.getView().byId("btnBasic").setVisible(false);
			
			this._wizard.nextStep();
			
		},
		onAddressBtnPress:function(){
			debugger;
			this.getView().byId("AddressInfoStep").setValidated(true);
			this.getView().byId("btnAddress").setVisible(false);
			
			this._wizard.nextStep();
			
		},
		_handleFragmentHelp: function (oEvent) {
			debugger;
			
			
			this.inputId = oEvent.getSource().getId();
			// create value help dialog
			if (!this._vendorDialog) {
				this._vendorDialog = sap.ui.xmlfragment(
					"Application.WizardTemplate.fragments.CreateItem",
					this
				);
				this.getView().addDependent(this._vendorDialog);
			}

			this._vendorDialog.open();
		},

	});

});