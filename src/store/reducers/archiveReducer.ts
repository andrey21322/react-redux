import { ArchiveAction, ArchiveActionTypes, ArchiveState } from "../../types/archiveType"

const initialState: ArchiveState = {
    archive: [
        {id:5, name: 'Smth', content: 'Do smth', date: "2022-09-24", updatedDate: "", category: 'Task', dateAt:"September 23, 2022"},
        {id:6, name: 'Chair', content: 'Do smth', date: "2022-09-24", updatedDate: "", category: 'Idea', dateAt:"September 23, 2022"},
        {id:7, name: 'Chair', content: 'Do smth', date: "2022-09-24", updatedDate: "", category: 'Idea', dateAt:"September 23, 2022"}
    ]
}

export const archiveReducer = (state = initialState, action: ArchiveAction): ArchiveState => {
    switch (action.type) {
        case ArchiveActionTypes.ADD_TO_ARCHIVE :
            return {archive: [...state.archive, action.payload]}
         case ArchiveActionTypes.REMOVE_FROM_ARCHIVE :
            return {archive: state.archive.filter(item => item.id !== action.payload)}
        default: 
            return state
    }
}