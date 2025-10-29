import { useState } from "react";

function SetList({ sets, onDelete, onEdit }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editForm, setEditForm] = useState({ exercise: '', weight: '', reps: '' });

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditForm(sets[index]);
  }

  const saveEdit = (index) => {
    onEdit(index, editForm);
    setEditingIndex(null);
  };


  return (
    <ul style={{ listStyle: 'none', padding: 0, marginTop: '12px' }} >
      {sets.map((s, index) => (
        <li key={index} style={{
          backgroundColor: '#2b2b2b',
          padding: '10px',
          borderRadius: '6px',
          marginBottom: '8px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          border: '1px solid #333'
        }} >
          {editingIndex === index ? (
            <>
              <input
                style={{ width: '100%', padding: '6px', borderRadius: '4px', marginBottom: '4px', backgroundColor: '#1e1e1e', color: '#eee', border: '1px solid #555' }}
                value={editForm.exercise}
                onChange={(e) => setEditForm({ ...editForm, exercise: e.target.value })}
              />
              <input
                style={{ width: '100%', padding: '6px', borderRadius: '4px', marginBottom: '4px', backgroundColor: '#1e1e1e', color: '#eee', border: '1px solid #555' }}
                value={editForm.weight}
                onChange={(e) => setEditForm({ ...editForm, weight: e.target.value })}
              />
              <input
                style={{ width: '100%', padding: '6px', borderRadius: '4px', marginBottom: '4px', backgroundColor: '#1e1e1e', color: '#eee', border: '1px solid #555' }}
                value={editForm.reps}
                onChange={(e) => setEditForm({ ...editForm, reps: e.target.value })}
              />
              <button
                onClick={() => saveEdit(index)}
                style={{
                  backgroundColor: '#4CAF50',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '6px 10px',
                  marginRight: '6px'
                }}
              >
                Save
              </button>
              <button
                onClick={() => setEditingIndex(null)}
                style={{
                  backgroundColor: '#555',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '6px 10px'
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                <span>{s.exercise} - {s.weight}kg x {s.reps}</span>

                <button
                  onClick={() => startEditing(index)}
                  style={{
                    backgroundColor: '#2980b9',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    marginRight: '8px'
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(index)}
                  style={{
                    backgroundColor: '#e74c3c',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '4px 8px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </div>

              <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }} >
                {new Date(s.timestamp).toLocaleString()}
              </div>
            </>
          )}


        </li>
      ))}
    </ul>
  )
}

export default SetList;