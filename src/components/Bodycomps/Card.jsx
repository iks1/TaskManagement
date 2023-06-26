import React from 'react'
import foldericon from '../../icons/file.svg'
import messageicon from '../../icons/message.svg'
import cardpic from '../../icons/cardpic.svg'

const Card = ({ card }) => {
  return (

    <div className='bg-white mt-2 w-[314px] h-auto flex flex-col justify-evenly rounded-2xl p-[16px] cursor-pointer'>
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
        {card.description && <p className='text-[12px] text-[#787486]'>{card.description}</p>}
        {card.image && <img className='object-scale-down w-[281.68px] h-[110px]' src={card.image} alt='image' />}
        {/* {card.images && card.images.map((image, index) => (
          <img className='object-scale-down' src={image} alt='image' />
        ))} */}
      </div>
      <div className='flex flex-row items-center'>
        <div className='flex justify-start basis-[45%]'>
           <img className='' src={cardpic} alt="profile" />
        </div>
        <Messagebox card={card} />
        <Filebox file={card} />
      </div>
    </div>

  )
}

export default Card

const Filebox = ({ file }) => {
  return (
    <div className='text-[12px] flex flex-row items-center m-2'>
      <img src={foldericon} alt="file" className='h-3 w-3' />
      <p className='text-[#787486]'>{file.nooffiles} files</p>
    </div>
  )
}

const Messagebox = ({ card }) => {
  return (
    <div className='text-[12px] flex flex-row items-center'>
      <img src={messageicon} alt="messagebox" className='w-3 h-3' />
      <p className='text-[#787486]'>{card.noofcomments} comments</p>
    </div>
  )
}
