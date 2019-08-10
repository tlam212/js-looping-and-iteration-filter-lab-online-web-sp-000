function findMatching(drivers, name){
  return drivers.filter(function(driver){
    return driver.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch(driver, letter){
  return drivers.filter(function(driver){
    return driver.first === letter
  })
}