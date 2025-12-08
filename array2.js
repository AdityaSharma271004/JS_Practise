const hero = ["thor", "batman","ironman"]
const ind_hero= ["balveer","shaktiman"]
// hero.push(ind_hero)
console.log(hero);

//console.log(hero.concat(ind_hero));//it convert two array in single array

const new_hero = [...hero, ...ind_hero]
console.log(new_hero);