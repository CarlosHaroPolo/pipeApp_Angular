import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'canFly'  // este es el indicado para llamarlo
})
export class canFlyCasePipe implements PipeTransform{

transform(value: boolean):string {
 return (value)? 'Si vuelas ':'No vuelas';


}


}
