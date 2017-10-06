import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';


//Never do like this in real example, it's only for the practice of creating directives
@Directive({
  selector: '[ratingDirective]'
})
export class RatingDirective {
  @Input() allowEdit: boolean = false;
  @Input() ratingValue: number;
  @Input() minRating: number = 1;
  @Input() maxRating: number = 5;
  @Output() onChange = new EventEmitter<number>();

  color: string = 'gray';
  fillColor: string = 'yellow';

  constructor (
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    for(let i = 1; i <= this.maxRating; i++) {
      const span = this.renderer.createElement('span');

      this.renderer.setProperty(span, 'innerHTML', '&#x2605');
      this.renderer.setProperty(span, 'value', i);

      this.setColor(span, i <= this.ratingValue);
      this.renderer.appendChild(this.el.nativeElement, span);
    }
  }

  @HostListener('mouseover', ['$event']) onMouseOver(event) {
    if(!this.allowEdit) return;
    const spans = this.el.nativeElement.querySelectorAll('span');
    const value = event.target.value;

    spans.forEach((span, i) => {
      this.setColor(span, i + 1 <= value);
    })
  }

  @HostListener('mousedown', ['$event']) onMouseDown(event) {
    this.onChange.emit(event.target.value);
  }

  setColor(el, isNeedToFill: boolean) {
    if(isNeedToFill){
      this.renderer.setStyle(el, 'color', this.fillColor);
    } else {
      this.renderer.setStyle(el, 'color', this.color);
    }
  }

}
