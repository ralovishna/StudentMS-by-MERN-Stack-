// Student.jsx
import React from 'react';
import studentPic from '../../assets/student.png'
import { MdDelete, MdEditSquare } from 'react-icons/md';
import { Link } from 'react-router-dom';
const SingleStudent = ({ name, email, group, homework, attendance, score }) => {
  return (
    <tr className='hover:bg-blue-100'> 
      <td className="py-2 px-4 border-b border-gray-200 flex items-center gap-3 ">
        <img src={studentPic} alt=""  className='w-12 h-12 rounded-full'/>
        <div >
        <div className="font-semibold text-xl">{name}</div>
        <div className="text-lg text-gray-500">{email}</div>
        </div>
      </td>
      <td className="py-2 px-4 border-b border-gray-200 text-xl">{group}</td>
      {/* <td className="py-2 px-4 border-b border-gray-200">{homework}</td> */}
      <td className="py-2 px-4 border-b border-gray-200 text-xl">{attendance}</td>
      <td className="py-2 px-4 border-b border-gray-200 text-xl">{score}</td>
      <td className="py-4 px-4 border-b border-gray-200 text-3xl flex  
      items-center justify-center gap-5
      ">

     <Link to={'/'}> <MdEditSquare  className='text-blue-900'/></Link>
      <MdDelete  />
      </td>
    </tr>
  );
};

export default SingleStudent;
