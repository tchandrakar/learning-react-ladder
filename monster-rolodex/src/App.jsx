import './App.css'
import { useState, useEffect } from 'react'

const Card = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

const App = () => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        setMonsters(users)
      })
  }, [])

  return (
    <>
      {monsters.map((monster, idx) => {
        return <Card key={`${monster.name}-${idx}`} name={monster.name} email={monster.email} />
      })}
    </>
  )
}

export default App
