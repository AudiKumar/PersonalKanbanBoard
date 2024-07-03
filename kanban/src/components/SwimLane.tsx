import { SwimLaneInterface } from "../types"
import { Card } from "./Card"
import { ItemType } from "./ItemType"

function SwimLane({swimLaneLabel, cardsInSwimLane}:SwimLaneInterface) {
  return (

    <div>
        <div id="SwimLaneLabel">
            <ItemType
                type={swimLaneLabel.type}
            />
        </div>

        {cardsInSwimLane.map((card)=> (
            <Card
                ticketNumber={card.ticketNumber}
                title={card.title}
                itemType={card.itemType}
                assignee={card.assignee}
            />
        ))}


        
    </div>
  )
}
export default SwimLane