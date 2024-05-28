import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view-feedback',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-feedback.component.html',
  styleUrl: './view-feedback.component.css'
})
export class ViewFeedbackComponent implements OnInit{
cd:Contact[]=[]
constructor(private cdServ:ContactService)
{

}
  ngOnInit(): void {
    this.cdServ.getAll().subscribe((data:Contact[])=>{
      if(data!=null)
        {
            this.cd=data
        }
    })
  }
}
