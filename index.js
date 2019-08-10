function findMatching(drivers, name){
  return drivers.filter(function(driver){
    return driver.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch (drivers, letter) {
  let lengthOfName = letter.length;
  return drivers.filter(function (driver) {
    return driver.slice(0, lengthOfName) === letter;
  });
}