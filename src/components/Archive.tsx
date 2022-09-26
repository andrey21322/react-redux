import { ItemPost } from "./ItemPost"

interface PostsProps {
  activeCount: object,
  archiveCount: object,
  onModal: (id?:number | string, booleanValue?:boolean) => void
}


export function Archive({ activeCount, archiveCount, onModal }: PostsProps) {
  
  let archiveKeys = Object.keys(archiveCount)
  let archive = Object.values(archiveCount)
  let active = Object.values(activeCount)

  return (
    <div>
      <div className="archive-tags">
        <div>Note Category</div>
        <div>active</div>
        <div>archive</div>
      </div>
      <div className="archive-content">
        {archive.length === 0 ? "Archive is empty" 
        : archive.map((item, i) => <ItemPost onModal={onModal} key={i} category={archiveKeys[i]} active={active[i]} archive={item}/>)
        }
      </div>
    </div>
  )
}