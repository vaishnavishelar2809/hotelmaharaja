import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-locate',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './locate.component.html',
  styleUrl: './locate.component.css'
})
export class LocateComponent {

}
