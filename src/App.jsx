import React from 'react';
// import logo from './assets/download.png'
import logo from './assets/1741572054841.png'
import profile from './assets/Profile-PNG-Photo.png'

function App(props) {

  const topDiv = () => {
    return (
      <div className='
      flex items-center justify-center flex-col
      '>
        <img
        className='w-32 my-5'
        src={logo} alt="AMA Logo" />

        <p className='text-2xl text-[#6b6b6b]'>AMA EDUCATION SYSTEM</p>
        <p className='text-base my-[2px] font-medium text-[#6b6b6b]'>
          AMA Computer College
        </p>
        <p className='text-base font-medium text-[#6b6b6b] mb-5'>
          CERTIFICATE OF REGISTRATION
        </p>
      </div>
    )
  }

  const studentInfo = () => {
    const studentInt = (title, info) => {
      return (
        <p className='bg-[#ebebeb] p-2 rounded-xl font-medium
        text-gray-700 my-2'>
          <span className='font-bold mr-1 text-black'>
            {title}:
          </span>
          {info}
        </p>
      )
    }

    const schedule = () => {
      const container = (title, data1, data2, data3, data4, data5,
        data6, data7, isFlex
      ) => {
        return <div className={`border-r-[1px] border-gray-500
        flex flex-col gap-2 ${isFlex}`}>
          <div className='bg-[#dddcdc]
          p-2 font-bold w-full'>{title}</div>
          <div className='p-1 bg-[#BAD9DF] font-medium'>{data2}</div>
          <div className='p-1 bg-[#BAD9DF] font-medium'>{data3}</div>
          <div className='p-1 bg-[#F8D6D1] font-medium'>{data5}</div>
          <div className='p-1 bg-[#E1C0D4] font-medium'>{data4}</div>
          <div className='p-1 bg-[#E1C0D4] font-medium'>{data6}</div>
          <div className='p-1 bg-[#E29FBF] font-medium'>{data1}</div>
          <div className='p-1 bg-[#E29FBF] font-medium'>{data7}</div>
        </div>
      }

      return (
        <div className='bg-white rounded-xl p-2'>
                <p className='text-center text-2xl font-bold text-gray-600'>Student Schedule</p>
          <div className=' flex rounded-xl border-[1px]
          overflow-hidden my-5 mx-2'>
            {container(
              "Subject", 
              "ITE6220", 
              "PHYED6106",
              "CS6202",
              "CS6205",
              "GE6104",
              "ITE205A",
              "ITE6200",
              "flex-1"
            )}
            {container(
              "Description", 
              "Information Management", 
              "PATHFIT 3 (Fundamental of Dance)",
              "Algorithms and Complexity",
              "Automata Theory and Formal Language",
              "Gender and Society",
              "Information Assurance and Security 1",
              "Application Development & Emerging Tech",
              "flex-4"
            )}
            {container(
              "Units", 
              "3", 
              "2",
              "3", 
              "3", 
              "3", 
              "3", 
              "3", 
              "flex-1"
            )}
            {container(
              "Days", 
              "Fri", 
              "Mon", 
              "Mon", 
              "Wed", 
              "Tue", 
              "Wed", 
              "Fri", 
              "Fri", 
              "flex-1"
            )}
            {container(
              "Time", 
              "10:30AM - 11:30AM", 
              "11:00AM - 12:00AM", 
              "6:00PM - 7:00PM", 
              "10:30AM - 11:30AM", 
              "11:00AM - 12:00AM", 
              "6:00PM - 7:00PM", 
              "6:00PM - 7:00PM", 
              "10:30AM - 11:30AM", 
              "flex-2"
            )}
            {container(
              "Room", 
              "TBA", 
              "TBA", 
              "TBA", 
              "TBA", 
              "TBA", 
              "TBA", 
              "TBA", 
              "TBA", 
              "flex-1"
            )}
          </div>
        </div>
      )
    }

    return <div className='
    flex flex-row items-start justify-start gap-2
    lg:px-20 p-2
    '>

      <div className=' px-5 py-3
      bg-white rounded-xl
      '>
        <img
        className='w-20 rounded-full
        object-contain shadow-md shadow-gray-500'
        src={profile} alt="profile-icon" />

        <p className='mt-2 text-md w-[200px] font-medium 
        text-gray-600 select-none'>
          Ramos, Estremadura, Jhon Mohonrey
        </p>
        <p className='text-gray-400 font-medium
        select-none text-[18px]
        '>
          Student
        </p>

      </div>

      <div className='flex-1 '>
        <div className='mb-2'>
          {schedule()}
        </div>
        
        <div className='p-2 bg-white rounded-xl mb-2'>
          <p className='text-center text-2xl font-bold text-gray-600'>Student Info</p>

          <div className='flex gap-2'>

          <div className='flex-1'>
            {studentInt("🏫 Campus", "AMACC-Batangas")}
            {studentInt("🎓 Course/Plan", "Bachelor of Science in Computer Science")}
            {studentInt("📅 Sy/Term", "SY 2024-2025 (2427)")}
            {studentInt("🆔 Student ID", "18004438600")}
          </div>

          <div className='flex-1'>
            {studentInt("🌍 Nationality", "Filipino")}
            {studentInt("📆 Birthdate", "3/30/2000")}
            {studentInt("📊 Year Level", "2nd")}
            {studentInt("💳 Payment", "4Payment")}
          </div>

          </div>
        </div>

    
      </div>
    </div>
  }

  return (
    <div className='w-full flex items-start justify-center
     absolute top-0 bottom-0 right-0 left-0
    '>
      <div className=' w-full max-w-screen-2xl'>
        {topDiv()}
        {studentInfo()}
      </div>
    </div>
  );
}

export default App;