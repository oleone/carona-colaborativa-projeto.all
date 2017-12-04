import { Component, OnInit, AfterViewInit, HostBinding } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  f: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.f = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      remember_me: [null]
    });

    if (localStorage.getItem('userLoged') != null ||
        localStorage.getItem('firebase:authUser:AIzaSyDJkfx-JMHj4DwWzYZ3LVo3HEduujdxkFk:[DEFAULT]')) {
      this.router.navigate(['/dashboard']);
      console.log(localStorage.getItem('firebase:authUser:AIzaSyDJkfx-JMHj4DwWzYZ3LVo3HEduujdxkFk:[DEFAULT]'));
    } else {
      console.log('Deslogado');
    }
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

  login() {
    const auth = this.authService.login(this.f.value);
    if (auth) {
      console.log(auth);
    }
  }

  loginGoogle() {
    const auth = this.authService.loginGoogle();

    this.router.navigate(['/dashboard']);
  }

  logoutGoogle() {
    this.authService.logoutGoogle();
    localStorage.removeItem('userLoged');
    console.log('deslogado');
    this.router.navigate(['/']);
  }

}
