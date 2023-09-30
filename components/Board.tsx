'use client'
import { useEffect } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { useBoardStore } from '@/store/BoardStore';
// import Column from './Column';

function Board() {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);

  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const handelOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
  };

  console.log("board",board.columns.entries());

  return (
    <h1>board</h1>
    // <DragDropContext onDragEnd={handelOnDragEnd}>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => (
    //       <div className='grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto' {...provided.droppableProps} ref={provided.innerRef}>
    //         {Array.from(board.columns.entries()).map([id,column],index)=>(
    //           <Column key={id} todos={column.todos} index={index}/>
    //         )}
    //       </div>
    //     )}
    //   </Droppable>
    // </DragDropContext>
  );
}

export default Board;
