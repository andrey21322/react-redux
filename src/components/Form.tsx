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
    <div className="add-form">
      <div className="name-div">
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
      <div className="add-form_btn">
          {edit === false ? <button onClick={() => onAdd()} className="add-form-btn">ADD</button>
          : <button onClick={() => onEdit()} className="add-form-btn">EDIT</button>}
          <button onClick={() => toggleForm(false)} className="cancel-form-btn">CANCEL</button>
      </div>
      </div>
  )
}
