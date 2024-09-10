import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
 public nameLower:string ='carlos';
 public nameUpper:string ='CARLOS';
 public fullname: string ='CarLos HAro'

 public customDate:Date = new Date(); // estas solicitado el dato actual
}
