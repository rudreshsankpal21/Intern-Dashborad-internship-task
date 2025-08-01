const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000 || process.env.PORT;

app.use(cors());

// Dummy user data
const userData = {
  name: "Rudresh",
  referralCode: "rudresh2025",
  totalDonations: 5500,
  rewards: ["Certificate", "Swag Kit", "Exclusive Webinar Access"],
};

app.get("/api/user", (req, res) => {
  res.json(userData);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
