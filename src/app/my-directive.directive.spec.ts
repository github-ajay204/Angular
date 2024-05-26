import { MyDirectiveDirective } from './my-directive.directive';
import { ElementRef } from '@angular/core';//added by ajay 

describe('MyDirectiveDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(null);  //added by ajay 
    const directive = new MyDirectiveDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
