import './App.css'
import { Card } from './components/Card'
import { ItemType } from './components/ItemType'
import { ITEM_TYPE } from './types'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* testing the basic css for the card*/}
      <ItemType type={ITEM_TYPE.SL_TODO}/>
      <ItemType type={ITEM_TYPE.SL_START}/>
      <ItemType type={ITEM_TYPE.SL_PR_C}/>
      <ItemType type={ITEM_TYPE.SL_C}/>
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
