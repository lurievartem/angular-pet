import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Button } from './button.class';

@Component({
  selector: 'button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
  public selectedButton: number;
  @Input() buttons: Array<Button>;
  @Output() onSelectButton = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  clickHandler(id){
    this.onSelectButton.emit(id);
    this.selectedButton = id;
  }

}
