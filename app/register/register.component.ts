import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Register } from '../models/register';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit  {
  reg:Register=new Register();
email: any;
  ngOnInit(): void {
    
  }
  constructor(private regServ:RegisterService)
  {

  }
  submitdata()
  {
    this.regServ.newUser(this.reg).subscribe((data:Register)=>{
    if(data!=null)
      {
        alert('Registration Successfully')
      }
    })
  }  
}