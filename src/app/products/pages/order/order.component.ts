import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Color, Hero } from '../../interface/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  //Dicho true de toggleCase vamos a cambiar de manera dinamica
public orderBy:keyof Hero | undefined|''=''
  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'batman', canFly: false, color: Color.black },
    { name: 'dareDevil', canFly: false, color: Color.red },
    { name: 'robin', canFly: false, color: Color.blue },
    { name: 'green lanter', canFly: false, color: Color.green },
  ];

   isUpperCase: boolean = false;
  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase;
  }
  changeOrder (value: keyof Hero){
  this.orderBy = value;
  }

}
