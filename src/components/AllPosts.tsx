import { Post } from './Post'
import {IPost} from '../models'

interface PostsProps {
  allPosts: IPost[],
  onModal: (id:number) => void,
  onDelete: (id:number) => void,
  onOpenEdit: (id:number) => void,
  onAddToArchive: (id:number) => void
}

export function AllPosts({ onDelete, allPosts, onModal, onOpenEdit, onAddToArchive }:PostsProps) {
  return (
    <>
      <div className="tags">
          <div>Name</div>
          <div>Created</div>
          <div>Category</div>
          <div>Content</div>
          <div>Dates</div>
          <div className="btns-div">
              <i className="fa fa-archive"></i>
              <i className="fa fa-pencil"></i>
              <i className="fa fa-trash-o"></i>
          </div>
      </div>
      <div>
        {allPosts.length === 0 ? <div>No Tasks</div>
        : allPosts.map((post) => <Post onAddToArchive={onAddToArchive} onDelete={onDelete} onModal={onModal} post={post} onOpenEdit={onOpenEdit} key={post.id} />)}
      </div>
    </>
  )
}