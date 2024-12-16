import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  imports: [
    CommonModule,
    CounterComponent // Import the standalone component
  ],
  exports: [
    CounterComponent // Export the standalone component
  ]
})
export class CounterModule { }

// import { NgModule } from '@angular/core';
// import { CounterComponent } from './components/counter/counter.component';

// @NgModule({
//   exports: [
//     CounterComponent
//   ],
//   declarations: [
//     CounterComponent
//   ],
// })
// export class CounterModule { }
