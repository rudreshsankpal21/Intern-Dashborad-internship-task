import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div className="container">
      <h1>Intern Dashboard</h1>

      {!user ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Referral Code:</strong> {user.referralCode}
          </p>
          <p>
            <strong>Total Donations Raised:</strong> ₹{user.totalDonations}
          </p>

          <h3>Rewards / Unlockables</h3>
          <ul>
            {user.rewards.map((reward, i) => (
              <li key={i}>{reward}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
