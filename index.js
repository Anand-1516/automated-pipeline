const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello my world, CI/CD Pipeline is working automatically using EC2! 🚀");
});

// Bind to 0.0.0.0 so it works inside Docker/EC2
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
