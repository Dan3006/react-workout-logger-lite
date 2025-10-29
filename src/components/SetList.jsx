function SetList({ sets, onDelete }) {
  return (
    <ul>
      {sets.map((s, index) => (
        <li key={index} >
          {s.exercise} - {s.weight}kg x {s.reps}
          <button
            onClick={() => onDelete(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default SetList;