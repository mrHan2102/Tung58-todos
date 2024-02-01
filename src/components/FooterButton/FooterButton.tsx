import { Todo } from "../../interfaces/todo";
import { Link, useLocation } from "react-router-dom";
import { FooterStyled, ButtonListStyled } from "./FooterButtonStyled";

interface FooterProps {
  toDoList: Todo[];
  handleRemoveCompleted: () => void;
}

const FooterButton = (props: FooterProps) => {
  const { toDoList, handleRemoveCompleted } = props;
  const completedTodoCount = toDoList.filter(
    (item) => !item.isCompleted
  ).length;
  const location = useLocation();
  return (
    <FooterStyled>
      <span>
        {completedTodoCount} item{completedTodoCount > 1 && "s"} left!
      </span>
      <ButtonListStyled>
        <nav>
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/" onClick={() => localStorage.setItem("type", "All")}>All</Link>
            </li>
            <li className={location.pathname === "/active" ? "active" : ""}>
              <Link to="/active" onClick={() => localStorage.setItem("type", "Active")}>Active</Link>
            </li>
            <li className={location.pathname === "/completed" ? "active" : ""}>
              <Link to="/completed" onClick={() => localStorage.setItem("type", "Completed")}>Completed</Link>
            </li>
          </ul>
        </nav>
      </ButtonListStyled>
      <span className="link" onClick={() => handleRemoveCompleted()}>
        Clear completed
      </span>
    </FooterStyled>
  );
};

export default FooterButton;
