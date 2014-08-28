/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         
         //load Greensock
         yepnope(
         {
         	nope:[
         	//'js/greensock/minified/plugins/ThrowPropsPlugin.min.js',
          'js/greensock/minified/plugins/TextPlugin.min.js',
          'js/greensock/minified/plugins/ScrambleTextPlugin.min.js'
         
         	], 
         	complete: loadJSON 
         
         }
         )
         //accessible vars
	     var body, stage, stageWidth, stageHeight, stageParent, isDevice, interactionUp, interactionDown, interactionOut, interactionOver, interactionMove;
       var serverPrizeID, jsonPrizes, jsonData, frame, rotationStep, faceWidth, faceHeight, reelsArray, maxFaces, arm, reelContainer, nudgeBtn0, nudgeBtn1, nudgeBtn2, faceContainer0, faceContainer1, faceContainer2, nullObject,
       reel0, reel1, reel2, creditScore, spinCount, numReels,faceSymbolsArray, imagePath, willWin, message0, message1, message2, message3, message4,
       message5, message6, message7;
	       
        function getActivePrizes(){

          $.ajax({
            type: 'GET', 
            url: '/prize', 
            dataType: "json",
            success: function(data){

              jsonPrizes = data.json;
              console.log("Successfully loaded! jsonPrizes :" + jsonPrizes[0].image + ' id:' + jsonPrizes[0].id);
              init();
            }, 
            error:function(e){

              alert('HTTP GET load error')
            }
          });
        };

        function decrementPrize(id){

          $.ajax({
            type: 'GET', 
            url: '/prize/' + id, 
            dataType: "json",
            success: function(data){
              console.log("Successfully loaded! jsonPrizes :" + data.json.image + ' id:' + data.json.id + ' active:' + data.json.active);
            }, 
            error:function(e){

              alert('HTTP GET load error')
            }
          });
        };

        function loadJSON(){

          $.ajax({
            dataType: "json",
            url: 'data.json',
            success: function(data){

              jsonData = data;

              getActivePrizes();

            }, 
            error:function(e){

              alert('JSON load error')
            }
          });
        };


        function init (){


          //reference to the stage
          body = $("body");
          stage = $("#Stage");

          //ref to stage's dimensions 
         	stageWidth = stage.width();
         	stageHeight = stage.height();

          //ref to all the stage graphics
          allReels = sym.$('allReels');
          reel0 = sym.$('reel0');
          reel1 = sym.$('reel1');
          reel2 = sym.$('reel2');
          nudgeBtn0 = sym.$('nudgeBtn0');
          nudgeBtn1 = sym.$('nudgeBtn1');
          nudgeBtn2 = sym.$('nudgeBtn2');
          creditScoreText = sym.$('creditScoreText');
          spinCountText = sym.$('spinCountText');
          lastWinText = sym.$('lastWinText');
          frame = sym.$('frame');
          arm = sym.$('arm');          
          resultText = sym.$('resultText');
          resultShadowText = sym.$('resultShadowText');
          faceContainer0 = sym.$('faceContainer0');
          faceContainer1 = sym.$('faceContainer1');
          faceContainer2 = sym.$('faceContainer2');
          reelContainer = sym.$('reelContainer');

          //array of reels and nudge buttons
          reelsArray = [reel0]; //yc [reel0, reel1, reel2];
          nudgeBtnsArray = []; //yc [nudgeBtn0, nudgeBtn1, nudgeBtn2];

          //static values - don't change these
          numReels = 1; //yc 3
          fullRotation = 360;


//**************************************************vv EDIT THE VALUES BELOW IN THE data.json FILE vv****************************************************************          

          //path to you images in the JSON file
          imagePath = jsonData.imagePath;

          //set the messages - edit these in the JSON file
          message0 = jsonData.message0;
          message1 = jsonData.message1;
          message2 = jsonData.message2;
          message3 = jsonData.message3;
          message4 = jsonData.message4;
          message5 = jsonData.message5;
          message6 = jsonData.message6;
          message7 = jsonData.message7;

          //the slot image and the win value it represents (in the JSON file)
          //if you want to add new slot graphics, create the a PNG and call it, say, mouse.png - then add it here without the .png
          //To put it another way, these all represent names of images without the file extension
          //Feel free to change the order and add/remove in the JSON file!
          imageObjectsArray = jsonPrizes;

          //number of spins a player is allowed
          initialSpinCount = jsonData.initialSpinCount;

          //the width of the slot image - change this to match your slot images' width (in the JSON)
          faceWidth = jsonData.faceWidth;

          //the height of the slot image - change this to match your slot images' height (in the JSON)
          faceHeight = jsonData.faceHeight;

          //a maximum dictated by the number of different slot images you have in the JSON file
          maxFaces = imageObjectsArray.length;

          //this can be any number above maxFaces - the higher the number, the less repetitive it will look graphically, the more processing is required.
          //edit in the JSON file
          numFaces = imageObjectsArray.length;// jsonData.numFaces;


//**************************************************^^ EDIT THE VALUES ABOVE IN THE data.json FILE ^^****************************************************************          

          //works out the 3D rotationX step
          rotationStep = fullRotation/numFaces;

          //prevent text fields being selected on the stage
          TweenMax.set(body, {
            userSelect:'none'
          })          

          //an invisible DIV that controls the reels
          nullObject = document.createElement('div');

          //add it to the stage
          stage[0].appendChild(nullObject);


          //some input interaction detection - if it's a device use touch input
          isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));
          isAndroid = (/android/i.test(navigator.userAgent.toLowerCase()));
      
          if(isDevice) {
      
            interactionUp = "touchend";
            interactionDown = "touchstart";
            interactionOut = interactionUp;
            interactionOver = interactionDown;
            interactionMove = 'touchmove';
      
          } else {
      
            interactionUp = "mouseup";
            interactionDown = "mousedown";
            interactionOut = "mouseout";
            interactionOver = "mouseover";
            interactionMove = 'mousemove';
      
          };


          //set the stage's perspective and perspectiveOrigin - 
          TweenMax.set(stage, {
            perspective:getPerspective(),
            perspectiveOrigin:'40% 50%'            
          });

          //initialise the nullObject
          TweenMax.set(nullObject, {
            position:'absolute',
            x:0
          });


          TweenMax.set(reelsArray, {
            position:'absolute',
            scale:1,
            z:-getZOrigin()
          });

          //ensure 3D is preserved on all stage objects
          TweenMax.set([ reel0, reelContainer,  faceContainer0], { //yc                      
            transformStyle:'preserve-3d'
          });

          //var for the arm Draggabe instance
          armDragger = Draggable.create(nullObject, {

            type:'y',
            trigger:arm,
            onDrag:armDrag,
            onDragEnd:armDragEnd,
            dragResistance:0.7
          })

          //reset everything, create the reels and begin!
          resetAll();
          createReels();

		}

    function resetAll(){

      //reset arrays
      reelsFacesArray = [];
      faceSymbolsArray = [];

      //reset scores and spins
      creditScore = 0;
      spinCount = initialSpinCount;
      //updateScore(0);

      //update displays with reset scores and spins
      //updateSpinCount();

      //hide all buttons
      hideNudgeButtons();

      //remove all the images in the reels
      faceContainer0.empty();
      faceContainer1.empty();
      faceContainer2.empty();

      //set a message
      announceMessage(message1);

    }

    function updateScore(prize){

      //add what you won to the current score
/*      creditScore += latestPoints;*/
      
      var display;

      //make it more gamey by adding zeros at the start
/*      if(creditScore < 10){

        display = '0000';

      } else if(creditScore > 9 && creditScore < 100){

        display = '000';

      } else if(creditScore > 99 && creditScore < 1000){

        display = '00';

      }else if(creditScore > 999 && creditScore < 10000){

        display = '0';

      } else {

        display = '';
      }*/

      //make the final display score
      display = prize;

      //animate the display score
      TweenMax.to(creditScoreText, 1, {
        scrambleText:{value:display, chars:"$", revealDelay:0.5, speed:0.3},
        ease:Linear.easeNone
      });

      //update the lasyWin display
      lastWinText.html(latestPoints);

    }

    function createReels(){

      //create the reels with images  
      for(var q = 0; q < numReels; q++){

        //ref to faceContainer
        var container = sym.$('faceContainer' + q);
        serverPrizeID = [];

        //create an array for each reel
        for (var a=[], t=0;t<numFaces;++t) {
          a[t]=t;
        }//end for a

          //shuffle the reel array of numbers
          a = shuffle(a);
          serverPrizeID = a;

          //add to a new array
          reelsFacesArray.push(a);
          console.log("populating...");
          //loop through and normalise any numbers higher than maxFaces
          for(var i = 0; i < numFaces; i++){

            var faceId = (a[i] > maxFaces-1) ? a[i]%maxFaces : a[i];

            //pull out the generic FaceSymbol and add it to one of the faceContainers
            var faceSym = sym.createChildSymbol('FaceSymbol', container);

            //ref to its element
            var faceElement = faceSym.getSymbolElement();

            //ref to the empty image inside
            var bgImage = faceSym.$('bgImage');

            //set the empty image's source with an image
            bgImage.attr('src', imagePath + imageObjectsArray[faceId].image + '.png');
            serverPrizeID[faceId]=imageObjectsArray[faceId].id;

            console.log("image" + imageObjectsArray[faceId].image + " id:" + imageObjectsArray[faceId].id);

            //set its faceId
            faceElement[0].faceId = faceId;

            //position the image in 3D space around the reel
            TweenMax.set(faceElement, {
              position:'absolute',
              rotationX:rotationStep * i,
              z:getZOrigin(),
              transformOrigin:'50% 50% -' + getZOrigin() + 'px',
              backfaceVisibility:'hidden'
            });

          }//end for i
      }//end for q


      //initial animation at the start
      TweenMax.staggerFrom(reelsArray, 0.6, {
        alpha:0,
        //repeat:1,
        //yoyo:true//,
        ease:Power2.easeIn
      }, 0.2)


    }


    function spin(faceId){

      //disable the arm
      armDragger[0].disable();

      //set and sisplay the display message
      var resultStr = message0;
      announceMessage(message0);

      //empty destination array for the reels
      var destArray = [];

      //a destination var
      var dest;

      //choose a random destination if faceId is not defined
      var numToFind = (faceId === undefined) ? Math.round(Math.random() * 10000) : faceId;

      //loop through and create destinations
      for(var i = 0; i < reelsFacesArray.length; i++){

        //works out if faceId has been passed in - if so it'll produce a win
        if(faceId){

          //find the chosen destination id in reelsFacesArray
          dest = $.inArray( numToFind, reelsFacesArray[i] );

          //push it in
          destArray.push(dest);
         
        } else{

          //this creates a random destination
          dest = Math.round(Math.random() * 360);
          //and pushes thse into the array
          for(var i = 0; i < reelsFacesArray.length; i++){

            destArray.push(dest);


          }

        }

      }


      //create a TimelineMax to hold all 3 reel spins (tweens)
      var spinTimeline = new TimelineMax({paused:true, ease:Back.easeOut});


      for(var i = 0; i < reelsArray.length; i++){

        //gets the current rotationX of the reel
        var currRotationX = reelsArray[i][0]._gsTransform.rotationX;

        //sets its destination based on the destArray
        var destRotationX = (destArray[i] * -rotationStep);

        //how far it will spin from its current position
        var absoluteDiff = Math.abs(destRotationX - currRotationX);
        var actualDiff = destRotationX - currRotationX;

        //fixes a bug if the reel's current position is close to the destination - otherwise it spins VERY slowly (and sometimes only a few degrees)
        if(actualDiff < 360){

            destRotationX -= (fullRotation * 2);
        } 

        //if they're already on, say, a bell and you choose a bell...
        if(actualDiff === fullRotation){

            destRotationX += fullRotation;
        }

        //create the reel spin witha slight Back ease
        var spinTween = TweenMax.to(reelsArray[i], (i + 2), {
          rotationX: destRotationX + '_ccw',
          ease:Back.easeOut.config(0.1)
        })

        //add the tween at position 0 in the TimelineMax
        spinTimeline.add(spinTween, 0);

      }

      //set the onComplete event for the TimelineMax
      spinTimeline.vars.onComplete = spinComplete;

      //it's not a nudge spin so send in nudge:false
      spinTimeline.vars.onCompleteParams = [{nudge:false}];

      //sets the speed of the entire spin - higher values mean shorter spins (0.5 is half speed and 2 is twice speed)
      spinTimeline.timeScale(2);

      //play the spin!
      spinTimeline.play();

    }

    function spinComplete(obj){


      //get a value based on each reel's landing position
      var reel0Pos = -Math.round((reelsArray[0][0]._gsTransform.rotationX % fullRotation) / rotationStep);
      //var reel1Pos = -Math.round((reelsArray[1][0]._gsTransform.rotationX % fullRotation) / rotationStep);
      //var reel2Pos = -Math.round((reelsArray[2][0]._gsTransform.rotationX % fullRotation) / rotationStep);
      
      //get the faceId based on the position
      var faceNumber0 = reelsFacesArray[0][reel0Pos];
      //normalise it using % if it's above maxFaces
      faceNumber0 = (faceNumber0 >= maxFaces) ? faceNumber0%maxFaces : faceNumber0;

      //get the faceId based on the position
      //var faceNumber1 = reelsFacesArray[1][reel1Pos];
      //normalise it using % if it's above maxFaces
      //faceNumber1 = (faceNumber1 >= maxFaces) ? faceNumber1%maxFaces : faceNumber1;

      //get the faceId based on the position
      //var faceNumber2 = reelsFacesArray[2][reel2Pos];
      //normalise it using % if it's above maxFaces
      //faceNumber2 = (faceNumber2 >= maxFaces) ? faceNumber2%maxFaces : faceNumber2;

      //create an array to store thr spin results
      spinFaceResult = [];

      //store them to be used in displayResults
      var prizeID = serverPrizeID[faceNumber0];
      console.log("Spin completed.");
      console.log("faceno:" + faceNumber0 + " prizeID:" + prizeID + " image:" + imageObjectsArray[faceNumber0].image);
      spinFaceResult[0] = {image:imageObjectsArray[faceNumber0].image, symbol:faceContainer0.children()[reel0Pos]};
      //spinFaceResult[1] = {image:imageObjectsArray[faceNumber1].image, symbol:faceContainer1.children()[reel1Pos]};
      //spinFaceResult[2] = {image:imageObjectsArray[faceNumber2].image, symbol:faceContainer2.children()[reel2Pos]};

      displayResults({prizeID:prizeID});
    }

    function displayResults(obj){

      //accessible reusable vars
      var resultStr, nudgeBtnId, latestPoints;

/*      if(spinFaceResult[0].image == spinFaceResult[1].image && spinFaceResult[1].image != spinFaceResult[2].image ){

        //first two are correct

        //if it was the result of a nudge
        if(obj.nudge === true){

          //get the value of the image and multiply by 2 (as there are 2 of them!)
          latestPoints = getPicArrayObject(0).value * 2;
          //resultStr = 'You earned ' + latestPoints + ' credits!';
          resultStr = message5;

          updateScore(latestPoints);

          hideNudgeButtons();
          spinCount -= 1; 

          //animate the 2 symbols
          var faceSymbolElements = [spinFaceResult[0].symbol, spinFaceResult[1].symbol ];
          TweenMax.staggerTo(faceSymbolElements, 0.13, {
            scale:1.1,
            //rotation:40,
            repeat:5, 
            yoyo:true,
            
            ease:Power1.easeOut
          }, 0.05, updateSpinCount);


        } else {

          //it wasn't a nudge so enable the budge button
          nudgeBtnId = 2;

          resultStr = message2;

          showNudgeButton(nudgeBtnId);

          nudgeBtn2.one(interactionUp, {reelId:2}, nudgeReel);
       
        }

      } else if (spinFaceResult[0].image == spinFaceResult[1].image && spinFaceResult[1].image == spinFaceResult[2].image){

        //YOU WON 3 IN A ROW!
        latestPoints = getPicArrayObject(0).value * 3;
        resultStr = '3  ' + spinFaceResult[0].image + ' symbols in a row!';
        //resultStr = message6;

        hideNudgeButtons();

        updateScore(latestPoints);
        spinCount -= 1; 
        //updateSpinCount();


        //animate the 3 symbols
        var faceSymbolElements = [spinFaceResult[0].symbol, spinFaceResult[1].symbol, spinFaceResult[2].symbol ];
        TweenMax.staggerTo(faceSymbolElements, 0.13, {
          scale:1.1,
          //rotation:40,
          repeat:5, 
          yoyo:true,
          
          ease:Power1.easeOut
        }, 0.05,updateSpinCount);


     } else if (spinFaceResult[1].image == spinFaceResult[2].image && spinFaceResult[1].image != spinFaceResult[0].image){

        //first one is wrong

        if(obj.nudge == true){

          resultStr = message3;
          hideNudgeButtons();

          spinCount -= 1; 
          updateSpinCount();

        } else {

            nudgeBtnId = 0;
            resultStr = message2;
            showNudgeButton(nudgeBtnId);

            nudgeBtn0.one(interactionUp, {reelId:0}, nudgeReel);
       
        }


     }else if (spinFaceResult[0].image == spinFaceResult[2].image && spinFaceResult[1].image != spinFaceResult[0].image){

        //middle one is wrong
        if(obj.nudge === true){

          resultStr = message4;
          hideNudgeButtons();

          spinCount -= 1; 
          updateSpinCount();

        } else {

          nudgeBtnId = 1;
          resultStr = 'NUDGE TIME!!';
          showNudgeButton(nudgeBtnId);

          nudgeBtn1.one(interactionUp, {reelId:1},nudgeReel);
       
        }



     } else {

        resultStr = 'Spin those reels!';
        hideNudgeButtons();

        spinCount -= 1; 
        updateSpinCount();
       
      }*/

      //latestPoints = getPicArrayObject(0).value * 3;
      resultStr = 'Congrats! You won ' + obj.prizeID + '!';

      //Decrement prize count
      decrementPrize(obj.prizeID );

      updateScore(spinFaceResult[0].image);
      //updateSpinCount();


      //animate the 3 symbols
      var faceSymbolElements = [spinFaceResult[0].symbol];
      TweenMax.staggerTo(faceSymbolElements, 0.13, {
        scale:1.1,
        //rotation:40,
        repeat:5, 
        yoyo:true,
        
        ease:Power1.easeOut
      }, 0.05,updateSpinCount);

      announceMessage(resultStr);     

    }


    function nudgeReel(e){

      //spin the reel based on which nudge button is lit
      var nudgeBtn = $(e.target);
      var reelId = e.data.reelId;

      TweenMax.to(reelsArray[reelId], 0.3,  {

        rotationX:'-=' + rotationStep,          
        onComplete:spinComplete,
        onCompleteParams:[{nudge:true}],
        ease:Back.easeOut
      });

      //TweenMax.set(nudgeBtn)

    }

    function hideNudgeButtons(){

      //hide the nudge button
      TweenMax.to(nudgeBtnsArray, 0.3, {
          alpha:0.2
        });      

    }

    function showNudgeButton(nudgeBtnId){

      //scale up and show the nudge button
      TweenMax.fromTo(nudgeBtnsArray[nudgeBtnId], 0.4, {
        scale:0,
        alpha:0.2
      },{
          alpha:1,
          scale:1,
          ease:Back.easeOut
        });

      //flash the nudgeButton
      TweenMax.to(nudgeBtnsArray[nudgeBtnId], 0.1, {
        alpha:0.8,

        repeat:-1,
        yoyo:true
      })
    }





    function armDrag(){

      //set a value and animate the arm as you drags
      var scaleFactor = nullObject._gsTransform.y/500;

      //
      TweenMax.set(arm, {
        scaleY:1 - scaleFactor
      })

    }

    function armDragEnd(){

      //faceId will be a winning number
      var faceId = Math.round(Math.random() * (numFaces-1));

      //if you pass in the winning number (faceId) it will produce a win
      //if you want to dictate which win it will be you can pass in a specific faceId e.g. for a triple-bar pass in the 
      //corresponding imageObjectsArray position of triple-bar which is 6
      //var faceId = 6; //you win with triple-bars!
      //spin(faceId) 

      //if you leave it blank it will be random
      
      //enable this to always win
      //spin(faceId);

      //enable this for random
      spin();

      //animate the arm back to normal when drag ends (with a bit of Elastic-ness)
      TweenMax.to(arm, 0.4, {
        scaleY:1,
        ease:Elastic.easeOut
      });

      //send the controling nullObject back to 0
      TweenMax.to(nullObject, 0.4,{
        y:0
      });

     
    }

    function announceMessage(msg){

      //intercept it to say nothing if spinCount = 0 (game is over)
      msg = (spinCount === 0) ? '' : msg;
      //set the message to upper case
      msg = msg.toUpperCase();
      //empty the message text fields
      resultText.html('');
      resultShadowText.html(''); 

      //animate the message on
      TweenMax.to([resultText, resultShadowText], 0.5, {
        text:{
          value:msg          
        }, 
          ease:Linear.easeNone 
      });

    }

    function updateSpinCount(){

      //display the number of spins left  
      var display = String(spinCount);
      spinCountText.html(spinCount);

      //if it's 0 then it's game over
      if(spinCount == 0){

        showGameOver();

      }else {

        //enable the arm again
        armDragger[0].enable();
      } 
    }

    function showGameOver(){

      //show the game over screen (symbol)
      var gameOverSymbol = sym.createChildSymbol('GameOverSymbol', stage);

      //update the text inside
      var youScoredText = gameOverSymbol.$('youScoredText');
      youScoredText.html('YOU SCORED ' + creditScore);

      //ref to the element
      var gameOverElement = gameOverSymbol.getSymbolElement();
      //assign one click to it that closes it
      gameOverElement.one(interactionUp, {symbolToDelete:gameOverSymbol}, closeGameOverScreen);


    }

    function closeGameOverScreen(e){

      //delete the gameover symbol
      e.data.symbolToDelete.deleteSymbol();

      //reset everything
      resetAll();
      //build the reels
      createReels();

    }

    function getPerspective(){

      //returns an appropriate perspective based on number of slot images
      return (rotationStep/fullRotation) * 3000;
      //return -1;
    }


    function getZOrigin(){

      //works out the 3D bits
      var zOrigin = Math.round((faceHeight/2) / Math.tan(degreesToRadians((rotationStep/2))));
      return zOrigin ;
      
    }
    function degreesToRadians(valDeg){

      //trig calculation to convert degrees to radians
      return ((2*Math.PI)/360*valDeg);
    }

    function shuffle(array) {

      //properly shuffle an array
      var tmp, current, top = array.length;

      if(top) while(--top) {

        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;

      }

      return array;
    }    

    function getPicArrayObject(faceId){

          //return th object that contains the faceId passed in
          for(var c in imageObjectsArray){
            
            if(imageObjectsArray[c].image === spinFaceResult[faceId].image){

              //console.log(imageObjectsArray[c].value)
              return imageObjectsArray[c];
            }
          }
    }    



      });
      //Edge binding end

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         var meta1 = "<meta content=\"minimum-scale=1, width=device-width, maximum-scale=1\, user-scalable=no\" name=\"viewport\" />" ;   
         $(meta1).appendTo("body");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'FaceSymbol'
   (function(symbolName) {   
   
   })("FaceSymbol");
   //Edge symbol end:'FaceSymbol'

   //=========================================================
   
   //Edge symbol: 'GameOverSymbol'
   (function(symbolName) {   
   
   })("GameOverSymbol");
   //Edge symbol end:'GameOverSymbol'

})(jQuery, AdobeEdge, "EDGE-545038043");