import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dni-input',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges{


  @Input() dniType: string = 'DNI'
  dniForm: FormGroup
  
  constructor( private form: FormBuilder){
    //initialize form
    this.dniForm = this.form.group({
      dniType:[''],
      dni:['', [Validators.required, Validators.minLength(7)]]
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes?.['dniType'].currentValue);
  }

  hasErrors(controlName: string, errorType: string) {
    return this.dniForm.get(controlName)?.hasError(errorType) && this.dniForm.get(controlName)?.touched
    }
}
