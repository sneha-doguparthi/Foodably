import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRandomBackground]'
})
export class RandomBackgroundDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const backgrounds = ['red-back', 'yellow-back', 'green-back', 'purple-back'];
    const index = Math.floor(Math.random() * 4);
    this.renderer.addClass(this.elRef.nativeElement, backgrounds[index]);
  }
}
