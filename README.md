# progress-notifier

Small hierarchical progress notifier.

## Installation

    npm install progress-notifier --save

## Usage


```javascript
    var PN = require('progress-notifier');

    var child1Progress = PN();
    var child2Progress = PN();

    var mainProgress   = PN();
    mainProgress.addChild(child1Progress);
    mainProgress.addChild(child2Progress);

    child1Progress.setNumTicks(5);
    child2Progress.setNumTicks(7);

    var reportProgressFactory = function(notifierName){
      return function(p){

        console.log(notifierName + ' : ' + (Math.round(p*100)) + ' %' );
      };
    };
    child1Progress.onTick(reportProgressFactory('child1Progress'));
    child2Progress.onTick(reportProgressFactory('child2Progress'));
    mainProgress  .onTick(reportProgressFactory('mainProgress'));

    child1Progress.tick();
    child1Progress.tick();

    child2Progress.tick();
    child2Progress.tick();
    child2Progress.tick();

    mainProgress  .tick();

```

## API

    getProgress()
    getTicks()
    getNumTicks()

    setNumTicks(n)
    addNumTicks(n)

    tick()

    addChild   (ProgressNotifier)
    removeChild(ProgressNotifier)

    onTick (f)
    offTick(f)


## Tests

    npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release