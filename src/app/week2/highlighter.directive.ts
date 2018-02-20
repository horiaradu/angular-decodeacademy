import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appHighlighter]",
})
export class HighlighterDirective {
  @Input() color: string;

  constructor(private el: ElementRef) {}

  @HostListener("mouseenter")
  onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string | null) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
