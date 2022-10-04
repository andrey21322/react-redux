import {IPost} from '../models'

interface PostProps {
    post: IPost,
    edit: boolean,
    handleChange: (e: any) => void,
    handleChangeSelect: (e: any) => void,
    onAdd: () => void,
    onEdit: () => void,
    toggleForm: (editBoolean: boolean) => void
}

export function Form({ post, handleChange, handleChangeSelect, onAdd, onEdit, toggleForm, edit }: PostProps) {
    
  return (
    <div className="w-1/3 h-2/5 bg-[#6D67BE] absolute top-32 left-1/3 rounded-xl text-center pt-5">
      <div>
          <input value={post.name} onChange={handleChange} name="name" type="name" placeholder="Name"/>
      </div>
      <div>
          <select name="category" value={post.category} onChange={e => handleChangeSelect(e)} >
              <option value="Task">Task</option>
              <option value="Idea">Idea</option>
              <option value="Random Thought">Random Thought</option>
          </select>
      </div>
      <div>
            <input value={post.content} onChange={handleChange} name="content" type="textarea" placeholder="Youre Content"/>
        </div>
      {edit 
    ? <div>
            <input value={post.updatedDate} onChange={handleChange} name="updatedDate" type="date"/>
        </div>
    :   <div>
            <input value={post.date} onChange={handleChange} name="date" type="date"/>
        </div>}
      <div className="w-72 m-auto text-right">
          {edit === false ? <button onClick={() => onAdd()} className="w-20 h-6 b-none rounded-xl cursos-pointer bg-[#84cc16]">ADD</button>
          : <button onClick={() => onEdit()} className="w-20 h-6 b-none rounded-xl cursos-pointer bg-[#84cc16]">EDIT</button>}
          <button onClick={() => toggleForm(false)} className="w-20 h-6 b-none rounded-xl cursos-pointer bg-[#f43f5e]">CANCEL</button>
      </div>
      </div>
  )
}
