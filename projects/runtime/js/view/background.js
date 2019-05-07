var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
       
        // Add any variables that will be used by render AND update here:
        var background;
        var spaceship;
        var buildings = [];
        var sheranHead = [];
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();
            
        

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            
           
            
            var backGroundFeces;
            backGroundFeces = draw.bitmap('img/background.png');
            backGroundFeces.x = 0;
            backGroundFeces.y = 0;
            backGroundFeces.scaleX = 1.18;
            backGroundFeces.scaleY = 1.17;
            background.addChild(backGroundFeces);
            
            sheranHead = draw.bitmap('img/sheranhead.png');
            sheranHead.x = 5000;
            sheranHead.y = 0;
            sheranHead.scaleX = .5;
            sheranHead.scaleY = .5;
            background.addChild(sheranHead);
            
            // TODO: 3 - Add a moon and starfield
            
         /*   var circle;
            for(var i=0;i<100;i++) {
                circle = draw.circle(5,'white','LightGray',2);
                circle.x = canvasWidth*Math.random();
                circle.y = groundY*Math.random();
                background.addChild(circle); 
        }   */
            
            /*var circDiam = 10;
            var circles = [];
            var circle, circlex, circley;
            for(var i=0;i<100;i++) {
                circles[i] = draw.circle(circDiam,'white','LightGray',2);
                circle = circles[i];
                circle.x = canvasWidth*Math.random();
                circle.y = groundY*Math.random();
                circlex = circle.x;
                circley = circle.y
                setCircPos(circlex, circley);
                background.addChild(circle);
            }
                
            function setCircPos(circX, circY){
                
                for(var j = 0; j < circles.length - 1; j++){
                    while(Math.abs(circX - circles[j].x) < (circDiam + 1)){
                        circle.x = canvasWidth * Math.random();
                        circX = circle.x;
                    } 
                    while(Math.abs(circY - circles[j].y) < (circDiam + 1)){
                        circle.y = canvasHeight * Math.random();
                        circY = circle.y;
                    }
                }
            }*/    
            spaceship = draw.bitmap('img/UFO1.png');
            spaceship.x = 100;
            spaceship.y = 25;
            spaceship.scaleX = .5;
            spaceship.scaleY = .5;
            background.addChild(spaceship); 
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
           var buildingHeight = 110;
            var building;
            for(var i=0;i<7;++i) {
            buildingHeight *= Math.floor((Math.random() * 3) + 1);
            building = draw.rect(75,buildingHeight,'LightGray','Black',1);
            building.x = 200*i;
            building.y = groundY-buildingHeight;
            background.addChild(building);
            buildings.push(building);
            buildingHeight = 110;
        } 
        
            
            // TODO 4: Part 1 - Add a tree
     
            
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            spaceship.x -= 1;
            if(spaceship.x < -200){
                   spaceship.x = canvasWidth;
            }
            
            
            // TODO 5: Part 2 - Parallax
            sheranHead.x -= 1;
            

            
            for (var j = 0; j < buildings.length; j++) {
                buildings[j].x -= 2;
                if(buildings[j].x < -100) {
                    buildings[j].x = canvasWidth;
                } 
            }

        }
        
        
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
