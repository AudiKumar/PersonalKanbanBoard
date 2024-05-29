import { ITEM_TYPE, ItemTypeInterface } from '../types'
import styles from './ItemType.module.css'

export const ItemType = ({type}: ItemTypeInterface) => {
  const setText = (type: ITEM_TYPE) => {
    switch (type) {
      case ITEM_TYPE.DEFECT:
        return "Defect"
      case ITEM_TYPE.TASK:
        return "Task"
      case ITEM_TYPE.SUBTASK:
        return "SubTask"
      case ITEM_TYPE.STORY:
        return "Story"
      case ITEM_TYPE.EPIC:
        return "Epic"
    }
  }

  const setColor = (type: ITEM_TYPE) => {
    switch (type) {
      case ITEM_TYPE.DEFECT:
        return styles.Defect
      case ITEM_TYPE.TASK:
        return styles.Task
      case ITEM_TYPE.SUBTASK:
        return styles.SubTask
      case ITEM_TYPE.STORY:
        return styles.Story
      case ITEM_TYPE.EPIC:
        return styles.Epic 
    }
  }
  
  return (
    <small className = {setColor(type)}>
        {setText(type)}
    </small>
    
  )
}; 
