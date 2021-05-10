import { controls } from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {

  setInitialState(firstFighter, secondFighter);

  return new Promise((resolve) => {
    // resolve the promise with the winner when fight is over
    const firstHealth = document.getElementById('left-fighter-indicator');
    const secondHealth = document.getElementById('right-fighter-indicator');

   
    firstFighter.currentHealth

 document.addEventListener('keydown', event => {
  switch (event.code) {
    case controls.PlayerOneBlock:
      firstFighter.isBlock = true;
      console.log("Fighter One - Block");
      break;
    case controls.PlayerTwoBlock:
      secondFighter.isBlock = true;
      console.log("Fighter Two - Block");
      break;
    default:
      if (controls.PlayerOneCriticalHitCombination.includes(event.code)) {
        console.log("Fighter One - Critical Hit Combination");
      }
      if (controls.PlayerTwoCriticalHitCombination.includes(event.code)) {
        console.log("Fighter Two - Critical Hit Combination");
      }
      break;
  }
});

document.addEventListener('keyup', event => {
  switch (event.code) {
    case controls.PlayerOneAttack:
      console.log("Fighter One - Attack");
      attack(firstFighter, secondFighter, secondHealth, getDamage)
      break;
    case controls.PlayerOneBlock:
      firstFighter.isBlock = false;
      console.log("Fighter One - Block - false");
      break;
    case controls.PlayerTwoAttack:
      console.log("Fighter Two - Attack");
      attack(secondFighter, firstFighter, firstHealth, getDamage);
      break;
    case controls.PlayerTwoBlock:
      secondFighter.isBlock = false;
      console.log("Fighter Two - Block - false");
      break;
    default:
      if (controls.PlayerOneCriticalHitCombination.includes(event.code)) {
        console.log("Fighter One - Combo");
         attack(firstFighter, secondFighter, firstHealth, getDamage);
      }
      if (controls.PlayerTwoCriticalHitCombination.includes(event.code)) {
        console.log("Fighter Two - Combo");
        attack(secondFighter, firstFighter, firstHealth, getDamage);
      }
      break;
  }
});



  });
}

function attack(attacker, defender,health, getDamage) {
  if (defender.currentHealth > 0)
  if (!defender.isBlock)
  {console.log("current health " + defender.currentHealth);
    defender.currentHealth -= getDamage(attacker, defender);
    health.style.width = defender.currentHealth >= 0 ? `${defender.currentHealth / defender.health * 100}%` : '0%';
    console.log(defender.currentHealth);
  }

  
  
  else {
    console.log("RESOLEVED");
    resolve(attacker);}
  
}

export function getDamage(attacker, defender) {
  // return damage
  const damage = getHitPower(attacker) - getBlockPower(defender);
  return damage > 0 ? damage : 0;
}

export function getHitPower(fighter) {
  // return hit power
  return fighter.attack * ((Math.random() * 2) + 1);
}

export function getBlockPower(fighter) {
  // return block power
  return fighter.defense * ((Math.random() * 2) + 1);
}

export function getCriticalDamage(attacker) {
  return fighter.attack * 2;
  
}

function setInitialState(firstFighter, secondFighter) {

  const firstFighterHealthBar = document.getElementById('left-fighter-indicator');
  const secondFighterHealthBar = document.getElementById('right-fighter-indicator');

  firstFighter.currentHealth = firstFighter.health;
  secondFighter.currentHealth = secondFighter.health;

  console.log("Health 1 " + firstFighter.currentHealth);
  console.log("Health 2 " + secondFighter.currentHealth);
 
}

