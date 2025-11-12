import { useState } from "react"
import SetForm from "./components/SetForm";
import SetList from "./components/SetList";
import WorkoutList from "./components/WorkoutList";

function App() {
  const [sets, setSets] = useState([]);

  const totalSets = sets.length;

  const totalVolume = sets.reduce((sum, s) => {
    return sum + (Number(s.weight) * Number(s.reps));
  }, 0);

  const addSet = (newSet) => {
    const setWithTime = {
      ...newSet,
      timestamp: new Date().toISOString()
    };
    const updatedSets = [setWithTime, ...sets];
    setSets(updatedSets);
  };

  const deleteSet = (index) => {
    const updatedSets = sets.filter((_, i) => i !== index);
    setSets(updatedSets);
  }

  const editSet = (index, updatedSet) => {
    const updatedSets = sets.map((s, i) => i === index ? updatedSet : s);
    setSets(updatedSets);

  }

  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      fontFamily: 'Inter, Arial, sans-serif',
      padding: '24px',
      borderRadius: '12px',
      backgroundColor: '1e1e1e',
      color: '#eee',
      boxShadow: '0 0 12px rgba(0, 0, 0, 0.4)'
    }} >
      <h2>Workout Logger Lite</h2>

      <SetForm onAddSet={addSet} />

      <div style={{
        marginTop: '20px',
        padding: '12px',
        backgroundColor: '#252525',
        borderRadius: '8px',
        border: '1px solid #333'
      }}>
        <div>Total Sets: {totalSets}</div>
        <div>Total Volume: {totalVolume}</div>
      </div>

      <h3 style={{ marginTop: '20px' }} >Logged Sets</h3>
      <SetList sets={sets} onDelete={deleteSet} onEdit={editSet} />

      <WorkoutList />

    </div>
  );
}

export default App
