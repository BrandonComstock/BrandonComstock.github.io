var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:800,y:groundY},
                {type: 'sawblade',x:1400,y:groundY},
                {type: 'sawblade',x:1600,y:groundY},
                {type: 'sawblade',x:2400,y:groundY},
                {type: 'sawblade',x:2900,y:groundY},
                {type: 'sawblade',x:3400,y:groundY},
                {type: 'sawblade',x:3700,y:groundY},
                {type: 'sawblade',x:4400,y:groundY},
                
                {type: 'box', x:600, y:groundY},
                {type: 'box', x:2700, y:groundY},
                {type: 'box', x:2100, y:groundY},
                {type: 'box', x:1900, y:groundY},
                {type: 'box', x:2100, y:groundY},
                
                {type: 'enemy', x:1000, y:120},
                {type: 'enemy', x:1200, y:50},
                {type: 'enemy', x:1750, y:120},
                {type: 'enemy', x:1800, y:60},
                {type: 'enemy', x:2200, y:120},
                {type: 'enemy', x:2600, y:50},
                {type: 'enemy', x:3000, y:120},
                {type: 'enemy', x:3300, y:50},
                {type: 'enemy', x:3900, y:120},
                {type: 'enemy', x:4200, y:60},
                
                {type: 'bible', x:300, y:5},
                {type: 'bible', x:700, y:75},
                {type: 'bible', x:1000, y:5},
                {type: 'bible', x:2200, y:40},
                {type: 'bible', x:2400, y:75},
                {type: 'bible', x:2600, y:40},
                {type: 'bible', x:3100, y:40},
                {type: 'bible', x:3500, y:75},
                {type: 'bible', x:4000, y:40},
                {type: 'bible', x:4600, y:5}
            ]
            
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);
        
        var hitZoneSize, damageFromObstacle, myObstacle, obstacleImage;
        
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y) {
            hitZoneSize = 25;
            damageFromObstacle = 10;
            myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle); 
            myObstacle.velocityX = -2;
            obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }  
        
        function createBox(x, y){
            hitZoneSize = 25;
            damageFromObstacle = 10;
            myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            myObstacle.velocityX = -2;
            obstacleImage = draw.rect(50, 50, 'blue', 'black', 2);
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        
        function createEnemy(x, y){
            var enemy =  game.createGameItem('enemy',40);
            var ashtarBoot = draw.bitmap('img/ashtarboots.png');
            ashtarBoot.scaleX = .2;
            ashtarBoot.scaleY = .2;
            enemy.addChild(ashtarBoot);
            ashtarBoot.x = -55;
            ashtarBoot.y = -55;
            enemy.x = x;
            enemy.y = (groundY-y);
            enemy.velocityX = -2;
            //enemy.rotationalVelocity = 10;
            game.addGameItem(enemy);
            
            enemy.onPlayerCollision = function(){
                game.changeIntegrity(-10);
                console.log("The Enemy has hit Halle");
            };
            enemy.onProjectileCollision = function(){
                game.increaseScore(100);
                enemy.fadeOut();
                console.log("Halle has hit the enemy");
            };
        }
        
        function createBible(x, y){
            var bible = game.createGameItem('reward', 25);
            var bibleImg = draw.bitmap("img/png-bible.png");
            bibleImg.scaleX = .2;
            bibleImg.scaleY = .3;
            bible.addChild(bibleImg);
            bibleImg.x = -25;
            bibleImg.y = -35;
            bible.x = x;
            bible.y = groundY - y;
            bible.velocityX = -2;
            game.addGameItem(bible);
            bible.onPlayerCollision = function(){
                game.increaseScore(500);
                bible.shrink();
                console.log("Halle has collected a Bible");
            };
        }
        
        
        for(var i = 0; i < levelData.gameItems.length; i++){
            switch(levelData.gameItems[i].type){
                case "sawblade":
                    createSawBlade(levelData.gameItems[i]['x'], levelData.gameItems[i]['y']);
                    break;
                case "box":
                    createBox(levelData.gameItems[i]['x'], levelData.gameItems[i]['y'], levelData.gameItems[i]['w'], levelData.gameItems[i]['h']);
                    break;
                case "enemy":
                    createEnemy(levelData.gameItems[i]['x'], levelData.gameItems[i]['y']);
                    break;
                case "bible":
                    createBible(levelData.gameItems[i]['x'], levelData.gameItems[i]['y']);
                    break;
            } 
        }
        
        
        
        
    };
};
    
        
  

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}draw.bitmap('img/background.png');