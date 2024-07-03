import './App.css'
import SwimLane from './components/SwimLane'
import { CardInterface, ITEM_TYPE } from './types'

function App() {
  //const [count, setCount] = useState(0)

 const cards: CardInterface[] = [
    {ticketNumber:'WANDA-1', title:'ticket 1', itemType:{type: ITEM_TYPE.STORY}, assignee:'Aditya'},
    {ticketNumber:'WANDA-2', title:'ticket 2', itemType:{type: ITEM_TYPE.TASK}, assignee:'Aditya'},
    {ticketNumber:'WANDA-3', title:'ticket 3', itemType:{type: ITEM_TYPE.DEFECT}, assignee:'Aditya'}
  ]


  return (
    <>
      {/* Testing out the front end stuff */}
      <SwimLane
        swimLaneLabel={{type: ITEM_TYPE.SL_TODO}}
        cardsInSwimLane={cards}
      />
    </>
  )
}

/*
      <ItemType type={ITEM_TYPE.SL_TODO}/>
      <ItemType type={ITEM_TYPE.SL_START}/>
      <ItemType type={ITEM_TYPE.SL_PR_C}/>
      <ItemType type={ITEM_TYPE.SL_C}/>
      <Card
        ticketNumber='WANDA-1' 
        title='Create repo' 
        itemType={{type: ITEM_TYPE.STORY}}
        assignee='Aditya' 
      />
      
      <Card
        ticketNumber='WANDA-2' 
        title='TEST title 2' 
        itemType={{type: ITEM_TYPE.DEFECT}}
        assignee='Aditya' 
      />
      
*/

export default App
