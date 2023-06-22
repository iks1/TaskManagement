import React from "react"
import Card from "./Card"

import {todo,doing,done} from './BoardData'

const boards=[
    {'id':1,'title':'Todo','cards':todo},
    {'id':2,'title':'Doing','cards':doing},
    {'id':3,'title':'Done','cards':done}
]

const List = () => {
    return (
        <>
            {boards.length > 0 && boards.map((board) => (
                <div className='p-3 w-1/3'>
                    <div className='p-3 bg-gray-200 '>
                    <div key={board.id}>{board.title}</div>
                    {board.cards.map((card) => ( 
                        <Card key={card.topics} card={card} />
                    ))}
                    </div>
                </div>))}
        </>
    )
}

export default List