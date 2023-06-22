import React from 'react'
import foldericon from './file.svg'
import messageicon from './message.svg'


const Card = ({ card }) => {
  return (
    <div className='bg-white mt-2 w-[314px] h-auto flex flex-col justify-evenly rounded-2xl p-[16px]'>
      <div>
        <div style={{
          backgroundColor: card.priority === 'Low' ? '#DFA874' : card.priority === 'High' ? '#D8727D' : '#83C29D',
          color: card.priority === 'Low' ? '#D58D49' : card.priority === 'High' ? 'red' : '#68B266'
        }} className='font-medium text-[12px] h-[23px] w-auto inline-block p-[4px] rounded'>
          {card.priority ? card.priority : card.status}
        </div>
      </div>
      <div>
        <h3 className='font-bold text-[18px]'>{card.topics}</h3>
        {card.description && <p className='text-[12px]'>{card.description}</p>}
        {card.image && <img className='object-scale-down w-[281.68px] h-[110px]' src={card.image} alt='image'/>}
      </div>
      <div className='flex flex-row'>
        <Messagebox card={card}/>
        <Filebox file={card}/>
      </div>
    </div>
  )
}

export default Card

const Filebox = ({file})=>{
  return(
     <div className='text-[12px] flex flex-row items-center'>
       <img src={foldericon} alt="file" className='h-3 w-3'/>
       <p>{file.nooffiles} files</p>
     </div>
  )
}

const Messagebox =({card})=>{
  return(
     <div className='text-[12px] flex flex-row items-center'>
        <img src={messageicon} alt="messagebox" className='w-3 h-3'/>
        <p>{card.noofcomments} comments</p>
     </div>
  )
}
