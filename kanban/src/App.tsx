import './App.css'
import { Card } from './components/Card'
import { ITEM_TYPE } from './types'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* testing the basic css for the card*/}
      <Card
        ticketNumber='WANDA-1' /* WorkoutANDroidApp*/
        title='Create repo' /* you should figure out how to trail the strings later */
        itemType={{type: ITEM_TYPE.STORY}}
        assignee='Aditya' /* ya boy */
      >
      </Card>
    </>
  )
}

export default App
