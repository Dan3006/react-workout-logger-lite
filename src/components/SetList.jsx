function SetList({ sets }) {
  return (
    <ul>
      {sets.map((s, index) => (
        <li key={index} >
          {s.exercise} - {s.weight}kg x {s.reps}
        </li>
      ))}
    </ul>
  )
}

export default SetList;