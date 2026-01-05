export default function handler(req, res) {

const now = new Date();

// Fecha + hora (cambia cada hora)
const yyyy = now.getUTCFullYear();
const mm = now.getUTCMonth() + 1;
const dd = now.getUTCDate();
const hh = now.getUTCHours();

// Semilla única por hora
const seed = yyyy * 1000000 + mm * 10000 + dd * 100 + hh;

// Generador pseudo-random
const pseudoRandom = (x) => {
let y = x ^ 0xDEADBEEF;
y = (y * 2654435761) >>> 0;
return y % 10000000; // 7 dígitos
};

const DAILY_KEY = pseudoRandom(seed).toString().padStart(7, "0");

const { key } = req.query;

// 👉 Si NO envían key → mostrar mensaje bonito
if (!key) {
res.status(200).send(
`Here is the key for the PREMIUM SCRIPT SECTION

"KEY": ${DAILY_KEY}

`
);
return;
}

// 👉 Validar key
if (key === DAILY_KEY) {
res.status(200).send("true");
} else {
res.status(200).send("false");
}
}
