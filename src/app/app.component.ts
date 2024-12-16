import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola Mundo';

  //* decreaseBy(value: number):void{
  //*   this.counter -= value;
  //* }
}
