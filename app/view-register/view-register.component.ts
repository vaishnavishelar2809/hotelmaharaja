import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Register } from '../models/register';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-register',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-register.component.html',
  styleUrl: './view-register.component.css'
})
export class ViewRegisterComponent implements OnInit {
  regs:Register[]=[]
  constructor(private regServ:RegisterService)
  {

  }
  ngOnInit(): void {
    this.regServ.getAll().subscribe((data:Register[])=>{
      if(data!=null)
        {
           this.regs=data
        }
   
  })

  }

}


