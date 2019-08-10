function findMatching(drivers, name){
  drivers.filter(function(driver){
    return driver.toLowerCase() === name.toLowerCase();
  })
}
