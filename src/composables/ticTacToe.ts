import { watch } from "vue";
import {
  countClick,
  changeValue,
  buttons,
  displayFirstStep,
  displaySecondStep,
  winCheck,
  btnActive,
} from "../constants";

export const btnClick = function (event: Event, item: any) {
  event.preventDefault();

  item.state = !item.state;

  item.classDisabled = "disabled";
  countClick.value++;

  if (changeValue.value == "round" && countClick.value % 2 == 1) {
    item.class = "round";
  } else if (changeValue.value == "round" && countClick.value % 2 == 0) {
    item.class = "cross";
  } else if (changeValue.value == "cross" && countClick.value % 2 == 1) {
    item.class = "cross";
  } else if (changeValue.value == "cross" && countClick.value % 2 == 0) {
    item.class = "round";
  }
  // console.log(item.class);

  // event.currentTarget.classList.add(item.class);
  // console.log(event.target);

  btnActive.push(item);
};

watch(btnActive, (oldvalue, newvalue) => {
  console.log(btnActive);

  // let btnActiveArr = Object.values(btnActive);
  // const check = winCheck.some(
  // (arr) => JSON.stringify(arr) === JSON.stringify(btnActiveArr),
  // );
  // console.log(check);
});

export const reset = function () {
  countClick.value = 0;

  buttons.forEach((item) => {
    item.state = false;
    item.class = "";
    item.classDisabled = "";
  });
};

export const toSecondStep = function (event: Event) {
  event.preventDefault();
  displayFirstStep.value = false;
  displaySecondStep.value = true;
};
