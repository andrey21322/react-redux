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
    <div className="content">
            <div className="content-div" onClick={() => onModal(post.id!)}>
                <div>{post.name.length >= 13 ? post.name.substring(0,12) : post.name}</div>
                <div>{post.dateAt}</div>
                <div>{post.category}</div>
                <div>{post.content.length >= 13 ? post.content.substring(0,12) : post.content}</div>
                <div>{post.updatedDate === '' ? post.date : post.date + "/" + post.updatedDate}</div>
            </div>
            <div className="btns-div btns-div-absolute">
                <i onClick={() => onAddToArchive(post.id!)} className="fa fa-archive"></i>
                <i onClick={() => onOpenEdit(post.id!)} className="fa fa-pencil"></i>
                <i onClick={() => onDelete(post.id!)} className="fa fa-trash-o"></i>
            </div>
        </div>
  )
}