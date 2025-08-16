import './App.css'

const Card = (props) => {
  console.log({ props });
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  );
}

const App = () => {
  const cards = [
    { name: 'John Doe', email: 'john@doe.com' },
    { name: 'Jane Doe', email: 'jane@doe.com' },
    { name: 'Jim Doe', email: 'jim@doe.com' },
  ];
  return (
    <>
      <h1>Monster Rolodex</h1>
      {cards.map((card, index) => (
        console.log(`${card.name} ${index}`),
        <Card key={index} {...card} />
      ))}
    </>
  )
}

export default App
