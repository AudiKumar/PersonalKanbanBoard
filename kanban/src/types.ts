export interface ItemTypeInterface {
    type: ITEM_TYPE
    icon? : ImageBitmap // probably going to remove this later
}

export enum ITEM_TYPE {
    DEFECT, TASK, SUBTASK, STORY, EPIC
}