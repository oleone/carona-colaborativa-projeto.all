import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../classes/User';

@Injectable()
export class AuthService {
  private urlLogin: any = '';

  constructor( private afAuth: AngularFireAuth, private http: Http, private router: Router ) {}

   login(u) {
    return this.http.post(this.urlLogin, u)
    .toPromise()
    .then(res => console.log(res));
  }

  loginGoogle() {
    const dados = this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return dados
      .then(
        res => {console.log(res);
            localStorage.setItem('userLoged', 'true');
        })
      .catch(error => error);
  }

  logoutGoogle() {
    this.afAuth.auth.signOut();
  }

  logout() {
    this.logoutGoogle();
  }

}
