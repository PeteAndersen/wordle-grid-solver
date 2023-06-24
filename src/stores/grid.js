import { ref } from "vue";
import { defineStore } from "pinia";

export const useWordGridStore = defineStore("wordGrid", () => {
  const letters = ref([]);
  const colors = ref([]);

  function addLetter(letter) {
    if (letters.value.length >= 30) {
      return;
    }

    letters.value.push(letter.toUpperCase());
    colors.value.push("");
  }

  function removeLetter() {
    letters.value.pop();
    colors.value.pop();
  }

  function toggleColorAt(index) {
    if (colors.value.length > index) {
      switch (colors.value[index]) {
        case "":
          colors.value[index] = "green";
          break;
        case "green":
          colors.value[index] = "yellow";
          break;
        case "yellow":
          colors.value[index] = "";
          break;
      }
    }
  }

  function resetBoard() {
    letters.value = [];
    colors.value = [];
  }

  return {
    letters,
    colors,
    addLetter,
    removeLetter,
    toggleColorAt,
    resetBoard,
  };
});
