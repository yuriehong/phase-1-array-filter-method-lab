// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(function (driver){
         return driver.toUpperCase() == name.toUpperCase();
    })

}

function fuzzyMatch(drivers, name){
    return drivers.filter(function (driver) {
        return driver.substring(0,name.length) == name;
    })


}

function matchName(driverObjects, name){
    return driverObjects.filter(function (driver){
        return driver.name == name;
    })

}