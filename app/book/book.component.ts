import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  b:Book=new Book();
  ngOnInit(): void {
      
  }
  constructor(private bServ:BookService)
  {
  
  }
  submitdata()
  {
    this.b.email=localStorage.getItem("email")
    this.bServ.newBook(this.b).subscribe((data:Book)=>{
    if(data!=null)
      {
        alert('Thank you for Book stay')
      } 
  })
  }
}
