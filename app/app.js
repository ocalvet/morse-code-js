import Rx from 'rx';

export class App {
  constructor(document) {
    this.document = document;
  }

  initialize() {
    // Get a reference to the button 
    let button = this.document.getElementById('code-btn');
    
    let longClick$ = Rx.Observable.fromEvent(button, 'mousedown')
        .flatMap((e) => {
            return Rx.Observable
                .return(e)
                .delay(200)
                .takeUntil(Rx.Observable.fromEvent(button, 'mouseup'))
        });
    
    longClick$.subscribe((l) => {
        longclicked = true;
    });
    
    const values$ = Rx.Observable
      .fromEvent(button, 'mousedown')
    
  }
} 