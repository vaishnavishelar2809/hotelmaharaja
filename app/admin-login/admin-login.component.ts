import { Component } from '@angular/core';
import { AdminLogin } from '../models/admin-login';
import { AdminLoginService } from '../services/admin-login.service';
import {  Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
ad:AdminLogin=new AdminLogin();
constructor(private adServ:AdminLoginService,private router:Router)
{

}
submitdata()
{
  this.adServ.login(this.ad).subscribe((data:AdminLogin)=>{
    if(data!=null)
      {
        localStorage.setItem("aemail",data.email)
        alert("Login succesfully")
        this.router.navigate(['/'])
      }
      else
      alert("Invialid emailid and password")
  })
}
}
