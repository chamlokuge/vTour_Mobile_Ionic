
import { Injectable } from '@angular/core';
import { resolveDefinition } from '@angular/core/src/view/util';

export interface User {
  name : String
  role : number

}
@Injectable()
export class AuthProvider {
  currentUser: User;
  constructor() {
  }

  login (name:String, pw:String) : Promise<boolean>{
    return new Promise((resolve, reject) => {
      if (name === 'admin' && pw === 'admin') {
        this.currentUser = {
          name: name,
          role: 0
        };
        resolve (true);
      } else if (name === 'user' && pw === 'user'){
        this.currentUser = {
          name: name,
          role: 1
        };
        resolve (true);
      } else {
        reject (false);
      }
    });
  }

  isLoggedIn(){
    return this.currentUser != null;
  }

  logout(){
    return this.currentUser = null;
  }

  isAdmin(){
    return this.currentUser.role === 0;
  }
  
}
