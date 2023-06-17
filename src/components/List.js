import React from 'react'
import Addnew from './Addnew'
import Card from './Card'
import { useSelector } from 'react-redux'

const List = () => {
    const list = useSelector(store => store.liststate.list)
    return (
        <>

            {list.length > 0 && list.map((item) => (
                <div className='p-3 w-1/3'>
                    <div className='p-3 bg-gray-200 '>
                    <div  key={item.id}>{item.title}</div>
                    {item?.cards?.length > 0 && item.cards.map((card) => ( 
                        <Card key={card.id} card={card.title} />
                    ))}
                    <div>
                        <Addnew type='card' parentId={item.id}/>
                    </div>
                    </div>
                </div>))}
            <div className='p-3 w-1/3'>
            <div className='p-3 bg-gray-200 '>
                <Addnew />
                </div>
            </div>
        </>
    )
}

export default List
