import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  private email?: string;
  private password?: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl('',[],[]),
    password: new FormControl('',[],[]),
  })

  checked: boolean = false;
  onLogin(): void{
    if( this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }
    this.authService.login(this.loginForm.value.email,this.loginForm.value.password)
    .subscribe(user=>{
      this.router.navigate(['/student']);
    });
  }


}
