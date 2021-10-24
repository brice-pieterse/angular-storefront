import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms'

@Directive({
  selector: '[cartPinValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PinValidatorDirective,
    multi: true
  }]
})
export class PinValidatorDirective implements Validator {

  constructor() {
    
  }

  validate(control: AbstractControl): {[key: string]: any} | null {
    if (control.value){
      if (control.value.length < 4 || control.value.length > 6){
        return {
          'pinInvalid': true,
          'dirty': true
        }
      }
    }
    return null
  }

}