import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms'

@Directive({
  selector: '[cartEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator {

  constructor() {
    
  }

  validate(control: AbstractControl): {[key: string]: any} | null {
    if (control.value){
        const email = ((control.value as unknown) as string).slice(-10)
        if (email === '@gmail.com'){
            console.log(email)
            return null
        }
        return {
          'notGmail': true,
          'dirty': true
        }
    }
    return null
  }

}