function solve(object){
    if(object.dizziness === true){
        object.levelOfHydrated += 0.1 * object.weight;
        object.dizziness = false;
        
    }
    return object;
}
solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
   );