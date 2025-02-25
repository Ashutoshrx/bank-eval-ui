import { Component, NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginServiceService: LoginServiceService) { }

  credentials = {
    initiatorName: '',
    password: '',
    contactNumber: ''
  }


  onSubmit = () => {
    console.log(this.credentials);
    if (this.credentials.initiatorName != '' && this.credentials.password != '' && this.credentials.contactNumber != '') {
      console.log("We need to send to server");
      this.loginServiceService.doLogin(this.credentials).subscribe({
        next: (response: any) => {
          console.log(response.token);
          this.loginServiceService.loginUser(response);
          window.location.href = '/dashboard';
          console.log(localStorage.getItem('token'));
        },
        error: (err) => {
          alert('There was an error in retrieving data from the server:');
          console.log(err);
        }
      });
    } else {
      console.log("Please enter this is empty");

    }
  };
}
