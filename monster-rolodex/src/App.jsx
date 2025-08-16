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
  return (
    <>
      <h1>Monster Rolodex</h1>
      <Card name="John Doe" email="john@doe.com" />
      <Card name="Jane Doe" email="jane@doe.com" />
      <Card name="Jim Doe" email="jim@doe.com" />
    </>
  )
}

export default App
