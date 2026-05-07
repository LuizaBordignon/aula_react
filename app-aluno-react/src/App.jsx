import './App.css'
import Welcome from './Welcome'
import Counter from './Counter'

function App() {

  const nextage = ['Aura', 'Ego', '67'];

  console.log(nextage)
  return(
    <> 
    <ul>
      {nextage.map(alan => 
      (<li key={alan}>{alan}</li>)
    
      )}
    </ul>
    
    <Welcome name = "Luiza"/>
    <hr/>
    <Welcome name = "Maria"/>
    <hr/>
    <Welcome name = "Ester"/>
    <Counter/>
    </>
  )
}

export default App
