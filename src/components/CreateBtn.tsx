import React, {useState} from 'react'
import {IPost} from '../models'

interface PostProps {
  toggleForm: (editBoolean: boolean) => void
}

export function CreateBtn({ toggleForm }: PostProps) {

  return (
    <div className="add-btn">
        <a onClick={() => toggleForm(false)} href="#" className="glow-button">Create Note</a>
    </div>
  )
}