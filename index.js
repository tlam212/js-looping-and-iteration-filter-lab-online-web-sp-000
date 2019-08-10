function findMatching(arry, name){
  arry.filter(function(driver){
    return driver.name === name;
  })
}
