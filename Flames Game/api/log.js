export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name1, name2 } = req.body;
    console.log(`Name1: ${name1}, Name2: ${name2}`);
    res.status(200).json({ message: "Names received!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

