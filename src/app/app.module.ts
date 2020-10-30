import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EducationComponent } from './education/education.component';
import { ServiceComponent } from './service/service.component';
import { GitServiceService } from './git-service.service';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component:EducationComponent},
  {path: 'service', component:ServiceComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactInfoComponent,
    EducationComponent,
    ServiceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [GitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
