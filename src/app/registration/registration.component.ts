import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // function validate() {
  //   var result = "";
  //   result += validateName();
  //   result += validateEmail();
  //   result += validatePassword();
  //   result += validateTerms();
  
  //   if (result == "") return true;
  
  //   alert("Validation Result:\n\n" + result);
  //   return false;
  // }
  
  // function validateName() {
  //   var name = document.getElementsByName("name")[0].value;
  //   if (name.length <= 3)
  //     return "UserName should be at least three characters.\n";
  //   if (name.length > 50)
  //     return "UserName should not be nore than 50 characters"
  //   return "";
  // }
  
  // function validatePassword() {
  //   var password = valueOf("password");
  //   var retype = valueOf("retype_password");
  //   var decimal = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{6,12}$/;
  //   if (password.match(decimal)) {
  //     alert('Correct, try another...')
  //     if (password != retype)
  //     return "Passwords do not match.\n";
  //     else 
  //     return "Password is correct.\n";
      
  //   }
  //     else {
  //     alert('Wrong...!')
  //     return false;
  //   }
  // }
  
  // function validateEmail() {
  //   var x = valueOf("email");
  //   var atposition = x.indexOf("@");
  //   var dotposition = x.lastIndexOf(".");
  //   if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
  //     alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
  //     return "Email should be a valid address";
  //   }
  //   return "";
  // }
  // function ValidateNo() {
  //   var phoneNo = document.getElementById('txtPhoneNo');
  
  //   if (phoneNo.value == "" || phoneNo.value == null) {
  //     alert("Please enter your Mobile No.");
  //     return false;
  //   }
  //   if (phoneNo.value.length < 10 || phoneNo.value.length > 10) {
  //     alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");
  //     return false;
  //   }
  
  //   alert("Success ");
  //   return true;
  // }
  
  // function validateTerms() {
  //   var terms = document.getElementsByName("terms")[0];
  //   if (!terms.checked)
  //     return "Please accept the Terms of Service and Privacy Policy";
  //   return "";
  // }
  
  // function valueOf(name) {
  //   return document.getElementsByName(name)[0].value;
  // }
}
