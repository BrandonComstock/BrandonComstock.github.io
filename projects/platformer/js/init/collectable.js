(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let collectable = window.opspark.collectable;
    
    let type = {
        db: {assetKey: 'db', points: 10},
        max: {assetKey: 'max', points: 20},
        steve: {assetKey: 'steve', points: 30},
        grace: {assetKey: 'grace', points: 40},
        kennedi: {assetKey: 'kennedi', points: 50}
    };
    
    /**
     * init: Initialize all collectables.
     * 
     * GOAL: Add as many collectables as necessary to make your level challenging.
     * 
     * Use the collectable.create() method to create collectables for the level.
     * See the type Object, above, for the types of collectables and their point values.
     * 
     * collectable.create() takes these arguments:
     *      
     *      collectable.create(type, x, y, gravity, bounce);
     * 
     *      type: The type of the collectable, use the type Object above.
     *      x: The x coordineate for the collectable.
     *      y: The y coordineate for the collectable.
     *      gravity: OPTIONAL The gravitational pull on the collectable.
     *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
     */ 
    collectable.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        collectable.create(type.steve, 300, 170, 6, 0.7);
        collectable.create(type.db, 370, 200, 7, 0.6);
        collectable.create(type.kennedi, 330, 320, 9, 0.6);
        collectable.create(type.grace, 100, 300, 11, 0.2);
        collectable.create(type.max, 95, 480, 13, 3);
        collectable.create(type.max, 100, 475, .20, 1.2);
        collectable.create(type.max, 105, 450, 3, 3);
        collectable.create(type.max, 85, 470, .9, 5);
        collectable.create(type.max, 80, 65, .13, 1);
        collectable.create(type.max, 200, 340, .20, 2);
        collectable.create(type.max, 390, 306, 3, 0.9);
        collectable.create(type.max, 350, 40, .13, 0.5);
        collectable.create(type.max, 400, 310, 3, 0.6);
        collectable.create(type.max, 110, 40, 2, 0.5);
        collectable.create(type.db, 200, 67, 1, 0.9);
        
        
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);