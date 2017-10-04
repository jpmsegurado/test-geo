import { Component } from '@angular/core';

/**
 * Generated class for the ProviderFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'provider-form',
  templateUrl: 'provider-form.html'
})
export class ProviderFormComponent {

  text: string;

  constructor() {
    console.log('Hello ProviderFormComponent Component');
    this.text = 'Hello World';
  }

}
