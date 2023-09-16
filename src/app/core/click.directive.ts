import { Directive ,ElementRef,HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appClick]'
})

export class ClickDirective {
  constructor(private el:ElementRef) {}

  @HostListener('click') changeColor(){
    let parent = this.el.nativeElement.parentElement.children
    console.log(parent)
    for(let i= 0 ; i < parent.length ; i++){
      console.log(parent[i].classList.remove("active"))
    }
    this.el.nativeElement.classList.add("active")
  }

}
