import { IPost } from "../../models"
import { PostsActionTypes } from "../../types/todo"

export const taskDeleted = (id: number) => {
    return {
        type: PostsActionTypes.POSTS_DELETE,
        payload: id
    }
}

export const taskCreated = (task: object) => {
    return {
        type: PostsActionTypes.POSTS_CREATED,
        payload: task
    }
}

export const taskEdit = (allTasks: IPost[]) => {
    return {
        type: PostsActionTypes.POST_EDIT,
        payload: allTasks
    }
}
