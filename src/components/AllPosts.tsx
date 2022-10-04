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
      <div className="flex mt-12 mb-10 items-center text-white rounded-xl bg-gray-400 p-2.5 text-left text-lg">
          <div className='w-56'>Name</div> 
          <div className='w-56'>Created</div>
          <div className='w-56'>Category</div>
          <div className='w-56'>Content</div>
          <div className='w-56'>Dates</div>
          <div className="w-96 text-right cursor-pointer">
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