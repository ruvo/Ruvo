// Ruvo_ContactForm.js

/// FORM SUCCESS MESSAGE 
var sendingFormNotification_text_heading = 'Congratulations!';
var sendingFormNotification_text = 'Your Message has been sent. Crowley Carpets will be in touch soon to discuss your project.';

var getContactVals = function(){
	/// GRAB FORM VALUE FORM TEXT FIELDS.
		var formVals = {
			title : $(".contactForm_title_dropdown option:selected" ).val(),
			name : $("#contactForm_input_name").val(),
			email : $("#contactForm_input_email").val(),
			phone : $("#contactForm_input_phone").val(),
			weburl : $("#contactForm_input_website").val(),
			messageSubject : $("#contactForm_input_subjectLine").val(),
			messageText : $('textarea#contactForm_MainMessage').val()
		};

	return formVals;
};


var sendForm_debouncer = null;

var isEmail = function(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
};



var clearForm = function(){
		$(".contactForm_title_dropdown").val(   $("#target option:first").val()  );
		$("#contactForm_input_name").val("");
		$("#contactForm_input_email").val("");
		$("#contactForm_input_phone").val("");
		$("#contactForm_input_website").val("");
		$("#contactForm_input_subjectLine").val("");
		$("#contactForm_MainMessage").val("");

};

/// RUN ONCE PAGE IS LOADED..
$(document).ready(function(){
	//swal("loaded Page");

	//// Bind Clicking the Submit Button..  
		$("#SubmitContactFormButton").unbind('click').bind('click', function(){
			clearTimeout(sendForm_debouncer);
			sendForm_debouncer = setTimeout(function(){
					///-  Get Current Populated Form Values.. 
						var formVals = ( getContactVals() );
					///-  Check that it is a real Email Format 
						if( isEmail(formVals.email ) ){
							/// This is a GOOD EMAIL format in the text field..
							//// Send This formVals to WebServer
								$.post("/handleContactForm", formVals)
										.done(function(data){
											console.log("DONE SENDING CONTACT FORM..");
											if(data === "Success"){
												// Prompt this User for Successful Sending of their Form Message..  
											 		swal({   
												 			title: sendingFormNotification_text_heading,   
												 			text: sendingFormNotification_text,    
												 			confirmButtonText: "Ok" 
												 	},function(isConfirm){
													    //// User Confirmed the Notification of Successfully Sending The Form 
													    /////// clearTheFormFromLastPost
														    clearForm();
													});

											}else{
												swal("Something Went Wrong Contacting Crowlery Carpets")
											}
										});

						}else{
							//// This Is Not a Good Email Format...  
							swal({
								title : "Appears you Entered an Invalid Email Address.",
								text : "Please enter a Valid Email Address and try sending the form again.",
								confirmButtonText : "Ok"
								
							}, function(isConfirm){
								//// Focus on the EMAIL input field so they can make changes to their input value..
								// alert("WTF");
								// $("#contactForm_input_email").focus();
							});						
						}
			}, 300);


		});
});