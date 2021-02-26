import { FormGroup } from "@angular/forms";

export class MyFormGroup<T> extends FormGroup {
    readonly value!: T;
}