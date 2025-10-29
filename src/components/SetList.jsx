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
        </li>
      ))}
    </ul>
  )
}

export default SetList;