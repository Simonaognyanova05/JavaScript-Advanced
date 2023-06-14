function solve(speed, area){
    if(area === 'motorway'){
        let maxSpeed = 130;
        if(speed <= maxSpeed){
            console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
        }else{
            let faster = speed - maxSpeed;
            let status = '';
            if(faster <= 20){
                status = 'speeding';
            }else if(faster <= 40){
                status = 'excessive speeding';
            }else if(faster > 40){
                status = 'reckless driving';
            }
            console.log(`The speed is ${faster} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
        }
    }else if(area === 'interstate'){
        let maxSpeed = 90;
        if(speed <= maxSpeed){
            console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
        }else{
            let faster = speed - maxSpeed;
            let status = '';
            if(faster <= 20){
                status = 'speeding';
            }else if(faster <= 40){
                status = 'excessive speeding';
            }else if(faster > 40){
                status = 'reckless driving';
            }
            console.log(`The speed is ${faster} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
        }
    }else if(area === 'city'){
        let maxSpeed = 50;
        if(speed <= maxSpeed){
            console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
        }else{
            let faster = speed - maxSpeed;
            let status = '';
            if(faster <= 20){
                status = 'speeding';
            }else if(faster <= 40){
                status = 'excessive speeding';
            }else if(faster > 40){
                status = 'reckless driving';
            }
            console.log(`The speed is ${faster} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
        }
    }else if(area === 'residential'){
        let maxSpeed = 20;
        if(speed <= maxSpeed){
            console.log(`Driving ${speed} km/h in a ${maxSpeed} zone`);
        }else{
            let faster = speed - maxSpeed;
            let status = '';
            if(faster <= 20){
                status = 'speeding';
            }else if(faster <= 40){
                status = 'excessive speeding';
            }else if(faster > 40){
                status = 'reckless driving';
            }
            console.log(`The speed is ${faster} km/h faster than the allowed speed of ${maxSpeed} - ${status}`);
        }
    }
}
solve(120, 'city');