import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  menuType = "guest"
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        var em = localStorage.getItem("email")
        if(em!=null)
          {
            this.menuType="user"
          }
          else
          {
            var aem = localStorage.getItem("aemail")
            if(aem!=null)
              {
                this.menuType="admin"
              }
              else
              this.menuType="guest"
          }
          
      }
    })
  }
  slogout()
  {
    localStorage.removeItem('email')
    this.router.navigate(['/'])
  }
  alogout()
  {
    localStorage.removeItem('aemail')
    this.router.navigate(['/'])
  }
}


