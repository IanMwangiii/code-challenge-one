//function that shows our control flow
function calculateDemeritPoints(speed) {
    const maxSpeed = 70;
    const kmPerDemeritPoint = 5;
    const demeritPointsMax = 12;

    if (speed < maxSpeed) {
        console.log(`Your Speed is: ${speed} km/h - Ok`);
    } else {
        const demeritPoints = Math.floor((speed - maxSpeed) / kmPerDemeritPoint);
        if (demeritPoints > demeritPointsMax) {
            //string interpolation to show speed in km/hr
            console.log(`Your Speed is: ${speed} km/h - License suspended`);
            //what happens if you exeed the speed
        } else {
            console.log(`Your Speed is: ${speed} km/h - Points: ${demeritPoints}`);
        }
    }
}

// Example usage:
//we call the function to see the output
calculateDemeritPoints(80); // the output should have both speed and points
calculateDemeritPoints(40); 
calculateDemeritPoints(200); 