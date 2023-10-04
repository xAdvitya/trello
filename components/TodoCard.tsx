import { XCircleIcon } from '@heroicons/react/20/solid';
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from 'react-beautiful-dnd';

type Props = {
  todo: Todo;
  index: number;
  id: TypedColumn;
  innerRef: (element: HTMLElement | null) => void;
  draggableProps: DraggableProvidedDraggableProps;
  draggableHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};
function TodoCard({
  todo,
  index,
  id,
  innerRef,
  draggableProps,
  draggableHandleProps,
}: Props) {
  return (
    <div
      className="bg-white rounded-md space-y-2 drop-shadow-md"
      {...draggableProps}
      {...draggableHandleProps}
      ref={innerRef}
    >
     <div className='flex justify-between item-center p-5'>
        <p>{todo.title}</p>
        <button className='text-red-500 hover:text-red-600'>
            <XCircleIcon className='ml-5 h-8 w-8'/>
        </button>

     </div>
    </div>
  );
}

export default TodoCard;
