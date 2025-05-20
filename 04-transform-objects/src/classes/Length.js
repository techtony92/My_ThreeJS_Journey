class Length{
    meshOrPosition;
    constructor(){

    }
    constructor(meshOrPosition){
        this.meshOrPosition = meshOrPosition;
    }

    calculateLength(){
        let result;
        if(this.meshOrPosition === null || this.meshOrPosition === undefined) return new Error("Calculating the length requires ether a mesh or the position vector itself");
        if(this.meshOrPosition instanceof THREE.Object3D){
            console.info(this.meshOrPosition.position.length());
            result = this.meshOrPosition.position.length();
        }else{
            console.info(this.meshOrPosition.length());
            result = this.meshOrPosition.length();
        }

        return {
            result,
            calculatedFrom: this.meshOrPosition,

        }
    }
}