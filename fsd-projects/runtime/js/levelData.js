var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "reward", x: 400, y: groundY },
          { type: "enemy", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "sawblade", x: 1200, y: groundY },
          { type: "sawblade", x: 1300, y: groundY },
          { type: "end-of-Level", x: 1500, y: groundY },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "reward", x: 300, y: groundY },
          { type: "enemy", x: 400, y: groundY },
          { type: "sawblade", x: 500, y: groundY },
          { type: "sawblade", x: 1000, y: groundY },
          { type: "sawblade", x: 1100, y: groundY },
          { type: "end-of-Level", x: 1200, y: groundY },,
        ],
      },
       {
        name: "Robot groving",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "reward", x: 500, y: groundY },
          { type: "enemy", x: 300, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "sawblade", x: 1200, y: groundY },
          { type: "sawblade", x: 1300, y: groundY },
          { type: "end-of-Level", x: 1500, y: groundY },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
