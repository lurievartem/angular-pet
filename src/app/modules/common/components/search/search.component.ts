import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl }  from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchField: FormControl;
  @Input() placeholder: string = 'Please enter search item';
  @Output() onSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(text => {
        this.onSearch.emit(text);
      });
  }
}
