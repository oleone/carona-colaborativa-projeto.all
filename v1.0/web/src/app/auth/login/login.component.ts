import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  f: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.f = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      remember_me: [null]
    });
  }

  onSubmit() {
    console.clear();
    console.log(this.f.value);
    this.router.navigate(['/dashboard']);
  }

  getErrorMessage() {
    return this.f.controls.email.hasError('required') ? 'Preencha com seu e-mail' :
        this.f.controls.email.hasError('email') ? 'E-mail não válido!'
         : '';
  }

}
