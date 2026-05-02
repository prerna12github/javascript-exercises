const findTheOldest = function(people) {
      let oldest = {};
  let oldestAge = 0;
  for (let i = 0; i < people.length; i++) {
    if (!people[i].yearOfDeath){
        const d = new Date();
        let year=d.getFullYear();
        people[i].yearOfDeath=year;
    }
    let age = people[i].yearOfDeath - people[i].yearOfBirth
    if( age >= oldestAge) {
       oldestAge = age;
       oldest = people[i];
    }
  }
  return oldest;
}


// Do not edit below this line
module.exports = findTheOldest;
