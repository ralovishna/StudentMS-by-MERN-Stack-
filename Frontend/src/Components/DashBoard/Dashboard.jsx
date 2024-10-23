import React from 'react'
import Greeting from './Greeting'
import ScoreBoard from '../ScoreBoard/ScoreBoard'
import Todo from './ToDoList/Todo'
const Dashboard = () => {
  return (
    <>
      <div className='w-full '>


     <Greeting/>
     <div className='flex items-center justify-center'>
     <ScoreBoard/>
     <Todo/>
     </div>
     
      </div>

    </>
  )
}

export default Dashboard 