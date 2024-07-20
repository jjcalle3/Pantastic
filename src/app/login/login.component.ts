import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  public formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, formLogin: FormGroup) {
    this.formLogin = formLogin;
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  send(): void {
    console.log(this.formLogin.value);
  }
}
