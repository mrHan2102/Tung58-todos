import { InputWrapper } from "./FormSetTodoStyled";
import { Todo } from "../../interfaces/todo";
import { useState, KeyboardEvent } from "react";
import { ToDoList, FooterButton } from "..";
import { FaCheckCircle } from "react-icons/fa";

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
    const updatedList = updatedTodos.map((item: Todo) => ({ ...item }));
    localStorage.setItem("List", JSON.stringify(updatedList));
  };

  const handleToggle = (id: number) => {
    const updatedToggle = toDoList.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setToDoList(updatedToggle);
    localStorage.setItem("List", JSON.stringify(updatedToggle))
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
          placeholder="Enter the new item"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {toDoList.length > 0 && (
          <FaCheckCircle
            className="iconCheckAll"
            size={25}
            color={areAllCompleted ? "#484848" : "#949494"}
            onClick={handleToggleAll}
          />
        )}
      </InputWrapper>
      <ToDoList
        toDoList={toDoList}
        handleRemove={handleRemoveItem}
        handleToggle={handleToggle}
        handleEdit={handleEditItem}
      />
      {toDoList.length > 0 && (
        <FooterButton
          toDoList={toDoList}
          handleRemoveCompleted={handleRemoveCompleted}
        />
      )}
    </>
  );
};
export default FormSetTodo;
