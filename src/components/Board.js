import React from "react"
import Card from "./Card"
import { todo, doing, done } from './BoardData'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import Head from "./cardcomponents/Head"

const boards = [
    { 'id': '1', 'title': 'Todo', 'cards': todo,'length':todo.length,'color':'bg-[#5030E5]'},
    { 'id': '2', 'title': 'On Progress', 'cards': doing,'length':doing.length,'color':'bg-[#FFA500]' },
    { 'id': '3', 'title': 'Done', 'cards': done,'length':done.length ,'color':'bg-[#8BC48A]'}
]

const List = () => {
    return (
        <DragDropContext>
            {boards.length > 0 && boards.map((board,index) => (
                <div className='p-3 w-1/3'>
                    <Droppable droppableId={board.id}>
                        {provided => (
                            
                        <div  ref={provided.innerRef}
                        {...provided.droppableProps}
                        className='p-3 bg-[#F5F5F5] rounded-2xl flex flex-col items-center'>
                            <Head board={board} />
                            {board.cards.map((card,index) => (
                                <Draggable key={card.id} draggableId={card.id} index={index}>
                                {(provided)=>(
                                    <div ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}>
                                    <Card card={card} />
                                    </div>
                                )}
                                </Draggable>
                            ))}
                        </div>)}
                    </Droppable>
                </div>))}
        </DragDropContext>
    )
}

export default List