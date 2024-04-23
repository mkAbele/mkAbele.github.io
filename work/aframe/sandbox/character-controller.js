AFRAME.registerComponent('character-controller', {
            

    init: function () {
        var self = this;
        // Get references to camera and character entities
        var el = this.el;
        this.cameraEl = document.querySelector('#camera');
        this.characterEl = document.querySelector('#character');
        this.characterOffset = this.characterEl.getAttribute('position')

        this.playerHeight = this.el.getAttribute('position').y;
        
        
        // console.log(this.el)
        // console.log(this.characterEl.getAttribute('position'))

        window.addEventListener('keydown', function (event) {
            if (event.keyCode === 32) {
                // console.log("Spacebar pressed")
                self.jump();
            }
        });
        
        
    },

    tick: function (time, timeDelta) {

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