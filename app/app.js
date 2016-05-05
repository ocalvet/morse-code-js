import Rx from 'rx';

export class App {
  constructor(document) {
    this.document = document;
  }

  initialize() {
    // Get a reference to the button 
    let button = this.document.getElementById('code-btn');
    const values$ = Rx.Observable
      .fromEvent(button, 'click')
      .subscribe(
          (event) => console.log('event ', event), 
          (error) => console.log(error)
      );
  }
}