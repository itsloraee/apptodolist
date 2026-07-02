import React from 'react'
import ItemTask from './itemTask'
import { useSelector } from 'react-redux'
import { Root } from 'react-dom/client';
import { RootState } from '../redux/store';

function Tasks() {

// lecture de la liste des tâches
const tasks = useSelector ((state:RootState) => state.tasks.items)


  return (
       <ul role="list" className="divide-y divide-white/5">
         {
         tasks.map(item => <ItemTask key={item.id} /> )
         }
        
        </ul>
  )
}

export default Tasks