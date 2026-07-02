
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface Task { // corresponds à la tâche
  id: string;
  title: string;
  completed: boolean;
}

interface Tasks {
  items : Task [] ; // corresponds au tableau de tâche

}

// Define the initial state using that type
const initialState: Tasks = {
  items:[{id:'1235ab' , title: 'Jouer à La Brute' , completed:false},
         {id:'2468cd' , title: 'Coder TamaTunes' , completed:true},
  ]
}

export const tasksSlice = createSlice({
  name: 'tasks',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
   // ajoute une tâche
   addTask: () => {

   },

   // modifie une tâche
   toggleTask : () => {

   },

   // supprimer une tâche
   removeTask: () => {

   }
  },
})

export const {addTask, toggleTask, removeTask } = tasksSlice.actions



export default tasksSlice.reducer