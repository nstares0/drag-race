(function() {


  var ChristmasTree = function() {
    // this class manages the xmas tree
    // get a reference to the pre stage lights html element
    this.$preStageLights = document.getElementById('pre-stage');
    this.$stageLights = document.getElementById('stage');
    this.$light1 = document.getElementById('start-lights1');
    this.$light2 = document.getElementById('start-lights2');
    this.$light3 = document.getElementById('start-lights3');
    this.$redLight = document.getElementById('false-lights');
    this.$greenLight = document.getElementById('green-lights');

    // reset the christmas tree every time it's initialized
    this.reset();
  },
  RaceTrack         = function() {
   this.bar1 = document.getElementById('pre-staged');
  },
  Dragster          = function() {
    // grab the car element
    this.$el = document.getElementById('dragster');
    // set the starting position of the dragster
    this.$el.style.left = "0px";
    this.engine = "off";

  },
  Game              = function() {
    // this class manages game state
    // initialize a christmas tree
    this.tree = new ChristmasTree();
    // initialize the race track
    this.track = new RaceTrack();
    // initialize the player dragster
    this.dragster = new Dragster();
    

    this.attachListeners();
  };




  ChristmasTree.prototype.reset = function() {
    // append the css on class to the pre stage lights
    // so that they show up as yellow
    this.$preStageLights.className += "on"
    ;
  };

  Game.prototype.attachListeners = function() {
    var self = this;
    // listen for user input, specifically
    // for the user pressing the right arrow key
    window.addEventListener('keyup', function (event) {
      if (event.keyCode === 13)  {
        
          self.dragster.engine = "on"; 
      }
    });



    window.addEventListener('keyup', function(event) {
     

      function firstLight() {
        g.tree.$light1.style.background = "yellow";
        x = "on";

      }

      function secondLight() {
        g.tree.$light2.style.background = "yellow";
        y = "on";
      }

      function thirdLight() {
        g.tree.$light3.style.background = "yellow";
        z = "on";
      }

              function greenLight() {
        g.tree.$greenLight.style.background = "green";
        a = "on";
      }

      if (event.keyCode === 39) {
        if (self.dragster.engine === "on") {
          counter = counter + 1;
          console.log(counter);
        self.dragster.advance();

        if (counter > 4 && counter < 8) {

          g.tree.$stageLights.style.background = "yellow";
          setTimeout(firstLight, 1500);
          setTimeout(secondLight, 3000);
          setTimeout(thirdLight, 4500);
          setTimeout(greenLight, 6000);

        }

        if (counter > 8) {
          if (x === "" || y === "" || z === "" || a === "" ) {
            g.tree.$redLight.style.background = "red";  
            alert("false start, game will now reset");

             

          }

        }
      }
      }
    });
  };
    



  Dragster.prototype.advance = function() {
    // this should move the car across the screen 1px at a time
    this.$el.style.left = parseInt(this.$el.style.left, 10) + 10 + "px";
  

  };

  var g = new Game();
  var counter = 0;
     var x = "";
        var y = "";
        var z = "";
        var a = "";

})();


// look into set Interval