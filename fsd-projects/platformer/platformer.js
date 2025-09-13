$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
      // left right, up and down, width, lenth   
    createPlatform(250, 650, 90, 20, "gray");
    createPlatform(600, 600, 90, 20, "gray");
    createPlatform(850, 470, 90, 20, "gray");
    createPlatform( 100, 520, 90, 20, "gray")
    createPlatform( 1000, 350, 90, 20, "gray")
    createPlatform( 900, 215, 90, 20, "gray")
    createPlatform( 700, 200, 90, 20, "gray")
    createPlatform( 1300, 300, 90, 20, "gray")

    // TODO 3 - Create Collectables

    createCollectable("chestplate", 100, 460);
    createCollectable("diamond", 750, 150);
    createCollectable("diamond", 1350, 250);
    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1000, );
    createCannon("left", 200, 1000, );
    createCannon("bottom", 1200, 1000, );

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
