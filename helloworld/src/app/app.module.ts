import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AffichehelloService } from './affichehello.service';
import {TabMenuModule} from 'primeng/tabmenu';
import {DataTableModule} from 'primeng/datatable';
import {MenuModule} from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { SocieteComponent } from './societe/societe.component';
import { SalarierComponent } from './salarier/salarier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SocieteComponent,
    SalarierComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTableModule,
    TabMenuModule,
    MenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule
   ],
  providers: [AffichehelloService],
  bootstrap: [AppComponent]
})
export class AppModule {}
