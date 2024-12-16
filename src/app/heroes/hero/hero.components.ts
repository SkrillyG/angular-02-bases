import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  imports: [CommonModule],
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  //? public realName: string = 'Tony Stark'

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = 'Spiderman';

    //* if(this.name !== 'Spiderman'){
    //*   this.name = 'Spiderman';
    //* } else {
    //*   this.name = 'ironman';
    //* }
  }

  changeAge():void{
    this.age = 25;

    //* if(this.age !== 25){
    //*   this.age = 25;
    //* } else {
    //*   this.age = 45;
    //* }
  }

  resetForm():void{
    this.name= 'ironman';
    this.age= 45;

    //? document.querySelector('h1')!.innerHTML = '<h1>Desde Amgular</h1>';
    //? document.querySelectorAll('h1')!.forEach(element => {element.innerHTML = '<h1>Desde Amgular</h1>';});


  }
}
