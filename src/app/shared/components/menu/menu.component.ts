import { Component, OnInit } from '@angular/core'; // Importa OnInit
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit { // Implementa OnInit
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipe de Angular',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink:'/'
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink:'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-compass',
            routerLink:'uncommon'
          }
        ],
      },
      {
        label: 'Pipes perzonalizados',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
  }
}
