import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, MatButton, RouterModule,NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  public loggedIn: boolean = false;
  public user:string = "Ashutosh";
  constructor(private loginService:LoginServiceService){
  }
  ngOnInit(): void {
    console.log(`isLoggedIn:${this.loginService.isLoggedIn()}`);
    this.loggedIn = this.loginService.isLoggedIn();
  }
  logOutUser(): void{
    console.log("Logout buttion clicked");
    this.loginService.logoutUser();
    location.reload;
  }
}
