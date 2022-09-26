import { PostsAction, PostsActionTypes, PostState } from "../../types/todo"

const initialState: PostState = {
    allPosts: [
        {id:1, name: 'Books', content: 'Do smth', date: "2022-09-23", updatedDate: '', category: 'Task', dateAt:"September 23, 2022"},
        {id:2, name: 'Smth', content: 'Do smth', date: "2022-09-24", updatedDate: '', category: 'Task', dateAt:"September 23, 2022"},
        {id:3, name: 'Chair', content: 'Do smth', date: "2022-09-24", updatedDate: '', category: 'Idea', dateAt:"September 23, 2022"},
        {id:4, name: 'Chair', content: 'Do smth', date: "2022-09-24", updatedDate: '', category: 'Idea', dateAt:"September 23, 2022"}
    ]
}

export const postsReducer = (state = initialState, action: PostsAction): PostState => {
    switch (action.type) {
        case PostsActionTypes.POSTS_DELETE:
            return {allPosts: state.allPosts.filter(item => item.id !== action.payload)}
        case PostsActionTypes.POSTS_CREATED:
            return {allPosts: [...state.allPosts, action.payload]}
        case PostsActionTypes.POST_EDIT: 
            return {allPosts: action.payload}
        case PostsActionTypes.POST_TO_ARCHIVE: {
            return {allPosts: state.allPosts.filter(item => item.id !== action.payload.id)}
        }
        default: 
            return state
    }
}