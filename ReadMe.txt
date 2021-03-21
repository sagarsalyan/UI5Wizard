Create wizard in xml view.

		<Wizard id="POStatusWizard" finishButtonText="Finish" currentStep="step1" 
		showNextButton="false"></Wizard>


Now i’ll explain sap.m.wizard properties.

Complete property is event. This event trigger when you reach last step of wizard the “Review” button and press.

finishButtonText property is user to change text of finish button. (default: Review)

showNextButton property is user to show or hide Next Button of each step. Property default value is true.

currentStep property is a new property of wizard and it is available from 1.50 version. To this property to change current step directly.

Steps is a aggregation property to bind dynamic wizard steps into the content.

Create wizard steps of wizard in XML view.

		<Wizard id="POStatusWizard" finishButtonText="Finish"
			 showNextButton="false">
		   <WizardStep id="POCreated" visible="true" title="PO Created"
			activate="wizardCompletedHandler"></WizardStep>
		</wizard>


Methods of wizard control

Add step to wizard 
Adds a new step to the Wizard.

		this.getView().byId(“wizard”).addStep( new sap.m.WizardStep(“step1”,{
								   Title:”step1”,
								   Validate:true
								}));
Get Current Step.
Returns the ID of the element which is associate of currentStep. or null

		this.getView().byId(“POStatusWizard”).getCurrentStep();
Set Current Step.
Set association currentStep to the given step. This method is available since 1.50 version.

		this.getView().byId(“wizard”).setCurrentStep(this.byId("POCreate");
		
Get Finish Button Text.
Returns the finish button text as string.

		this.getView().byId(“POStatusWizard”).getFinishButtonText();
		
Get Progress.
Returns the number of last activated step of wizard as Number.

		this.getView().byId(“POStatusWizard”).getProgress();
		
Get Progress Step.
Returns the last activated Step of wizard as wizardStep.

		this.getView().byId(“POStatusWizard”).getProgressStep();
		
Get Steps.
Returns the aggregation of wizard and its included in wizard content. And it’s returns as array.

		this.getView().byId(“POStatusWizard”).getSteps();
Go To Step.
Goes to the give step. The step must be already activated and visible. It won’t work when step            is not activated and visible.

		this.getView().byId(“POStatusWizard”).gotostep(this.getView().byId("POApproveStatus1"), true);
		
Invalidate/ validate step.
Invalidate/validate the given step. its boolean value

		this.getView().byId(“POStatusWizard”).invalidateStep(this.getView().byId("step3")); // invalidate
		this.getView().byId(“POStatusWizard”).validateStep(this.getView().byId("step3")); //validate
		
Next/Previous step methods.
Goes to the one further step and validates current step. // next step

Goes to the one step back and discard the current step. // previous step

		this.getView().byId(“POStatusWizard”).nextStep();
		this.getView().byId(“POStatusWizard”).previousStep();
		
IndexOfStep method.
Checks the given step is in the aggregation of wizard. If found the step and returns index of               that step otherwise returns -1.

		this.getView().byId(“POStatusWizard”).indexOfStep(this.getView().byId("step2"));
		
removeAllSteps method.
This method is user to remove all steps of wizard.

		this.getView().byId(“POStatusWizard”).removeAllSteps();
		
DestroySteps method.
Destroy all steps of aggregation in the given wizard.

		this.getView().byId(“POStatusWizard”).destroySteps();