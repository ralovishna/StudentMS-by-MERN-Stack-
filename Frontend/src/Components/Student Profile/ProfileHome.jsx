import React from 'react';
import Student  from '../../assets/student.png'
const ProfileHome = () => {
  return (
    <div className='bg-white   '>
      
 
        <div className="bg-[#925fe2] text-white py-10 px-6  rounded-2xl m-3 w-[95%]">
          <h1 className="text-5xl font-semibold">Student Profile</h1>
          <p>View Profile</p>
        </div>
        <div className="w-[90%] mx-auto p-6 h-[480px] m-2 border-[3px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-40 h-40 rounded-full bg-gray-300"></div>
              <div className="ml-4">
                <h2 className="text-4xl font-semibold">Raman kumar</h2>
              </div>
            </div>
            <button className="px-4 py-2 bg-yellow-500 text-white rounded-md">View Reports</button>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 pr-4">
              <h3 className="text-2xl font-semibold">Personal details</h3>
              <p><strong>Gender:</strong> Male</p>
              <p><strong>Birth Date:</strong> 15th July 2011</p>
              <p><strong>Email :</strong> something@gmail.com</p>
              <p><strong>Phone No</strong> 9876543210</p>
             
            </div>
            <div className="w-1/2 pl-4">
              <h3 className="text-2xl font-semibold">Class details</h3>
              <p><strong>Roll No : </strong> 5737</p>
              <p><strong>Course / Branch :</strong>  BCA</p>
              <p><strong>Batch :</strong> 2022-2025</p>
              <p><strong>Status:</strong> <span className="text-green-500">Pursuing</span></p>
            </div>
          </div>
          <div className="text-center mt-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md ">Update</button>
          </div>
        </div>
      
    </div>
  );
}

export default ProfileHome;
