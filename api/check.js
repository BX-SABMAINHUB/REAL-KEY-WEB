export default function handler(req, res) {

  const now = new Date();

  // UTC date + hour (changes every hour)
  const yyyy = now.getUTCFullYear();
  const mm = now.getUTCMonth() + 1;
  const dd = now.getUTCDate();
  const hh = now.getUTCHours();

  // Unique hourly seed
  const seed = yyyy * 1000000 + mm * 10000 + dd * 100 + hh;

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Pseudo-random generator based on seed
  const pseudoRandomKey = (seed) => {
    let result = "";
    let x = seed ^ 0xDEADBEEF;

    for (let i = 0; i < 9; i++) {
      x = (x * 1664525 + 1013904223) >>> 0;
      result += chars[x % chars.length];
    }

    return result;
  };

  const HOURLY_KEY = "bx-" + pseudoRandomKey(seed);

  const { key } = req.query;

  // 👉 If no key is provided, show the current key
  if (!key) {
    res.status(200).send(
`Here is the key for the PREMIUM SCRIPT SECTION

KEY: ${HOURLY_KEY}

Changes every 1 hour (UTC)
`
    );
    return;
  }

  // 👉 Validate key
  if (key === HOURLY_KEY) {
    res.status(200).send("true");
  } else {
    res.status(200).send("false");
  }
}
