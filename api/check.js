export default function handler(req, res) {
    const now = new Date();

    // Hora UTC (cambia cada hora)
    const yyyy = now.getUTCFullYear();
    const mm = now.getUTCMonth() + 1;
    const dd = now.getUTCDate();
    const hh = now.getUTCHours();

    const seed = yyyy * 1000000 + mm * 10000 + dd * 100 + hh;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    function generateKey(seed) {
        let out = "";
        let x = seed ^ 0xDEADBEEF;

        for (let i = 0; i < 9; i++) {
            x = (x * 1664525 + 1013904223) >>> 0;
            out += chars[x % chars.length];
        }

        return out;
    }

    const KEY = "bx-" + generateKey(seed);

    res.status(200).send(
`BX KEY SYSTEM

CURRENT KEY:
${KEY}

Changes every 1 hour (UTC)`
    );
}
