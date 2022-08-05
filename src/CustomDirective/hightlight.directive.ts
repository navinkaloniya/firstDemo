import{Directive, ElementRef, HostBinding, Input} from '@angular/core'


@Directive({
    selector:'[HighLight]'
})
export class HighLightDirective {
    @Input() foreColor:string="";
    @Input() backgroundColor:string="";

    @HostBinding('style.background-color') bgColor:string='';
    @HostBinding('style.color') color:string='';
    
    // private eleref:ElementRef=""; 
    // constructor(eleref:ElementRef){
    //     this.eleref= eleref;
    // }

//   constructor(private eleRef:ElementRef) {    
//   }

// ngOnInit() {
//     this.eleRef.nativeElement.style.backgroundColor="green";
//     this.eleRef.nativeElement.style.color="white";
//   }

  ngOnInit() {
    // this.eleRef.nativeElement.style.backgroundColor="green";
    // this.eleRef.nativeElement.style.color="white";

    this.bgColor=this.backgroundColor;
    this.color=this.foreColor;
  }
}