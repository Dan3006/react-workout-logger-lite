import { useEffect, useState } from "react";
import axios from "axios";

function WorkoutList() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/workouts/")
      .then(res => setWorkouts(res.data))
      .catch(err => setError("Failed to fetch workouts"));
  }, []);

  return (
    <div style={{
      background: "#121212",
      color: "#fff",
      padding: "1rem",
      borderRadius: "10px",
      width: "fit-content"
    }}>
      <h2>Workouts</h2>
      {error && <p>{error}</p>}
      <ul>
        {workouts.map((w, index) => (
          <li key={index}>
            {w.exercise} — {w.weight}kg × {w.reps}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;