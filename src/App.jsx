import { useState } from "react"

function App() {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState([]);

  const addSet = () => {
    if (!exercise || !weight || !reps) return;

    const newSet = { exercise, weight, reps };
    setSets([...sets, newSet]);

    setExercise('');
    setWeight('');
    setReps('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'Arial' }} >
      <h2>Workout Logger Lite</h2>

      <label>Exercise</label>
      <input value={exercise} onChange={(e) => setExercise(e.target.value)} />

      <label>Weight (kg)</label>
      <input value={weight} onChange={(e) => setWeight(e.target.value)} />

      <label>Reps</label>
      <input value={reps} onChange={(e) => setReps(e.target.value)} />

      <button onClick={addSet} style={{ marginTop: '10px' }} >Add Set</button>

      <h3 style={{ marginTop: '20px' }} >Logged Sets</h3>
      <ul>
        {sets.map((s, index) => (
          <li key={index} >
            {s.exercise} - {s.weight}kg x {s.reps}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App
