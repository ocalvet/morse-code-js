import Rx from 'rx';

export class App {
  constructor(document) {
    this.document = document;
  }

  initialize() {
    // Get a reference to the button 
    let button = this.document.getElementById('code-btn');
    
    let longClick$ =  Rx.Observable
                        .fromEvent(button, 'mousedown')
                        .flatMap((e) => {
                            return Rx.Observable
                                .return(e)
                                .delay(500)
                                .takeUntil(Rx.Observable.fromEvent(button, 'mouseup'))
                        });
    
    longClick$.subscribe((l) => {
        console.log('longclick happened');
    });
    
    let normalClick = Rx.Observable
                        .fromEvent(button, 'mousedown')
                        .skipUntil(Rx.Observable.fromEvent(button, 'mouseup'))
                        .subscribe((e) => {
                            console.log('Short click happened', e);
                        });
    
  }
} 