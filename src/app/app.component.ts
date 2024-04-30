import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'school';
}


// import { Component, OnInit } from '@angular/core';
// import { AuthService } from './auth/services/auth.services';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent implements OnInit{
//   title = 'school';
//   constructor(
//     private authService: AuthService
//   ){

//   }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }

//   OnInit(): void{
//     this.authService.checkAuthentication().subscribe(
//       () => {
//         console.log('checkAuthentication finished')
//       }
//     )
//   }
// }
