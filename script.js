const buttons = document.querySelectorAll(".order button");
const completed = document.querySelector("#completed");
const live = document.querySelector("#live");

function updateCounters() {
  const done = document.querySelectorAll("button.done").length;
  completed.textContent = done;
  live.textContent = `${buttons.length - done} LIVE`;
}

buttons.forEach((btn) => {
  btn.onclick = () => {
    if (btn.classList.contains("done")) {
      btn.className = "";
      btn.textContent = "Preparing";
    } else if (btn.classList.contains("ready")) {
      btn.className = "done";
      btn.textContent = "Collected";
    } else {
      btn.className = "ready";
      btn.textContent = "ready";
    }

    updateCounters();
  };
});
