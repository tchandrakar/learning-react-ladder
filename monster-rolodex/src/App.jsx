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
  const [monsters, setMonsters] = useState([
    { name: 'John Doe', email: 'john@doe.com' },
    { name: 'Jane Doe', email: 'jane@doe.com' },
    { name: 'Jim Doe', email: 'jim@doe.com' },
  ]);

  useEffect(() => {
    console.log('useEffect');
  }, [])

  return (
    <>
      <h1>Monster Rolodex</h1>
      {monsters.map((monster, index) => (
        console.log(`${monster.name} ${index}`),
        <Card key={index} {...monster} />
      ))}
      <button 
        onClick={() => 
          setMonsters((monsters) => [...monsters, { name: 'Larry Doe', email: 'larry@doe.com' }])
        }
      >
        Add Monster
      </button>
    </>
  )
}

export default App
