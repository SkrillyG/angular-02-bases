import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.components';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    HeroComponent, // Importa el componente standalone
    ListComponent, // Importa el componente standalone
  ],
  exports: [
    HeroComponent,
    ListComponent,
  ],
})
export class HeroesModule {}



// import { NgModule } from '@angular/core';
// import { HeroComponent } from './hero/hero.components';
// import { ListComponent } from './list/list.component';
// @NgModule({
//   exports: [
//     HeroComponent,
//     ListComponent,],
//   declarations: [
//     HeroComponent,
//     ListComponent,
//   ],
// })
// export class HeroesModule { }
