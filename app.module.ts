// app.module.ts
import { NgModule } from '@angular/core'; //Decorator to define an Angular module.
import { BrowserModule } from '@angular/platform-browser'; //Module for browser-specific services and directives.
import { FormsModule } from '@angular/forms'; //Module for form-related directives and services.
import { AppComponent } from './app.component'; //The main application component
import { HomeComponent } from './home/home.component'; //Feature components.
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router'; //Module for client-side routing.
@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent, //declarations: Array of components, directives, and pipes that belong to this module.
    PortfolioComponent,
    ContactComponent
  ],
  imports: [ //Array of modules to import into this module.
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([ //Configures the router with routes for the application.
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent }, //Route path.
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'contact', component: ContactComponent }
    ])
  ],
  providers: [], //Array of services to provide for the module (empty in this case).
  bootstrap: [AppComponent] //: Component to bootstrap the application (the main entry point).
})
export class AppModule { } //Exports the AppModule class.
