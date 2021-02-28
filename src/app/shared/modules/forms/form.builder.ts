import { Injectable } from "@angular/core";
import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormBuilder, ValidationErrors, ValidatorFn } from "@angular/forms";
import { MyFormGroup } from "./form.group";

type Validator = (control: AbstractControl) => ValidationErrors | null;
type ControlValueType = string | number | null;
type ControlConfig = [ControlValueType] | [ControlValueType, Validator | Validator[]];

@Injectable()
export class MyFormBuilder<T = any> extends FormBuilder {
  
  group(controlsConfig: {[key in keyof T]: ControlConfig},
      options?: AbstractControlOptions): MyFormGroup<T> {
    return super.group(controlsConfig, options);
  }  

}