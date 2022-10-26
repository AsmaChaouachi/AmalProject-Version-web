import { FooterComponent } from './backoffice/footer/footer.component';
import { DashbordComponent } from './backoffice/dashbord/dashbord.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarADMINComponent } from './backoffice/navbar-admin/navbar-admin.component';
import { NavbarUSERComponent } from './frontoffice/navbar-user/navbar-user.component';

import { SidebarADMINComponent } from './backoffice/sidebar-admin/sidebar-admin.component';
import { ContentComponent } from './backoffice/content/content.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AmalComponent } from './frontoffice/amal/amal.component';
import { SidebarUSERComponent } from './frontoffice/sidebar-user/sidebar-user.component';
import { ChartesComponent } from './backoffice/chartes/chartes.component';
import { FooterPlateformeComponent } from './frontoffice/footer-plateforme/footer-plateforme.component';
import { ContentPlateformeComponent } from './frontoffice/content-plateforme/content-plateforme.component';



@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    NavbarADMINComponent,
    NavbarUSERComponent,
    SidebarADMINComponent,
    ContentComponent,
    AmalComponent,
    SidebarUSERComponent,
   FooterComponent,
   ChartesComponent,
   FooterPlateformeComponent,
   ContentComponent,
   ContentPlateformeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
