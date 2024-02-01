import { InputWrapper } from "./FormSetTodoStyled";
import { Todo } from "../../interfaces/todo";
import { FaChevronDown } from "react-icons/fa";
import { useState, KeyboardEvent } from "react";
import { ToDoList, FooterButton } from "..";

const FormSetTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [toDoList, setToDoList] = useState<Todo[]>(() => {
    const List = localStorage.getItem("List");
    return List ? JSON.parse(List) : [];
  });

  const areAllCompleted = toDoList.every((todo) => todo.isCompleted);

  const handleAddTodo = () => {
    const newItem: Todo = {
      id: Date.now(),
      content: newTodo,
      isCompleted: false,
    };
    setToDoList((prevToDoList) => [...prevToDoList, newItem]);
    localStorage.setItem("List", JSON.stringify([...toDoList, newItem]));
    setNewTodo("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleRemoveItem = (idToRemove: number) => {
    const updatedList = toDoList.filter((item) => item.id !== idToRemove);
    setToDoList(updatedList);
    localStorage.setItem("List", JSON.stringify(updatedList));
  };

  const handleToggleAll = () => {
    const allCompleted = toDoList.every((item) => item.isCompleted);
    const updatedTodos = toDoList.map((item) => ({
      ...item,
      isCompleted: !allCompleted,
    }));
    setToDoList(updatedTodos);
  };

  const handleToggle = (id: number) => {
    setToDoList((prevTodos: Todo[]) =>
      prevTodos.map((item: Todo) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const handleEditItem = (id: number, newContent: string) => {
    const updatedList = toDoList.map((item) =>
      item.id === id ? { ...item, content: newContent } : item
    );
    setToDoList(updatedList);
    localStorage.setItem("List", JSON.stringify(updatedList));
  };

  const handleRemoveCompleted = () => {
    const updatedList = toDoList.filter((todo) => !todo.isCompleted);
    setToDoList(updatedList);
    localStorage.setItem("List", JSON.stringify(updatedList));
  };

  return (
    <>
      <InputWrapper>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {toDoList.length > 0 && (
          <FaChevronDown
            className="iconCheckAll"
            size={25}
            color={areAllCompleted ? "#949494" : "#484848"}
            onClick={handleToggleAll}
          />
        )}
      </InputWrapper>
      <ToDoList  toDoList={toDoList} handleRemove={handleRemoveItem} handleToggle={handleToggle} handleEdit={handleEditItem}/>
      {toDoList.length > 0 && <FooterButton toDoList={toDoList} handleRemoveCompleted={handleRemoveCompleted}/>}
    </>
  );
};
export default FormSetTodo;
