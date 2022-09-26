import {IPost} from '../models'

interface ModalProps {
  item: IPost[]
  onClose: () => void
  onRemoveFromArchive: (id:number) => void
  isArchive: boolean
}

export function Modal({ item, onClose, isArchive, onRemoveFromArchive }: ModalProps) {

  if(item.length === 0) {
    onClose()
  }

  return (
    <div className="item-wrapper">
        <div onClick={onClose} className="close-item-btn"><i className="fa fa-times" ></i></div>
        {isArchive
        ? item.map(post =>
            <div key={post.id} className="item archive-item">
            <div>
                Created: <span>{post.dateAt}</span>
            </div>
            <div>
                Category: <span>{post.category}</span>
            </div>
            <div>
                Name: <span>{post.name}</span>
            </div>
            <div onClick={() => onRemoveFromArchive(post.id!)}><i className="fa fa-archive" aria-hidden="true"></i></div>
          </div> 
          )
        : item.map(post => 
          <div key={post.id}>
          <div className="item">
            Name: <span>{post.name}</span>
          </div>
          <div className="item">
            Content: <span>{post.content}</span>
          </div>
          <div className="item">
            Category: <span>{post.category}</span>
          </div>
          </div>
        )}
        
    </div>
  )
}

