import { CardInterface } from "../types";
import styles from './Card.module.css';
import { ItemType } from "./ItemType";

export const Card = ({ticketNumber, title, itemType, assignee}: CardInterface) => {
  return (
<section className={`stack-large ${styles.card}`}>
  <div className="stack-small"> 
    <h5 className="{styles.ticketNumber}">{ticketNumber}</h5>
    <p className="{styles.title}"> {title}</p>
    <h6 className="{styles.itemType}"> {
        itemType && <ItemType type={itemType.type}/>
    }</h6>
    <small>{"Assignee: " + assignee}</small>
  </div>

</section>
  )
}