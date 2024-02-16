import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit, OnDestroy{
  
  contactForm: FormGroup
  dniType: string = 'DNI'
  showDNI: boolean = false
/* 1-  activeUser: any = {
    name: 'Pepe',
    surname: 'Martinez',
    dni: '14448984'
  } */

  constructor( private form: FormBuilder){
    //initialize form
    this.contactForm = this.form.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      surname:[''],
      dniType:[''],
      email:['', [Validators.required, Validators.email]]
    })
  }  

  ngOnInit(): void {
    this.contactForm.get('dniType')?.valueChanges.subscribe(value => {
      this.dniType = value;
      this.showDNI = value != ''
    })

    /* 1- this.contactForm.get('surname')?.setValidators([Validators.required])
    // It accepts an object with control names as keys, and does its best to match the values to the correct controls in the group.
    this.contactForm.patchValue({
      name: this.activeUser.name,
      surname: this.activeUser.surname,
      dni: this.activeUser.dni,
    })
    this.contactForm.get('name')?.disable()
    this.contactForm.get('surname')?.disable()
    this.contactForm.get('dni')?.disable() */

  }

  ngOnDestroy(): void {
    console.log('Destroy component')
  }

  

hasErrors(controlName: string, errorType: string) {
  return this.contactForm.get(controlName)?.hasError(errorType) && this.contactForm.get(controlName)?.touched
}


  enviar(){
    console.log(this.contactForm)
  }
}
