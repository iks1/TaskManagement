import React from "react"
import Card from "./Card"
import { todo, doing, done } from './BoardData'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

const boards = [
    { 'id': '1', 'title': 'Todo', 'cards': todo },
    { 'id': '2', 'title': 'Doing', 'cards': doing },
    { 'id': '3', 'title': 'Done', 'cards': done }
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
                            <div key={board.id}>{board.title}</div>
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