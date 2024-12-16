import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { CommonModule } from '@angular/common'; // Add this import

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { CounterModule } from './counter/counter.module';
// import { HeroesModule } from './heroes/heroes.module';

// @NgModule({
//   declarations: [
//     AppComponent,
//     CounterModule,
//   ],
//   imports: [
//     AppRoutingModule,
//     BrowserModule,
//     CommonModule,
//     CounterModule,
//     HeroesModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
