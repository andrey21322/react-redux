import {IPost} from '../models'

interface PostProps {
  post: IPost,
  onModal: (id:number) => void,
  onDelete: (id:number) => void,
  onOpenEdit: (id:number) => void
  onAddToArchive: (id:number) => void
}

export function Post({ onDelete, post, onModal, onOpenEdit, onAddToArchive }: PostProps) {

  return (
    <div className="flex mb-4 items-center text-white rounded-xl bg-[#818cf8] p-2.5 text-left text-lg">
            <div className="contents " onClick={() => onModal(post.id!)}>
                <div className='w-56'>{post.name.length >= 13 ? post.name.substring(0,12) : post.name}</div>
                <div className='w-56'>{post.dateAt}</div>
                <div className='w-56'>{post.category}</div>
                <div className='w-56'>{post.content.length >= 13 ? post.content.substring(0,12) : post.content}</div>
                <div className='w-56'>{post.updatedDate === '' ? post.date : post.date + "/" + post.updatedDate}</div>
            </div>
            <div className="w-96 text-right cursor-pointer">
                <i onClick={() => onAddToArchive(post.id!)} className="fa fa-archive"></i>
                <i onClick={() => onOpenEdit(post.id!)} className="fa fa-pencil"></i>
                <i onClick={() => onDelete(post.id!)} className="fa fa-trash-o"></i>
            </div>
        </div>
  )
}