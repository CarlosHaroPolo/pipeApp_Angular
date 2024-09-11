import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'toggleCase'  // este es el indicado para llamarlo
})
export class ToggleCasePipe implements PipeTransform{
  //implementas el trasform
  //los argumnetos se guardan de esta manero ...argrs:any[]


  /*
  transform(value: string,...argrs:any[]):string {
return value.toUpperCase();
  }
*/

//o puedes hacer de esta forma
transform(value: string, toUpper:boolean= false):string {
  console.log({value,toUpper})
  return (toUpper)? value.toUpperCase():value.toLowerCase();
    }



}
