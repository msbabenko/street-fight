import {showModal} from './modal'

export function showWinnerModal(fighter) {
  // call showModal function 
 
  const element = {
    title: `${fighter.name} won!`,
    onClose: () => {
      location.reload();
    }
  }
  
  showModal(element);
  }
