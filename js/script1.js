$(document).ready(function() {
	//hide all errors, which will only show when called below
	$("#password_error_message").hide();
	$("#email_error_message").hide();

	var error_password = false;
	var error_email = false;
	
	//Excecute when the use click out of the box "focusout"
	$("#form_password").focusout(function() {

		check_password();
		
	});

	$("#form_email").focusout(function() {

		check_email();
		
	});

	function check_password() {
	
		var password_length = $("#form_password").val().length;
		console.log(password_length);
		if(password_length < 7) {
			$("#password_error_message").html("Your password must be at least 7 characters");
			$("#password_error_message").show();
			error_password = true;
		} else {
			$("#password_error_message").hide();
		}
	
	}

	function check_email() {

		var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	
		if(pattern.test($("#form_email").val())) {
			$("#email_error_message").hide();
		} else {
			$("#email_error_message").html("Invalid email address");
			$("#email_error_message").show();
			error_email = true;
		}
	
	}

	$("#login_form").submit(function() {
											
		error_password = false;
		error_email = false;
											
		check_password();
		check_email();
		
		if(error_password == false && error_email == false) {
			return true;
		} else {
			return false;	
		}

	});

});