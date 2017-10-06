import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'show-errors',
  template: `
    <ul *ngIf="shouldShow()">
      <li style="color: red" *ngFor="let error of getErrors()">
        {{error}}
      </li>
    </ul>
  `,
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent {
  @Input() private control: AbstractControlDirective | AbstractControl;

  private static readonly errorMessages = {
    'required': () => 'This field is required',
    'minlength': (params) => `The min number of characters is ${params.requiredLength}`,
    'maxlength': (params) => `The max allowed number of characters is ${params.requiredLength}`,
    'pattern': (params) => `Not pass pattern ${params}`,
    'validateForDublicate': (params) => `Wrong actors ${JSON.stringify(params)}`,
    'validateGenres': (params) => `Not pass genres ${JSON.stringify(params)}`,
    'validateAsyncDirector': (params) => `this director is wrong ${JSON.stringify(params)}`
  }

  shouldShow() {
    return this.control && this.control.errors && (this.control.dirty || this.control.touched);
  }

  getErrors() {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }
}
