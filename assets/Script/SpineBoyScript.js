cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        var spine = this.spine = this.getComponent('sp.Skeleton');
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    walk: function() {
        this.spine.setAnimation(0, 'walk', true);
    },
    death: function() {
        this.spine.setAnimation(0, 'death', true);
    },
    hit: function() {
        this.spine.setAnimation(0, 'hit', true);
    },
    idle: function() {
        this.spine.setAnimation(0, 'idle', true);
    },
    jump: function() {
        this.spine.setAnimation(0, 'jump', true);
    },
    run: function() {
        this.spine.setAnimation(0, 'run', true);
    },
    shoot: function() {
        // 1 is trackIndex, not yet know what it is.
        this.spine.setAnimation(1, 'shoot', false);
    },
    test: function() {
        this.spine.setAnimation(0, 'test', true);
    },
});
