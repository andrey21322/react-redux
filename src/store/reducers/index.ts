import {combineReducers} from 'redux'
import {postsReducer} from './postsReducer'
import {archiveReducer} from './archiveReducer'

export const rootReducer = combineReducers({
    allPosts: postsReducer,
    archive: archiveReducer
})

export type RootState = ReturnType<typeof rootReducer>