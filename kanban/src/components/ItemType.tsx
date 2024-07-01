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
      case ITEM_TYPE.SL_TODO:
        return "ToDo"
      case ITEM_TYPE.SL_START:
        return "Started"
      case ITEM_TYPE.SL_PR_C:
        return "PR Created"
      case ITEM_TYPE.SL_C:
        return "Completed"
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
      case ITEM_TYPE.SL_TODO: 
      case ITEM_TYPE.SL_START: 
      case ITEM_TYPE.SL_PR_C: 
      case ITEM_TYPE.SL_C:
        return styles.SwimLaneLabel

    }
  }
  
  return (
    <small className = {setColor(type)}>
        {setText(type)}
    </small>
    
  )
}; 
