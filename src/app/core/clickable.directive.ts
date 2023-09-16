import { Directive ,ElementRef,HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appClickable]'
})
export class ClickableDirective {
  constructor(private el:ElementRef) {

  }

  @HostListener('click') changeColor(){
    let parent= this.el.nativeElement.parentElement.children
    for(let i= 0 ; i < parent.length ; i++){
      console.log(parent[i].classList.remove("active"))
    }
    this.el.nativeElement.classList.add("active")
  }
}
