import React, { useState, useContext } from 'react'
import { IPost } from './models'
import { Modal } from './components/Modal'
import { AllPosts } from './components/AllPosts'
import { ModalContext } from './context/context'
import { CreateBtn } from './components/CreateBtn'
import { Form } from './components/Form'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from './hooks/useTypedSelector'
import { taskDeleted, taskCreated, taskEdit } from './store/action-creators/posts'
import { Archive } from './components/Archive'
import { addToArchive, removeFromArchive } from './store/action-creators/archive'
function App() {

  const {modal, open, close} = useContext(ModalContext)

  const state = useTypedSelector(state => state)
  const {allPosts} = state.allPosts
  const {archive} = state.archive

  const dispatch = useDispatch()

  const dateAt = new Date().toLocaleString('eng', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  let variables: any = {
    archive: {}, 
    active: {
      "Task": 0,
      "Idea": 0,
      "Random Thought": 0
    }
  }
  archive.forEach(item => {
    variables.archive[item.category] = variables.archive[item.category] + 1 || 1
  })
  allPosts.forEach(item => {
    variables.active[item.category] += 1 
  })

  const [postInModal, setPostInModal] = useState<IPost[]>([])
  const [form, setForm] = useState(false)
  const [edit, setEdit] = useState(false)
  const [isArchive, setIsArchive] = useState(false)
  const [error, setError] = useState('')
  const [post, setPost] = useState<IPost>({
    id:Math.random(), name:'', category:'Task', content:'', date:'', updatedDate:'', dateAt
  })
  
  const onModal = (id?:number | string, booleanValue?: boolean) => {
    setPostInModal([])
    if(booleanValue) {
      setIsArchive(true)
      archive.map(item => {
        if(item.category === id) {
          setPostInModal(prev => [...prev, item])
        }
      })
      open()
    } else {
      setIsArchive(false)
      allPosts.map(item => {
        if(item.id === id){
          setPostInModal(prev => [...prev, item])
        }
      })
      open()
    }
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const handleChangeSelect: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPost({...post, category: e.target.value})
  }

  const toggleForm = (editBoolean: boolean) => {
    const setEditBoolean = (boolean: boolean) => {
      setEdit(boolean)
      setPost({id:Math.random(), name:'', category:'Task', content:'', date:'', updatedDate:'', dateAt})
      setForm(prev=> !prev)
    }
    if(editBoolean === false){
      setEditBoolean(false)
    } else {
      setEditBoolean(true)
    }
  }

  const onAdd = () => {
    if(post.name !== '' || post.content !== '' || post.date !== ''){
      dispatch(taskCreated(post))
      toggleForm(false)
    } else {
      setError('Name, content and date cant be empty!')
      setTimeout(()=>{
        setError('')
      },3000)
    }
  }

  const onEdit = () => {
    let newArray: IPost[] = allPosts
    let idx: number = 0
    newArray.forEach((item, i) => {
      if(item.id === post.id) {
        idx = i
      }
    })
    if(post.date === '') {
      post.date = post.updatedDate
      post.updatedDate = ''
    }
    newArray[idx] = post
    dispatch(taskEdit(newArray))
    toggleForm(false)
  }

  const onDelete = (id: number):void => {
    dispatch(taskDeleted(id))
  }

  const onOpenEdit = (id: number) => {
    toggleForm(true)
    allPosts.map(item => {
      if(item.id === id){
        setPost(item)
      }
    })
  }
  
  const onAddToArchive = (id: number) => {
    allPosts.map((post) => {
      if(post.id === id){
        dispatch(addToArchive(post))
        dispatch(taskDeleted(id))
      }
    })
  }
  const onRemoveFromArchive = (id: number) => {
    archive.map(post => {
      if(post.id === id){
        dispatch(taskCreated(post))
      }
    })
    setPostInModal(prev => prev.filter(item => item.id !== id))
    dispatch(removeFromArchive(id))
  }

  return (
    <>
    <div className="container">
      {error !== '' ? <div className='error-div'>{error}</div> : <></>}
      <AllPosts onDelete={onDelete} onModal={onModal} onAddToArchive={onAddToArchive} allPosts={allPosts} onOpenEdit={onOpenEdit}/>
      
      <CreateBtn toggleForm={toggleForm}/>

      {modal && <Modal onRemoveFromArchive={onRemoveFromArchive} item={postInModal} onClose={close} isArchive={isArchive}/>}

      {form && <Form post={post} handleChange={handleChange} handleChangeSelect={handleChangeSelect} onAdd={onAdd} onEdit={onEdit} toggleForm={toggleForm} edit={edit}/>}
      
      <Archive onModal={onModal} activeCount={variables.active} archiveCount={variables.archive}/>
    </div>
    </>
  
  )
}

export default App

