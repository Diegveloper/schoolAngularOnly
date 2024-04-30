import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }
  checked: boolean = false;
  onLogin(): void{
    this.authService.login('lilyrod@gmail.com','1234')
    .subscribe(user=>{
      this.router.navigate(['/student']);
    });
  }


}
