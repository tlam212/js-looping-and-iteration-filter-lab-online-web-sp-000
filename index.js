function findMatching(drivers, name){
  drivers.filter(function(driver){
    return driver == name;
  })
}
