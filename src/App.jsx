import './App.css'
import Card from './components/Card'

const SomeFn = ({ name, age }) => {
  return <p>
    {name} {age}
  </p>
}

function App() {
  return (
    <Card />
    // <div>
    //   <SomeFn name='alex' age={120}/>
    //   {/* {SomeFn({name: 'alex', age: 123,})} */}
    // </div>
  )
}

export default App
