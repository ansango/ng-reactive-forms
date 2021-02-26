import { Injectable } from "@angular/core";
import { AbstractControl, AbstractControlOptions, FormBuilder, ValidationErrors } from "@angular/forms";
import { MyFormGroup } from "./form.group";

type Validator = (control: AbstractControl) => ValidationErrors | null;
type ControlValueType = string | number;
type ControlConfig = [ControlValueType] | [ControlValueType, Validator | Validator[]];

@Injectable()
export class MyFormBuilder<T = any> extends FormBuilder {
  
  group(controlsConfig: {[key in keyof T]: ControlConfig},
      options?: AbstractControlOptions | null): MyFormGroup<T> {
    return super.group(controlsConfig);
  }  

}