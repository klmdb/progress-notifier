var expect            = require('chai').expect,
    ProgressNotifier  = require('../index');


describe('ProgressNotifier', function() {

	// it('constructor for progress notifierss which can be hierarchically linked.', function() {
	// 	escape('&').should.equal('&amp;');
	// });

	describe('#getNumTicks', function() {
		  it('Gets the number of ticks', function() {

				var pn = ProgressNotifier();

		    	expect( pn.getNumTicks() ).to.equal(1);
		  });
  	});
	describe('#addNumTicks', function() {
		  it('Adds a number of ticks', function() {

				var pn = ProgressNotifier();
		  		pn.addNumTicks(3);

		    	expect( pn.getNumTicks() ).to.equal(4);
		  });
  	});
	describe('#setNumTicks', function() {
		  it('Sets the number of ticks', function() {

				var pn = ProgressNotifier();
		  		pn.setNumTicks(5);

		    	expect( pn.getNumTicks() ).to.equal(5);
		  });
  	});

	describe('#getTicks', function() {
		  it('Gets tick', function() {

				var pn = ProgressNotifier();
		    	expect( pn.getTicks() ).to.equal(0);
		  });
  	});
	describe('#tick', function() {
		  it('Adds a tick', function() {

				var pn = ProgressNotifier();
		  		pn.tick();

		    	expect( pn.getTicks() ).to.equal(1);
		  });
  	});

	describe('#addChild', function() {
		  it('Adds a descendent ProgressNotifier', function() {

				var pn  = ProgressNotifier();
				var pn2 = ProgressNotifier();

		  		pn.addChild(pn2);

		    	expect( pn.getNumTicks() ).to.equal(2);
		  });
  	});
	describe('#getProgress', function() {
		  it('Gets the global progress', function() {

				var pn = ProgressNotifier();


		  		pn.setNumTicks(5);
		  		pn.tick();
		  		pn.tick();

		    	expect( pn.getProgress() ).to.equal( 2/5 );
		  });
  	});


});