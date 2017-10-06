import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() data: Array<any> = [];
  @Input() galleryTemplate: TemplateRef<any>;

  ngOnInit() {

  }
}
