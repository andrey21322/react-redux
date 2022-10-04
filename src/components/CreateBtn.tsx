interface PostProps {
  toggleForm: (editBoolean: boolean) => void
}

export function CreateBtn({ toggleForm }: PostProps) {

  return (
    <div className="add-btn text-right mr-5">
        <a onClick={() => toggleForm(false)} href="/#" className="inline-block p-2.5 rounded-xl tracking-wide ease-in-out duration-150 text-white bg-[#6D67BE] hover:text-violet-700 hover:shadow-xl ">Create Note</a>
    </div>
  )
}