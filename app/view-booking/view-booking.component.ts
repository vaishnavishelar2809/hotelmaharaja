import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-booking',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.css'
})
export class ViewBookingComponent {
  b:Book[]=[]
  constructor(private bServ:BookService)
  {
  
  }
    ngOnInit(): void {
      this.bServ.getAll().subscribe((data:Book[])=>{
        if(data!=null)
          {
              this.b=data
          }
      })
    }
}
