define("index", 
  ["./sayhello","./alertme"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var sayhello = __dependency1__["default"];

    var alertme = __dependency2__["default"];

    
    sayhello();
    console.log('bapshowaddi!');
    // alertme.saymyname('examplesproject');
    // alertme.whatilove('choclot');
  });