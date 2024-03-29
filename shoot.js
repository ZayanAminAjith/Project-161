AFRAME.registerComponent("bowl", {
    init: function(){
        this.shootBowl()
    },
    shootBowl: function(){
        window.addEventListener("click",() => {
            var bullet = document.createElement("a-entity")
            bullet.setAttribute("geometry",{
                primitive: "sphere",
                radius: 0.5
            })
            bullet.setAttribute("material",{
                color: "grey"
            })
            var cam = document.querySelector("#camera")
            pos = cam.getAttribute("position")
            bullet.setAttribute("position",{
                x: pos.x,
                y: pos.y,
                z: pos.z
            })
           
            var scene = document.querySelector("#scene")
            var camera = document.querySelector("#camera").object3D
            var direction = new THREE.Vector3()
            camera.getWorldDirection(direction)
            bullet.setAttribute("velocity",direction.multiplyScalar(-10))
            scene.appendChild(bullet)
            
        })
    }
})