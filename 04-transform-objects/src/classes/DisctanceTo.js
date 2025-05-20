class DistanceT0{

    sourceInstance;
    constructor(){

    };
    constructor(sourceInstance){
        this.sourceInstance = sourceInstance;
    };

    calculateDistance(distanceVector){
        if(distanceVector === null || distanceVector === undefined) return new Error("Calculate Distance needs a distance vector to calculate the distance from source to distanceVector");
        this.sourceInstance.position.distanceTo(distanceVector.position);
    }

}