import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'observable-container',
  templateUrl: './observable-container.component.html',
  styleUrls: ['./observable-container.component.css']
})
export class ObservableContainerComponent implements OnInit {
  @Input() observer: Observable<any>;
  @Input() templateName: TemplateRef<any>;

  constructor() { }

  ngOnInit() {  }
}
