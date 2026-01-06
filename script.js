const revealBtn = document.getElementById("revealBtn");
const loader = document.getElementById("loader");
const keyBox = document.getElementById("keyBox");
const keyText = document.getElementById("keyText");
const progress = document.querySelector(".progress");

revealBtn.addEventListener("click", async () => {
  revealBtn.style.display = "none";
  loader.classList.remove("hidden");

  progress.style.width = "0%";

  let percent = 0;
  const interval = setInterval(() => {
    percent += 2;
    progress.style.width = percent + "%";
    if (percent >= 100) clearInterval(interval);
  }, 100);

  await new Promise(r => setTimeout(r, 5000));

  const res = await fetch("/api/check");
  const key = await res.text();

  loader.classList.add("hidden");
  keyBox.classList.remove("hidden");
  keyText.textContent = key;
});
