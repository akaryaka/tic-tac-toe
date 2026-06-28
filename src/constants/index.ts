import { ref, reactive } from "vue";

export interface Button {
  id: string;
  state: boolean;
  class: string;
  classDisabled: string;
}

export const changeValue = ref("round");
export const countClick = ref<number>(0);
export const btnActive: Button[] = reactive([]);
export const winner = ref("");
export const displayFirstStep = ref(true);
export const displaySecondStep = ref(false);
export const displayThirdStep = ref(false);

export const buttons = reactive([
  { id: 1, state: false, class: "", classDisabled: "" },
  { id: 2, state: false, class: "", classDisabled: "" },
  { id: 3, state: false, class: "", classDisabled: "" },
  { id: 4, state: false, class: "", classDisabled: "" },
  { id: 5, state: false, class: "", classDisabled: "" },
  { id: 6, state: false, class: "", classDisabled: "" },
  { id: 7, state: false, class: "", classDisabled: "" },
  { id: 8, state: false, class: "", classDisabled: "" },
  { id: 9, state: false, class: "", classDisabled: "" },
]);

export const winCheck = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];

