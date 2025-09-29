// api/log.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { rawName1, rawName2, name1, name2, result } = req.body;

    console.log('---- New FLAMES Entry ----');
    console.log(`Raw Input -> Name1: ${rawName1}, Name2: ${rawName2}`);
    console.log(`Processed -> Name1: ${name1}, Name2: ${name2}`);
    console.log(`Result    -> ${result}`);
    console.log('--------------------------');

    res.status(200).json({ message: "Names logged successfully!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
