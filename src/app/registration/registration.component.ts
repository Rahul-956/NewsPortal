import { Component, OnInit } from '@angular/core';
import { updateShorthandPropertyAssignment } from 'typescript';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user= {
    img:'',
    firstname:'',
    lastname: '',
    username:'',
    email:'' ,
    password:'',
    retype_passsword:'',
    phone:''
    
  }



  constructor() { }

  ngOnInit(): void {
  }
 
  onSubmit() {
    console.log(this.user);
    //api request store value db
  }
}
