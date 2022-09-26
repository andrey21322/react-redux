interface ItemPostProps {
    category: string,
    active: number,
    archive: number,
    onModal: (id?:number | string, booleanValue?:boolean) => void
}

export function ItemPost({ category, active, archive, onModal }: ItemPostProps) {
  return (
    <div onClick={() => onModal(category, true)} className="archive-wrapper">
        <div>{category}</div>
        <div>{active === undefined ? 0 : active}</div>
        <div>{archive}</div>
    </div>
  )
}