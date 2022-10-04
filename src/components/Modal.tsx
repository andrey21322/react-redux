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
    <div className="absolute top-1/4 left-1/4 w-7/12 min-h-500 bg-[#6D678E] rounded-xl p-7 mr-3">
        <div onClick={onClose} className="absolute right-1 top-1"><i className="fa fa-times" ></i></div>
        {isArchive
        ? item.map(post =>
            <div key={post.id} className="flex mb-2.5 text-black justify-between rounded-xl border p-2.5 pointer hover:text-[#CAB9F1]">
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
          <div className="flex mb-3 pointer">
            Name: <span>{post.name}</span>
          </div>
          <div className="flex mb-3 pointer">
            Content: <span>{post.content}</span>
          </div>
          <div className="flex mb-3 pointer">
            Category: <span>{post.category}</span>
          </div>
          </div>
        )}
        
    </div>
  )
}

