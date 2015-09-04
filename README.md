progress-notifier
=========

Small progress notifier. Set numTicks

## Installation

  npm install progress-notifier --save

## Usage

  var PN = require('progress-notifier');


  var child1Progress = PN();
  var child2Progress = PN();

  child1Progress.setNumTicks(5);
  child2Progress.setNumTicks(7);

  
  var mainProgress   = PN();
  mainProgress.addChild(child1Progress);
  mainProgress.addChild(child2Progress);




  child1Progress.tick();
  child1Progress.tick();

  child2Progress.tick();
  child2Progress.tick();
  child2Progress.tick();

  console.log('child1Progress = ', child1Progress.getProgress() );
  console.log('child2Progress = ', child2Progress.getProgress() );
  console.log('mainProgress   = ', mainProgress  .getProgress() );
  

## Tests

  npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release