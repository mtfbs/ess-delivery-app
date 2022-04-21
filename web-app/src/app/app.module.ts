import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarsComponent } from './cars/cars.component';
import { CarService } from './cars/cars.service';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionService } from './promotion/promotion.service';
import { TableComponent } from './views/table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarsComponent,
    PromotionComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MatTableModule,
    RouterModule.forRoot([
      {
        path: '',
        component: NavbarComponent
      },
      {
        path: 'cliente',
        component: CarsComponent
      },
      {
        path: 'promotion',
        component: PromotionComponent
      },
      {
        path: 'restaurante',
        component: TableComponent
      },
      {
        path: 'adm',
        component: TableComponent
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [CarService, PromotionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
