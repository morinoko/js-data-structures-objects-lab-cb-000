// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
   return Object.assign({}, driver, { [key]: value } );
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  Object.assign(driver, {[key]: value})

  // Other option:
  // driver[key] = value;
  return driver;
}

function deleteFromDriverByKey() {

}

function destructivelyDeleteFromDriverByKey() {

}
