const button = document.getElementById("getKeyBtn");
const output = document.getElementById("keyOutput");

button.addEventListener("click", async () => {
    try {
        const res = await fetch("/api/check");
        const text = await res.text();
        output.textContent = text;
    } catch (err) {
        output.textContent = "Error fetching key";
    }
});
