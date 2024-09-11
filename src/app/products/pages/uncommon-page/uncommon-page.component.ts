import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
 //i18n Select
 public name:string ='Carlos';
 public gender :'male'|'female'='male'
 public invitationMap={
  'male':'invitarlo',
  'female':'invitarla'
 }
 changeClient():void{
this.name='melissa'
this.gender='female'
 }


 //i18nPlural
public clientsMap ={
'=0':'no tenemos ningun cliente esperando.',
'=1':'tenemos un cliente esperando.',
'other':'tenemos # clientes esperando'
}
 public clients:string[]=['Maria','Fernado','Carlos','perro']
 deleteClient():void{
  this.clients.shift(); //elimina el primer elemento
 }
//KeyValue pape
public person ={
 name:'carlos Isaac Haro Polo',
 age:24,
 address:'mi casa'
}
//ASync Pipe con  Observadores
public myObservableTimer:Observable<number>= interval(2000); // crea un observador

// si quieres con promise Nos va entregar despues de un tiempo que le indiques con setTimeout
public promiseValue: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Tenemos datos en la promesa');
  }, 3500);
});



}
