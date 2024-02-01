import React, { useState } from 'react';
import { Todo } from '../../../../interfaces/todo';
import { ItemTodoStyled } from './TypeListStyled';
import { X } from "lucide-react"
interface TodoItemProps {
    todo: Todo;
    handleToggle: (id: number) => void;
    handleRemove: (id: number) => void;
    handleEdit: (id: number, newText: string) => void;
  }
  
  const TypeList: React.FC<TodoItemProps> = ({ todo, handleToggle, handleRemove, handleEdit }) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const handleBlur = () => {
        setIsEditing(false);
    };
  
    const handleKeyDownToEdit = (event: React.KeyboardEvent<HTMLInputElement>, todoId: number) => {
      if (event.key === 'Enter') {
        handleEdit(todoId, (event.target as HTMLInputElement).value);
      }
    };
  
    return (
      <ItemTodoStyled completed={todo.isCompleted} isEditing={isEditing}>
        {
          !isEditing ? 
            <div className='item'>
              <div className="itemCheckbox">
                <div className='itemLabel'>
                  <input type="checkbox" name={`checkDone_${todo.id}`} id={`checkDone_${todo.id}`} onClick={() => handleToggle(todo.id)} defaultChecked={todo.isCompleted ? true : false} />
                  <label htmlFor={`checkDone_${todo.id}`} className='labelCheckbox'></label>
                </div>
              </div>
              <div className="itemContent">
                <div className='itemInput' onDoubleClick={() => setIsEditing(true)}>{todo.content}</div>
                <div className="btnRemove" onClick={() => handleRemove(todo.id)}>
                  <X/>
                </div>
              </div>
            </div> :
            <div className='itemInputEditing'>
              <input
              className="inputEditing"
                type="text"
                defaultValue={todo.content}
                onKeyDown={(e) => handleKeyDownToEdit(e, todo.id)}
                onBlur={handleBlur}
                autoFocus
              />
            </div>
        }
      </ItemTodoStyled>
    );
  };
  
  export default TypeList;