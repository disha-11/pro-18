var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a6870703-0124-47f7-acff-dbe905f5014c","5ce44e39-12ac-4a66-88cf-a87a0ed6a180","33841f90-7a53-4346-b956-e51d1961959b","0477217c-65f1-4453-a1a3-5b1c9a73d23c","aaaf945a-e6c3-466d-a309-346152ed5492"],"propsByKey":{"a6870703-0124-47f7-acff-dbe905f5014c":{"name":"monkey","sourceUrl":null,"frameSize":{"x":560,"y":614},"frameCount":9,"looping":true,"frameDelay":12,"version":"n2dygIJWGApxbIvLWMPaiRVD3T49XOoJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":1680,"y":1842},"rootRelativePath":"assets/a6870703-0124-47f7-acff-dbe905f5014c.png"},"5ce44e39-12ac-4a66-88cf-a87a0ed6a180":{"name":"Banana","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png","frameSize":{"x":1080,"y":1080},"frameCount":1,"looping":true,"frameDelay":4,"version":"9alqfFpYiy3QnaLdqTDphPxrZMILEs8Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":1080,"y":1080},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/5ce44e39-12ac-4a66-88cf-a87a0ed6a180.png"},"33841f90-7a53-4346-b956-e51d1961959b":{"name":"Stone","sourceUrl":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png","frameSize":{"x":512,"y":512},"frameCount":1,"looping":true,"frameDelay":4,"version":"gFminj5o4e3MmAaIyzcctvH2ZCN.ai8w","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":512},"rootRelativePath":"assets/v3/animations/0Pmc2UypwJxUUUBBxMOOYmiSvh97BJLRo_BQZbjyEto/33841f90-7a53-4346-b956-e51d1961959b.png"},"0477217c-65f1-4453-a1a3-5b1c9a73d23c":{"name":"meadow_1","sourceUrl":null,"frameSize":{"x":800,"y":800},"frameCount":1,"looping":true,"frameDelay":12,"version":"pJf.fBBWlsv9jvuNd9WyYWLlYzMFpYAF","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":800},"rootRelativePath":"assets/0477217c-65f1-4453-a1a3-5b1c9a73d23c.png"},"aaaf945a-e6c3-466d-a309-346152ed5492":{"name":"end","sourceUrl":"assets/v3/animations/mnaGdKvU6VSRuXn66Wm4TXsd8Fc5qHXd5arfljeoi7g/aaaf945a-e6c3-466d-a309-346152ed5492.png","frameSize":{"x":416,"y":589},"frameCount":1,"looping":true,"frameDelay":4,"version":"FQKQbBoe5W3gxksk.DHikU4k7QA5nqHf","loadedFromSource":true,"saved":true,"sourceSize":{"x":416,"y":589},"rootRelativePath":"assets/v3/animations/mnaGdKvU6VSRuXn66Wm4TXsd8Fc5qHXd5arfljeoi7g/aaaf945a-e6c3-466d-a309-346152ed5492.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg=createSprite(200,200,10,10);
bg.setAnimation("meadow_1");
var monkey = createSprite(100, 320, 90, 60);
monkey.setAnimation("monkey");
monkey.scale = 0.15;
var ground = createSprite(200, 390, 400, 20);
ground.visible=false;
var BananaGroup = createGroup();
var ObstacleGroup = createGroup();
var random1 = randomNumber(80, 140);
var count = 0;
var time = 0;
var score = 0;
var gameState = "play";
ground.debug = true;
monkey.debug = true;
function draw() {
  background(255);
  drawSprites();
  if (gameState === "play") {
    time += 1/30;
    if (World.frameCount % 80 === 0 ) {
      createBanana();
      createObstacle();
      random1 = randomNumber(80, 120);
      count = 0;
    }
    if (keyDown("space") && monkey.y > 330) {
      monkey.velocityY = -10;
    }
    if (BananaGroup.isTouching(monkey)) {
      BananaGroup.destroyEach();
      score += 2;
    }
    switch(score){
      case 10:monkey.scale=0.20;
      break;
       case 20:monkey.scale=0.36;
      break;
       case 30:monkey.scale=0.48;
      break;
       case 40:monkey.scale=0.20;
      break;
      default: break;
    }
    if (ObstacleGroup.isTouching(monkey)) {
      gameState = "end1";
      monkey.scale=0.15;
    }
    
    
    
    
    
    monkey.velocityY += 0.4;
    
    
  }
  if (gameState === "end") {
     if (ObstacleGroup.isTouching(monkey)) {
    ObstacleGroup.setVelocityXEach(0);
    BananaGroup.setVelocityXEach(0);
    ground.velocityX = 0;
    textSize(30);
    text("oh no i am hungry!",130,200);
    monkey.setAnimation("end");
    
  }}
   if (gameState === "end1") {
    gameState="end";
    monkey.scale=0.15;
  
   }
  if (ground.x === 0) {
    ground.x = 200;
  }
  monkey.collide(ground);
  count += 1;
  textSize(16);
  text("Survival Time: " + Math.round(time), 250, 50);
  text("Bananas Collected: " + score, 220, 75);
   
}

function createBanana() {
  var banana = createSprite(400, randomNumber(180, 240), 1, 1);
  banana.setAnimation("Banana");
  banana.velocityX = -5;
  banana.scale = 0.05;
  banana.debug = true;
  BananaGroup.add(banana);
}
function createObstacle() {
  var rock = createSprite(400, 350, 1, 1);
  rock.setAnimation("Stone");
  rock.velocityX = -5;
  rock.scale = 0.13;
  rock.setCollider("circle", 0, 0, 180);
  rock.debug = true;
  ObstacleGroup.add(rock);
}
  

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
