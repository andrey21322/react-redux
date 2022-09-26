import { ArchiveActionTypes } from "../../types/archiveType"

export const addToArchive = (item: object) => {
    return {
        type: ArchiveActionTypes.ADD_TO_ARCHIVE,
        payload: item
    }
}

export const removeFromArchive = (id: number) => {
    return {
        type: ArchiveActionTypes.REMOVE_FROM_ARCHIVE,
        payload: id
    }
}