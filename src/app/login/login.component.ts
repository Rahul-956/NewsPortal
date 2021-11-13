import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser= {
    username:'',
    password:'',
  }
  
  @Input() isLogin=false;
  constructor(private login: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  formSubmit() {
  }
}
