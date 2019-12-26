import { Component, ElementRef, ViewChild, Input, AfterViewInit, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'JSBNumCounter',
  template: '<div class="nC" #nC><b></b><span>,</span><b></b><b></b><b></b><span>,</span><b></b><b></b><b></b></div>',
  styles: [`.nC{display:inline-block;height:70px;line-height:70px;color:#f1f1f1;text-shadow:0 0 2px #fff;font-weight:700;white-space:normal;font-size:46.6666666667px}.nC>b{display:inline-block;width:50px;height:100%;margin:0 .1em;border-radius:8px;background:#191919;text-align:center;box-shadow:1px 1px rgba(255,255,255,.05),1px 1px 5px #111 inset;overflow:hidden}.nC>b:before{content:' 0 1 2 3 4 5 6 7 8 9 ';display:block;word-break:break-all;word-break:break-word;transition:0.4s cubic-bezier(.12,.78,.52,1.2)}.nC>.a1:before{margin-top:-70px}.nC>.a2:before{margin-top:-140px}.nC>.a3:before{margin-top:-210px}.nC>.a4:before{margin-top:-280px}.nC>.a5:before{margin-top:-350px}.nC>.a6:before{margin-top:-420px}.nC>.a7:before{margin-top:-490px}.nC>.a8:before{margin-top:-560px}.nC>.a9:before{margin-top:-630px}.nC>span{display:inline-block;font-size:1.1em;opacity:.4;line-height:1.8;padding:0;vertical-align:top;text-shadow:none}.nC{overflow:hidden;width:480px;height:70px;margin:auto;left:0;top:0;right:0;bottom:0;padding:.5em .1em;text-align:center;background:#222;background:linear-gradient(to bottom,#555 1%,#333 4%,#1a1a1a 98%,#000 100%);border-radius:12px;box-shadow:0 5px 12px #111,0 0 8px 0 rgba(255,255,255,.1) inset}.nC:before{content:"";left:-10%;right:-10%;top:-50%;bottom:50%;background:#fff;opacity:.04;z-index:1;transform:rotatez(-5deg)}`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JSBNumCounterComponent implements AfterViewInit {
  @ViewChild('nC', { static: false }) numCtr: ElementRef<HTMLElement>
  @Input('NumberData') _Data: string = '0000000';

  constructor() {
    if (!String.prototype.padStart) {
      String.prototype.padStart = function padStart(targetLength, padString) {
        targetLength = targetLength >> 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
          return String(this);
        }
        else {
          targetLength = targetLength - this.length;
          if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length);
          }
          return padString.slice(0, targetLength) + String(this);
        }
      };
    }
  }


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
      this._Data = v.toString().padStart(7, '0').toString();
      this.setCount();
    }
  }

  private setCount() {
    if (this.numCtr && this._Data) {
      const boldTags: NodeListOf<HTMLElement> = this.numCtr.nativeElement.querySelectorAll('b');
      boldTags.forEach((el, i) => {
        let num: number = parseInt(this._Data.split('')[i]);
        let _class = `a${num}`;
        if (!el.className.includes(_class))
          el.setAttribute('class', _class)
      });
    }
  }

}
