interface ItemPostProps {
    category: string,
    active: number,
    archive: number,
    onModal: (id?:number | string, booleanValue?:boolean) => void
}

export function ItemPost({ category, active, archive, onModal }: ItemPostProps) {
  return (
    <div onClick={() => onModal(category, true)} className="flex mt-12 mb-2 items-center text-white rounded-xl bg-orange-500 p-2.5 text-left text-lg">
        <div className="w-96">{category}</div>
        <div className="w-96">{active === undefined ? 0 : active}</div>
        <div className="w-96">{archive}</div>
    </div>
  )
}