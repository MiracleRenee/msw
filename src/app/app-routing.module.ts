import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { GiveComponent } from './give/give.component'
import { ContactComponent } from './contact/contact.component'
import { SuccessComponent } from './success/success.component';
import { HowComponent} from './how/how.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'success', component: SuccessComponent },
  { path: 'contact', component: ContactComponent},
  {path : 'how', component : HowComponent },

  {
    path:'**', redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

  
export class AppRoutingModule { }
