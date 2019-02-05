'use strict';

System.import('app/app').then(application  => {
  let app = new application.App(window.document);
  app.initialize();
  console.log('app started')
});
