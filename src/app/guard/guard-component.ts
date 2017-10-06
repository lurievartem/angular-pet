import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'guard-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <h2>Guard page</h2>
        <p>works on GuardService function canActivate</p>
    </div>
  `
})
export class GuardPageComponent {}
