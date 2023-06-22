import React from 'react'



const messagebox =({card})=>{
  return(
     <div className='text-[12px]'>
       message
     </div>
  )
}

const filebox = ({file})=>{
  return(
     <div className='text-12px'>
       file
     </div>
  )
}

const Card = ({ card }) => {
  return (
    <div className='bg-white p-2 mt-2 w-[314px] h-[177px]'>
      <div>
        <div style={{
          backgroundColor: card.priority === 'Low' ? '#DFA874' : card.priority === 'High' ? '#D8727D' : '#83C29D',
          color: card.priority === 'Low' ? '#D58D49' : card.priority === 'High' ? 'red' : '#68B266'
        }} className='font-medium text-[12px] h-[23px] w-auto inline-block p-[4px]'>
          {card.priority ? card.priority : card.status}
        </div>
      </div>
      <div>
        <h3>{card.topics}</h3>
        {card.description && <p>{card.description}</p>}
        {card.image && <img src={card.image}/>}
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Card
