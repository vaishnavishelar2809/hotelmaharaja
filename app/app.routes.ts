import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ViewRegisterComponent } from './view-register/view-register.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookComponent } from './book/book.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { LocateComponent } from './locate/locate.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {'path':'',component:HomeComponent},
    {'path':'about',component:AboutComponent},
    {'path':'contact',component:ContactComponent},
    {'path':'login',component:LoginComponent},
    {'path':'register',component:RegisterComponent},
    {'path':'service',component:ServiceComponent},
    {'path':'admin-login',component:AdminLoginComponent},
    {'path':'view-register',component:ViewRegisterComponent},
    {'path':'view-feedback',component:ViewFeedbackComponent},
    {'path':'book',component:BookComponent},
    {'path':'view-booking',component:ViewBookingComponent},
    {'path':'footer',component:FooterComponent},
    {'path':'locate',component:LocateComponent},

    ];
