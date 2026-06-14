import { countClick, changeValue, buttons, displayFirstStep, displaySecondStep } from "../constants";

export const btnClick = function(event: any, item: any) {
  event.preventDefault();
  
  item.state = !item.state;
  item.classDisabled = 'disabled';
  countClick.value++;

  if (changeValue.value=='round' && countClick.value%2==1) {
    item.class = 'round';
  } else if (changeValue.value=='round' && countClick.value%2==0) {
    item.class = 'cross';
  } else if (changeValue.value=='cross' && countClick.value%2==1) {
    item.class = 'cross';
  } else  if (changeValue.value=='cross' && countClick.value%2==0) {
    item.class = 'round';
  }

  event.target.classList.add(item.class);
}

export const reset = function() {
  countClick.value = 0;
  
  buttons.forEach((item) => {
    item.state = false;
    item.class = '';
    item.classDisabled = '';
  })
}

export const toSecondStep = function(event: Event) {
  event.preventDefault()
  displayFirstStep.value = false;
  displaySecondStep.value = true;
}