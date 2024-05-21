// document.querySelector("[camera]").addEventListener("collide", function(e) {console.log("Test hit")});

AFRAME.registerComponent('character-controller', {

    init: function () {
        var self = this;
        // Get references to camera and character entities
        var el = this.el;
        this.cameraEl = document.querySelector('#camera');
        this.characterEl = document.querySelector('#character');
        this.characterOffset = this.characterEl.getAttribute('position')
        
        this.tickCount = 0;

        this.playerHeight = this.el.getAttribute('position').y;
        
        
        // console.log(this.el)
        // console.log(this.characterEl.getAttribute('position'))

        window.addEventListener('keydown', function (event) {
            if (event.keyCode === 32) {
                // console.log("Spacebar pressed")
                self.jump();
            }
        });

        // console.log(this.el.querySelector('#character #fps-body'))
        // this.el.querySelector('#character #fps-body').addEventListener('collide', function(e) {
        //     console.log('Player has collided with ', e.detail.body.el);
        // });

        document.querySelector("[camera]").addEventListener("collide", function(e) {console.log("Test hit")});
        
        
    },

    tick: function (time, timeDelta) {
        // this.tickCount = 0;
        if(this.tickCount >= 60){
            this.tickCount = 0;
            // console.log(AFRAME.scenes[0].systems.physics.driver.collisions)
        }
        
        
        
        this.tickCount += 1;

        // var playerEl = document.querySelector("#character");
        // playerEl.addEventListener("collide", function(e) {
        //     console.log("Player has collided with body #" + e.detail.targetEl.id);
        //     e.detail.targetEl; // Other entity, which playerEl touched.
        // });

        //Update rotation for the character
        this.characterEl.setAttribute('rotation',{
            y: this.cameraEl.getAttribute('rotation').y
        });

        //Update position for the character
        this.characterEl.setAttribute('position', {
            x: this.cameraEl.getAttribute('position').x,
            y: this.cameraEl.getAttribute('position').y - 1,
            z: this.cameraEl.getAttribute('position').z
        });


    },

    jump: function () {
        // Add jump logic here
        console.log("Jump logic!")
        // console.log(this.el)

        var position = this.el.getAttribute('position');
        console.log(position);
        if(position.y <= this.playerHeight){
            position.y += 1.0;
            this.el.setAttribute('position', position);
        }
    }

    
});

AFRAME.registerComponent('collider-check', {
    dependencies: ['raycaster'],
    init: function () {
        console.log(this.el)
        this.el.addEventListener('raycaster-intersection', function(e) {
            console.log('Player has collided with ', e.detail.body);
        });
        
        
    }

    
});