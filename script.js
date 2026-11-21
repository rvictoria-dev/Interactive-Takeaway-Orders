const buttons = document.querySelectorAll(".order button");
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

    document.querySelector("#completed").textContent =
      document.querySelectorAll("button.done").length;
  };
});
