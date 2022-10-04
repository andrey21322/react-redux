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
      <div className="flex mt-12 mb-10 items-center text-white rounded-xl bg-gray-400 p-2.5 text-left text-lg">
        <div className="w-96">Note Category</div>
        <div className="w-96">active</div>
        <div className="w-96">archive</div>
      </div>
      <div className="w-full cursor-pointer">
        {archive.length === 0 ? "Archive is empty" 
        : archive.map((item, i) => <ItemPost onModal={onModal} key={i} category={archiveKeys[i]} active={active[i]} archive={item}/>)
        }
      </div>
    </div>
  )
}