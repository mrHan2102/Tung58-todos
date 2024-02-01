import React from "react";
import { TypeList } from "./components";
import { Todo } from "../../interfaces/todo";
import { TodoListStyled } from "./ToDoListStyled";

interface TodoListContainerProps {
  toDoList: Todo[];
  handleToggle: (id: number) => void;
  handleRemove: (id: number) => void;
  handleEdit: (id: number, newText: string) => void;
}

const TodoListContainer: React.FC<TodoListContainerProps> = ({
  toDoList,
  handleToggle,
  handleRemove,
  handleEdit,
}) => {
  const storedType = localStorage.getItem("type");
  const AllItems = () => {
    return (
      <>
        {toDoList.map((item) => (
          <TypeList
            key={item.id}
            todo={item}
            handleToggle={handleToggle}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
          />
        ))}
      </>
    );
  };
  const ActiveItems = () => {
    return (
      <>
        {toDoList
          .filter((item) => item.isCompleted === false)
          .map((item) => (
            <TypeList
              key={item.id}
              todo={item}
              handleToggle={handleToggle}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
            />
          ))}
      </>
    );
  };
  const CompletedItems = () => {
    return (
      <>
        {toDoList
          .filter((item) => item.isCompleted === true)
          .map((item) => (
            <TypeList
              key={item.id}
              todo={item}
              handleToggle={handleToggle}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
            />
          ))}
      </>
    );
  };
  return (
    <TodoListStyled>
      {storedType == "All" ? (
        <AllItems />
      ) : storedType == "Active" ? (
        <ActiveItems />
      ) : (
        <CompletedItems />
      )}
    </TodoListStyled>
  );
};

export default TodoListContainer;
