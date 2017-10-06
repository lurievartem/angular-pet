import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div>
      <h2>404: Not Found</h2>
        <p>Hey! It looks like this page doesn't exist yet.</p>
    </div>
  `
})
export class NotFoundPageComponent {}
