import { useState } from "react"
import SetForm from "./components/SetForm";
import SetList from "./components/SetList";

function App() {
  const [sets, setSets] = useState([]);

  const addSet = (newSet) => {
    setSets([...sets, newSet]);
  };

  const deleteSet = (index) => {
    const updatedSets = sets.filter((_, i) => i !== index);
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

      <h3 style={{ marginTop: '20px' }} >Logged Sets</h3>
      <SetList sets={sets} onDelete={deleteSet} />

    </div>
  );
}

export default App
