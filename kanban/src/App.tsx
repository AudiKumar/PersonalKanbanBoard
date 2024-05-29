import './App.css'
import { ItemType } from './components/ItemType'
import { ITEM_TYPE } from './types'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* testing the item type badge*/}
      <ItemType
        type={ITEM_TYPE.DEFECT}
      /> 
      <ItemType
        type={ITEM_TYPE.EPIC}
      />
      <ItemType
        type={ITEM_TYPE.TASK}
      /> 
      <ItemType
        type={ITEM_TYPE.SUBTASK}
      />
      <ItemType
        type={ITEM_TYPE.STORY}
      />
    </>
  )
}

export default App
