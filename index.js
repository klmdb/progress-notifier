
(function () {

    module.exports = function(){

        var priv = {
                ticks     : 0,
                numTicks  : 1,
                children  : [],
                listeners : [],
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

            publ.fireTick();
        };

        publ.addNumTicks = function(c){

            priv.numTicks += c;

            publ.fireTick();
        };

        publ.tick        = function(){

            priv.ticks++;

            publ.fireTick();
        };


        publ.addChild    = function(progressNotifier){

            var i;
            for(i=0;i<priv.children.length;i++){
                if(priv.children[i] === progressNotifier){
                    return;
                }
            }
            priv.children.push(progressNotifier);
            progressNotifier.setParent(publ);

            publ.fireTick();
        };
        publ.removeChild    = function(progressNotifier){

            var i;
            for(i=0;i<priv.children.length;i++){
                if(priv.children[i] === progressNotifier){

                    progressNotifier.unsetParent();
                    priv.children.splice(i,1);
                    break;
                }
            }

            publ.fireTick();
        };
        publ.setParent = function(progressNotifier){

            priv.parent = progressNotifier;
        };
        publ.unsetParent = function(){

            priv.parent = undefined;
        };


        publ.fireTick = function(){

            var i, p = publ.getProgress();
            for(i=0;i<priv.listeners.length;i++){
                priv.listeners[i](p);
            }

            if(priv.parent){
                priv.parent.fireTick();
            }
        };
        publ.onTick = function(f){

            var i;
            for(i=0;i<priv.listeners.length;i++){
                if(priv.listeners[i] === f){
                    return;
                }
            }
            priv.listeners.push(f);
        };
        publ.offTick = function(f){

            var i;
            for(i=0;i<priv.listeners.length;i++){
                if(priv.listeners[i] === f){
                    priv.listeners.splice(i,1);
                    return;
                }
            }
        };

        return publ;
    };

}());
