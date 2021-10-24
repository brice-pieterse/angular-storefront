import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms'

@Directive({
  selector: '[cartCardValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CardValidatorDirective,
    multi: true
  }]
})
export class CardValidatorDirective implements Validator {

  constructor() {
    
  }

  validate(control: AbstractControl): {[key: string]: any} | null {
    if (control.value){
      if (control.value.length != 16){
        return {
          'cardInvalid': true,
          'dirty': true
        }
      }
    }
    return null
  }

}