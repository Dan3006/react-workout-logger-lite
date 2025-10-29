import { useState } from "react";

function SetForm({ onAddSet }) {
  const [error, setError] = useState('');
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');


  const handleSubmit = () => {
    setError('');

    if (!exercise || !weight || !reps) {
      setError('All fields are required.');
      return;
    };

    if (isNaN(weight) || isNaN(reps)) {
      setError('Weight and reps must be numbers.');
      return;
    }

    if (Number(weight) <= 0 || Number(reps) <= 0) {
      setError('Weight and reps must be greater than zero.');
      return;
    }

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
      <label style={{ display: 'block', marginTop: '10px', color: '#aaa' }} >Exercise</label>
      <input
        style={{
          width: '100%',
          padding: '10px',
          marginTop: '4px',
          borderRadius: '6px',
          border: '1px solid #555',
          backgroundCOlor: '#2a2a2a',
          color: '#eee'
        }}
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />

      <label style={{ display: 'block', marginTop: '10px', color: '#aaa' }} >Weight (kg)</label>
      <input
        style={{
          width: '100%',
          padding: '10px',
          marginTop: '4px',
          borderRadius: '6px',
          border: '1px solid #555',
          backgroundCOlor: '#2a2a2a',
          color: '#eee'
        }}
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <label style={{ display: 'block', marginTop: '10px', color: '#aaa' }} >Reps</label>
      <input
        style={{
          width: '100%',
          padding: '10px',
          marginTop: '4px',
          borderRadius: '6px',
          border: '1px solid #555',
          backgroundCOlor: '#2a2a2a',
          color: '#eee'
        }}
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />

      {error && (
        <div style={{ color: '#ff4d4d', marginTop: '8px' }} >
          {error}
        </div>
      )}

      <button
        onClick={handleSubmit}
        style={{
          marginTop: '16px',
          width: '100%',
          padding: '12px',
          backgroundColor: '#6366f1',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontWeight: '600',
          cursor: 'pointer'
        }}
      >
        Add Set
      </button>
    </div>
  )
}

export default SetForm;