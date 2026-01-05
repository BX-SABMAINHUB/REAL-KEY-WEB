const revealBtn = document.getElementById("revealBtn");
const keyBox = document.getElementById("keyBox");

revealBtn.addEventListener("click", async () => {
    try {
        const res = await fetch("/api/check");
        const key = await res.text();
        keyBox.textContent = key;
        keyBox.style.color = "#0ff"; // color futurista cuando se revela
        revealBtn.disabled = true; // deshabilitar el botón tras revelar
    } catch (err) {
        keyBox.textContent = "Error fetching key";
    }
});
