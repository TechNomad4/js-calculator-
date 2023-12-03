const buttons = document.querySelectorAll(".btn");
const equal = document.querySelector("#eq");
const deleteLast = document.querySelector("#deleteLast");
const deleteAll = document.querySelector("#deleteAll");
const result = document.querySelector("#result");
const para = document.querySelector("#para");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    const num = buttons[i].getAttribute("data-num");
    result.value += num;
  });
}

equal.addEventListener("click", () => {
  try {
    result.value = eval(result.value);
    console.log(result.value);
    if (result.value === "undefined") {
      result.value = "";
    }
  } catch (err) {
    para.classList.remove("hide");
    result.value = "";
    setTimeout(function () {
      para.classList.add("hide");
    }, 1500);
  }
});

deleteLast.addEventListener("click", () => {
  result.value = result.value.slice(0, -1);
});

deleteAll.addEventListener("click", () => {
  result.value = "";
});
