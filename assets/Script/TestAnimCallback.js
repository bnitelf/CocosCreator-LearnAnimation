cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    
    onAnimEventCallback: function(message, num) {
        cc.log("message = " + message);
        cc.log("num = " + num);
    }
});
