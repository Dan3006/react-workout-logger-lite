import { useState } from "react";

function SetForm({ onAddSet }) {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleSubmit = () => {
    if (!exercise || !weight || !reps) return;

    onAddSet({
      exercise,
      weight,
      reps
    });

    setExercise('');
    setWeight('');
    setReps('');
  }

  return (
    <div>
      <label>Exercise</label>
      <input value={exercise} onChange={(e) => setExercise(e.target.value)} />

      <label>Weight (kg)</label>
      <input value={weight} onChange={(e) => setWeight(e.target.value)} />

      <label>Reps</label>
      <input value={reps} onChange={(e) => setReps(e.target.value)} />

      <button onClick={handleSubmit} style={{ marginTop: '10px' }} >Add Set</button>
    </div>
  )
}

export default SetForm;