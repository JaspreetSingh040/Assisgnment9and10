$(document).ready(function() {
	//hide all errors, which will only show when called below
	
	$("#email_error_message").hide();
	$("#fname_error_message").hide();
	$("#lname_error_message").hide();
	$("#password_error_message").hide();
	$("#retype_password_error_message").hide();
	$("#birth_error_message").hide();

	var error_email = false;
	var error_fname = false;
	var error_lname = false;
	var error_password = false;
	var error_retype_password = false;
	var error_birth = false;
	
	//Excecute when the use click out of the box "focusout"

	$("#form_email").focusout(function() {

		check_email();
		
	});
	
	$("#form_fname").focusout(function() {

		check_fname();
		
	});
	$("#form_lname").focusout(function() {

		check_lname();
		
	});
	$("#form_password").focusout(function() {

		check_password();
		
	});
	$("#form_retype_password").focusout(function() {

		check_retype_password();
		
	});
	$("#form_birth").focusout(function() {

		check_birth();
		
	});
	
	function check_fname() {
	
		var fname_length = $("#form_fname").val().length;
		console.log(fname_length);
		if(fname_length < 5 || fname_length > 20) {
			$("#fname_error_message").html("Your first name must be between 5-20 characters");
			$("#fname_error_message").show();
			error_fname = true;
		} else {
			$("#fname_error_message").hide();
		}
	
	}

	function check_lname() {
	
		var lname_length = $("#form_lname").val().length;
		console.log(lname_length);
		if(lname_length < 5 || lname_length > 20) {
			$("#lname_error_message").html("Your last name must be between 5-20 characters");
			$("#lname_error_message").show();
			error_lname = true;
		} else {
			$("#lname_error_message").hide();
		}
	
	}
	
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
	
	function check_retype_password() {
	
		var password = $("#form_password").val();
		var retype_password = $("#form_retype_password").val();
		
		if(password !=  retype_password) {
			$("#retype_password_error_message").html("Your passwords does not match");
			$("#retype_password_error_message").show();
			error_retype_password = true;
		} else {
			$("#retype_password_error_message").hide();
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
	function check_birth(){
		var birth_length = $("#form_birth").val().length;
		console.log(birth_length);
		if(birth_length < 0) {
			$("#birth_error_message").html("Enter Birth date");
			$("#birth_error_message").show();
			error_birth = true;
		} else {
			$("#birth_error_message").hide();
		}
	}

	$("#signup_form").submit(function() {
											
		error_email = false;
		error_fname = false;
		error_lname = false;
		error_password = false;
		error_retype_password = false;
		error_birth = false;
										
		check_email();
		check_fname();
		check_lname();
		check_password();
		check_retype_password();
		check_birth();
		
		if(error_email == false && error_fname == false && error_lname == false && error_password == false && error_retype_password == false && error_birth == false) {
			return true;
		} else {
			return false;	
		}

	});

});