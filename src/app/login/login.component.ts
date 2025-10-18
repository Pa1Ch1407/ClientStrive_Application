import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userObj: any = {
    EmailId:'',
    Password: ''
  };

  router = inject(Router)

  onLogin(){
    if(this.userObj.EmailId=="abcd@gmail.com" && this.userObj.Password == "123456789") {
      localStorage.setItem('userid', this.userObj.EmailId);
      this.router.navigateByUrl('/client');
    }else{
      alert('Wrong Credentials');
    }
  }
}
