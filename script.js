(function () {
  const card = document.getElementById("card");
  const flipHint = document.getElementById("flipHint");

  if (!card) return;

  function updateState() {
    const flipped = card.classList.contains("is-flipped");
    card.setAttribute("aria-pressed", flipped ? "true" : "false");
    if (flipHint) {
      flipHint.textContent = flipped
        ? "다시 클릭하면 앞면으로"
        : "카드를 클릭하면 뒤집혀요";
    }
  }

  card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
    updateState();
  });

  updateState();

  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      card.click();
    }
  });

  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute(
    "aria-label",
    "명함 카드. 클릭하면 연락처가 보입니다."
  );
})();
