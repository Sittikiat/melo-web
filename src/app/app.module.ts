import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { TestPipe } from "./pipes/test.pipe";

import { RestaurantService } from "./services/restaurant.service";
import { MenuService } from "./services/menu.service";
import { SearchPipe } from './pipes/search.pipe';

const appRouter: Routes = [
  { path: "", component: HomeComponent },
  { path: "restaurant", component: RestaurantComponent },
  { path: "restaurant/:id", component: RestaurantComponent },
  { path: "menu", component: MenuComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RestaurantComponent,
    MenuComponent,
    HomeComponent,
    TestPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouter),
    HttpModule,
    FormsModule
  ],
  providers: [
    RestaurantService,
    MenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
