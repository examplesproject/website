define("alertme", 
  ["exports"],
  function(__exports__) {
    "use strict";
    var alertme = {
    
      saymyname: function (name){
        alert('mi name is ' + name);
      },
      whatilove: function (love){
        alert('i love ' + love + '!');
      }
    }
    
    __exports__["default"] = alertme;
  });