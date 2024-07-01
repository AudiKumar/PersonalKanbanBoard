export interface ItemTypeInterface {
    type: ITEM_TYPE
    icon? : ImageBitmap // probably going to remove this later
}

export enum ITEM_TYPE {
    DEFECT, TASK, SUBTASK, STORY, EPIC, SL_TODO, SL_START, SL_PR_C, SL_C
}

export interface CardInterface {
    ticketNumber: string /* should be a string cause it should be something like LETERS-ticket number */
    title: string
    itemType: ItemTypeInterface
    /* making this optional cause its just gonna be me but feature wise this makes sense*/
    assignee?: string  
}

export interface SwimLaneInterface {
    swimLaneLabel: ItemTypeInterface
    cardsInSwimLane: CardInterface[]
}