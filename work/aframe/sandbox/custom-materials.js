AFRAME.registerComponent('navmesh-material', {
    init: function () {
        // const mesh = this.el.getObject3D('mesh');
        this.el.addEventListener("model-loaded", (e)=>{
            const mesh = this.el.getObject3D('mesh');

            var material = new THREE.MeshLambertMaterial({
                color: '#fff',
                transparent: true,
                opacity: 0
            });

            mesh.traverse(function (node) {
                if (node.material){
                    node.material = material

                }
            });

        });
    }

});

AFRAME.registerComponent('checker-material', {
    init: function () {
        this.el.addEventListener("model-loaded", (e)=>{
            const mesh = this.el.getObject3D('mesh');
            let loader = new THREE.TextureLoader();
            let texture = loader.load('./assets/maps/textures/proto/Orange/texture_01.png');
            const material = new THREE.MeshPhongMaterial({
                map: texture
            });
            mesh.traverse(function (node) {
                
                console.log(node)

            });
        });
    }
});