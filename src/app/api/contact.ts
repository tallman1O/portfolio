export default function handler(req, res) {
  console.log(req.body);
  req.status(200).json({ name: "John Doe" });
}
