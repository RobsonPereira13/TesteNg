import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupName, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']


})
export class StepperComponent implements OnInit {


  FormGroup1: FormGroup;
  FormGroup2: FormGroup;
  FormGroup3: FormGroup;

  isEditable = true;
  isOptional=true
  isLinear = false;

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  constructor(private _formBuilder: FormBuilder) {
    this.load();
  }

  ngOnInit ()
  {
    this.FormGroup1 = this._formBuilder.group({
      validar: ['', Validators.required]
    });
    this.FormGroup2 = this._formBuilder.group({
      validar: ['', Validators.required]
    });
    this.options = this._formBuilder.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });


  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'informe um e-mail';
    }

    return this.email.hasError('email') ? 'E-mail inválido' : '';
  }
  onSubmit(form: NgForm): void {
    return;
  }
  onClick(form: NgForm): void {
    const salvar = JSON.stringify(form.value);
localStorage.setItem('teste',salvar);


  }

  load(){

    const recuperar = localStorage.getItem('teste');
    const items = JSON.parse(recuperar);
    console.log(items)
  }
}
