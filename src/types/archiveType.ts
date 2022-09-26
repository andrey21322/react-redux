import { IPost } from "../models"

export enum ArchiveActionTypes {
    ADD_TO_ARCHIVE = 'ADD_TO_ARCHIVE',
    REMOVE_FROM_ARCHIVE = 'REMOVE_FROM_ARCHIVE'
}

export interface ArchiveState {
    archive: IPost[]
}

export type ArchiveAction = ADD_TO_ARCHIVE | REMOVE_FROM_ARCHIVE 

interface ADD_TO_ARCHIVE {
    type: ArchiveActionTypes.ADD_TO_ARCHIVE,
    payload: IPost
}
interface REMOVE_FROM_ARCHIVE {
    type: ArchiveActionTypes.REMOVE_FROM_ARCHIVE,
    payload: number
}