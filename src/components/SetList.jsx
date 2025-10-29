function SetList({ sets, onDelete }) {
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
            <span>{s.exercise} - {s.weight}kg x {s.reps}</span>

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
        </li>
      ))}
    </ul>
  )
}

export default SetList;