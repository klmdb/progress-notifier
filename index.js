
(function () {

    module.exports = function(){

        var priv = {
                ticks    : 0,
                numTicks : 1,
                children : [],
            },
            publ = {};

        publ.getProgress = function(){

            return publ.getTicks() / publ.getNumTicks();
        };

        publ.getTicks    = function(){

            var i,
                child,
                ticks = priv.ticks;

            for(i=0;i<priv.children.length;i++){

                child  = priv.children[i];
                ticks += child.getTicks();
                
            }

            return ticks;
        };

        publ.getNumTicks = function(){

            var i,
                child,
                numTicks = priv.numTicks;

            for(i=0;i<priv.children.length;i++){

                child     = priv.children[i];
                numTicks += child.getNumTicks();
                
            }

            return numTicks;
        };

        publ.setNumTicks = function(numTicks){

            priv.numTicks = numTicks;
        };

        publ.addNumTicks = function(c){

            priv.numTicks += c;
        };

        publ.tick        = function(){

            priv.ticks++;
        };

        publ.addChild    = function(progressNotifier){

            priv.children.push(progressNotifier);
        };

        return publ;
    };

}());