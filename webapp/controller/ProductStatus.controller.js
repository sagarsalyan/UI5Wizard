sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller,JSONModel) {
	"use strict";

	return Controller.extend("Application.WizardTemplate.controller.ProductStatus", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf Application.WizardTemplate.view.ProductStatus
		 */
		onInit: function () {
			var that = this;
			// Initialize view model to manipulate view
			var model = new JSONModel();
			model.setData({
				"PONumber": "",
				"visibleWizard": false
			});
			that.getView().setModel(model, "viewInitialModel");
			// initialize data model 
			var wizardModel = new JSONModel();
			var Wdata = [{
				"PONum": "54276977",
				"POCreate": "X",
				"POApprovedbySupplier": "",
				"POApprovedbyProgrammer": "",
				"POPicked": "",
				"POLoaded": "",
				"POAcknowledged": "",
				"PurchaseId": "L099000543",
				"PurchaseName": "sample Purchase1",
				"Status": "POCreated",
				"CreatedOn": "10042019",
				"CreatedBy": "persion1",
				"ApprovedBySupply": "Person1",
				"ApprovedOn": "",
				"ApprovedBy": "",
				"ApprovedByProgramme": "Person2",
				"ChiefOfProgramme": "Person3",
				"POType": "ZLO",
				"RecommendedDelDate": "02052019",
				"POPicStatus": "",
				"POPickedOn": "",
				"POLoadedOn": "",
				"POAck": ""
			}, {
				"PONum": "54278667",
				"POCreate": "X",
				"POApprovedbySupplier": "X",
				"POApprovedbyProgrammer": "",
				"POPicked": "",
				"POLoaded": "",
				"POAcknowledged": "",
				"PurchaseId": "L099000669",
				"PurchaseName": "sample Purchase2",
				"Status": "POApprovedbySupplier",
				"CreatedOn": "04042019",
				"CreatedBy": "Person1",
				"ApprovedBySupply": "Persion1",
				"ApprovedOn": "",
				"ApprovedBy": "Persion1",
				"ApprovedByProgramme": "Person2",
				"ChiefOfProgramme": "Person3",
				"POType": "ZLO",
				"RecommendedDelDate": "22042019",
				"POPicStatus": "",
				"POPickedOn": "",
				"POLoadedOn": "",
				"POAck": ""
			}, {
				"PONum": "54278881",
				"POCreate": "X",
				"POApprovedbySupplier": "X",
				"POApprovedbyProgrammer": "X",
				"POPicked": "",
				"POLoaded": "",
				"POAcknowledged": "",
				"PurchaseId": "L099000544",
				"PurchaseName": "sample Purchase Name",
				"Status": "POApprovedbyProgrammer",
				"CreatedOn": "01042019",
				"CreatedBy": "Person1",
				"ApprovedBySupply": "Person2",
				"ApprovedOn": "15042019",
				"ApprovedBy": "",
				"ApprovedByProgramme": "Person2",
				"ChiefOfProgramme": "Person3",
				"POType": "ZLO",
				"RecommendedDelDate": "17042019",
				"POPicStatus": "",
				"POPickedOn": "",
				"POLoadedOn": "",
				"POAck": ""
			}, {
				"PONum": "54277437",
				"POCreate": "X",
				"POApprovedbySupplier": "X",
				"POApprovedbyProgrammer": "X",
				"POPicked": "X",
				"POLoaded": "",
				"POAcknowledged": "",
				"PurchaseId": "L099000232",
				"PurchaseName": "sample Purchase3",
				"Status": "POPicked",
				"CreatedOn": "02042019",
				"CreatedBy": "Person1",
				"ApprovedBySupply": "Person2",
				"ApprovedOn": "04042019",
				"ApprovedByProgramme": "Person2",
				"ApprovedBy": "Approval1",
				"ChiefOfProgramme": "Person3",
				"POType": "ZLO",
				"RecommendedDelDate": "05042019",
				"POPicStatus": "partially",
				"POPickedOn": "",
				"POLoadedOn": "",
				"POAck": ""
			}, {
				"PONum": "54278968",
				"POCreate": "X",
				"POApprovedbySupplier": "X",
				"POApprovedbyProgrammer": "X",
				"POPicked": "X",
				"POLoaded": "X",
				"POAcknowledged": "",
				"PurchaseId": "L099000540",
				"PurchaseName": "sample Purchase4",
				"Status": "POLoaded",
				"CreatedOn": "17042019",
				"CreatedBy": "Person3",
				"ApprovedBySupply": "person2",
				"ApprovedOn": "18042019",
				"ApprovedBy": "Approval2",
				"ApprovedByProgramme": "Person2",
				"ChiefOfProgramme": "Person3",
				"POType": "ZLO",
				"RecommendedDelDate": "25042019",
				"POPicStatus": "fully",
				"POPickedOn": "2604019",
				"POLoadedOn": "",
				"POAck": ""
			}];
			wizardModel.setData(Wdata);
			that.getView().setModel(wizardModel, "wizardModel");
		},
		onCheckStatus: function (oEvent) {
			var that = this;
			var PONum = that.getView().getModel("viewInitialModel").getProperty("/PONumber");
			that.getView().getModel("viewInitialModel").setProperty("/visibleWizard", true);   
// getting static data 
			var sData = that.getView().getModel("wizardModel").getData();
//added filter to get purchase order details based on given input value.
			var sObj = sData.filter(function (item) {
				return item.PONum === PONum;
			});
// Initialize model to display purchase order details.
			var POStatusModel = new JSONModel(sObj[0]);
			that.getView().setModel(POStatusModel, "POStatusModel");
		
// change current step dynamically.
that.getView().byId("POStatusWizard").setCurrentStep(that.byId(sObj[0].Status));
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf Application.WizardTemplate.view.ProductStatus
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf Application.WizardTemplate.view.ProductStatus
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf Application.WizardTemplate.view.ProductStatus
		 */
		//	onExit: function() {
		//
		//	}

	});

});