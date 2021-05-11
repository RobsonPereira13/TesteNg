import { Component, Input, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import {FormBuilder, FormControl, FormGroup, FormGroupName, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.css'],
  viewProviders: [{
    provide: ControlContainer,
    useFactory: (container: ControlContainer) => container,
    deps: [[new SkipSelf(), ControlContainer]],
  }]
})
export class FormacaoComponent {

  @Input() modelGroupName: string;
}
