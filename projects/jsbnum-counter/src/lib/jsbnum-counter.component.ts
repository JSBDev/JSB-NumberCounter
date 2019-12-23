import { Component, ElementRef, ViewChild, Input, AfterViewInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'JSBNumCounter',
  template: `
  <div class="numCounter" #numCounter>
  <b></b><span>,</span><b></b><b></b><b></b><span>,</span><b></b><b></b><b></b>
</div>
  `,
  styles: [`
  
  .numCounter {
    display: inline-block;
    height: 70px;
    line-height: 70px;
    color: #f1f1f1;
    text-shadow: 0 0 2px #fff;
    font-weight: bold;
    white-space: normal;
    font-size: 46.6666666667px;
 }
  .numCounter > b {
    display: inline-block;
    width: 50px;
    height: 100%;
    margin: 0 0.1em;
    border-radius: 8px;
    background: #191919;
    text-align: center;
    box-shadow: 1px 1px rgba(255, 255, 255, 0.05), 1px 1px 5px #111 inset;
    overflow: hidden;
 }
  .numCounter > b:before {
    content: ' 0 1 2 3 4 5 6 7 8 9 ';
    display: block;
    word-break: break-all;
    word-break: break-word;
    transition: 0.4s cubic-bezier(0.12, 0.78, 0.52, 1.2);
 }
  .numCounter > b.a1:before {
    margin-top: -70px;
 }
  .numCounter > b.a2:before {
    margin-top: -140px;
 }
  .numCounter > b.a3:before {
    margin-top: -210px;
 }
  .numCounter > b.a4:before {
    margin-top: -280px;
 }
  .numCounter > b.a5:before {
    margin-top: -350px;
 }
  .numCounter > b.a6:before {
    margin-top: -420px;
 }
  .numCounter > b.a7:before {
    margin-top: -490px;
 }
  .numCounter > b.a8:before {
    margin-top: -560px;
 }
  .numCounter > b.a9:before {
    margin-top: -630px;
 }
  .numCounter > span {
    display: inline-block;
    font-size: 1.1em;
    opacity: 0.4;
    line-height: 1.8;
    padding: 0;
    vertical-align: top;
    text-shadow: none;
 }
  .numCounter {
    overflow: hidden;
    position: absolute;
    width: 480px;
    height: 70px;
    margin: auto;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0.5em 0.1em;
    text-align: center;
    background: #222;
    background: linear-gradient(to bottom, #555 1%, #333 4%, #1a1a1a 98%, #000 100%);
    border-radius: 12px;
    box-shadow: 0 5px 12px #111, 0 0 8px 0 rgba(255, 255, 255, 0.1) inset;
 }
  .numCounter:before {
    content: "";
    position: absolute;
    left: -10%;
    right: -10%;
    top: -50%;
    bottom: 50%;
    background: #fff;
    opacity: 0.04;
    z-index: 1;
    transform: rotatez(-5deg);
 }
   
  `]
})
export class JSBNumCounterComponent implements AfterViewInit {
  @ViewChild('numCounter', { static: false }) numCounter: ElementRef<HTMLElement>
  @Input('NumberData') NumberData: string = '0000000';

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    if ('NumberData' in changes) {
        this.Data = changes.NumberData.currentValue;
    }
  }

  ngAfterViewInit(): void {
    this.setCount();
  }

  /**
   * Update Counter Values
   */
  private set Data(v: any) {
    if (v) {
      this.NumberData = v.toString().padStart(7, '0').toString();
      this.setCount();
    }
  }

  private setCount() {
    if (this.numCounter && this.NumberData) {
      const boldTags: NodeListOf<HTMLElement> = this.numCounter.nativeElement.querySelectorAll('b');
      boldTags.forEach((el, i) => {
        let num: number = parseInt(this.NumberData.split('')[i]);
        let _class = `a${num}`;
        if (!el.className.includes(_class))
          el.setAttribute('class', _class)
      });
    }
  }

}
