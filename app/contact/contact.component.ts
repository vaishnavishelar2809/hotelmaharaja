import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
c:Contact=new Contact();
ngOnInit(): void {
    
}
constructor(private cServ:ContactService)
{

}
submitdata()
{
  this.c.email=localStorage.getItem("email")
  this.cServ.newContact(this.c).subscribe((data:Contact)=>{
  if(data!=null)
    {
      alert('Thank you for feedback ')
    } 
})
}
}
