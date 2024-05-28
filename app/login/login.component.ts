import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
reg:Register=new Register();
constructor(private regServ:RegisterService,private router:Router)
{

}
submitdata()
{
  this.regServ.login(this.reg).subscribe((data:Register)=>{
    if(data!=null){
      localStorage.setItem("email",data.email)
      alert('Login successfully')
      this.router.navigate(['/'])
    }
    else
      alert("Invialid emailid and password")
  })
}
}
