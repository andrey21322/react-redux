import { IPost } from "../models"

export enum PostsActionTypes {
    POSTS_DELETE = 'POSTS_DELETE',
    POSTS_CREATED = 'POSTS_CREATED',
    POST_EDIT = 'POST_EDIT',
    POST_TO_ARCHIVE = 'POST_TO_ARCHIVE'
}

export interface PostState {
    allPosts: IPost[]
}

export type PostsAction = POSTS_DELETE | POSTS_CREATED | POST_EDIT | POST_TO_ARCHIVE

interface POSTS_DELETE {
    type: PostsActionTypes.POSTS_DELETE
    payload: number
}
interface POSTS_CREATED {
    type: PostsActionTypes.POSTS_CREATED,
    payload: IPost
}
interface POST_EDIT {
    type: PostsActionTypes.POST_EDIT,
    payload: IPost[]
}
interface POST_TO_ARCHIVE {
    type: PostsActionTypes.POST_TO_ARCHIVE,
    payload: IPost
}