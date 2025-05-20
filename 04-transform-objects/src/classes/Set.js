class Set{

    meshProperty;
    constructor(){

    }
    constructor(meshProperty){
        this.meshProperty = meshProperty;
    }

    commit(x, y, z){
        if(!this.meshProperty) return new Error("Mesh Properties are not initialized. Have you set mesh properties. {new Set(meshProperties)}");
        if(x && y && z){
            this.meshProperty.set(x,z,z);
        }else{
            return new Error("In order to commit, you need to supply x, y & z properties, all 3.");
        }
        return{
            modifiedProperty:this.meshProperty,
            values:{x,y,z}
        }
    }
}