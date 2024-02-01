import styled from "@emotion/styled";

export const ItemTodoStyled = styled.div<{
  completed: boolean;
  isEditing: boolean;
}>`
  position: relative;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "gray" : "#000")};
  padding: 15px 15px 15px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;

  border: 1px solid ${(props) => (props.isEditing ? "#b83f45" : "none")};
  box-shadow: ${(props) => (props.isEditing ? "0 0 2px 2px #cf7d7d" : "none")};

  &:not(:nth-of-type(1)) {
    border-top: 1px solid
      ${(props) => (props.isEditing ? "#b83f45" : "#e6e6e6")};
  }

  .itemInputEditing {
    width: 100%;
  }

  .inputEditing {
    background: rgba(0, 0, 0, 0.003);
    color: #484848;
    font-size: 20px;
    padding: 7px 0;
    border: none;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  .item {
    display: flex;
    width: 100%;

    .itemCheckbox {
      position: absolute;
      left: 10px;

      input {
        background: rgba(0, 0, 0, 0.003);
        visibility: ${(props) => (props.completed ? "visible" : "hidden")};

        &:checked + .itemLabel .labelCheckbox {
          background-color: #fff;
          border-color: ${(props) => (props.completed ? "#66bb6a" : "#ccc")};

          &:after {
            opacity: ${(props) => (props.completed ? "1" : "0")};
          }
        }
      }

      .itemLabel {
        position: relative;

        .labelCheckbox {
          background-color: #fff;
          border: 1px solid ${(props) => (props.completed ? "#66bb6a" : "#ccc")};
          border-radius: 50%;
          cursor: pointer;
          height: 28px;
          left: 0;
          position: absolute;
          top: 0;
          width: 28px;

          &:after {
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            content: "";
            height: 6px;
            left: 7px;
            opacity: ${(props) => (props.completed ? "1" : "0")};
            border-color: ${(props) => (props.completed ? "#66bb6a" : "unset")};
            position: absolute;
            top: 8px;
            transform: rotate(-45deg);
            width: 12px;
          }
        }
      }
    }

    .itemContent {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .itemInput {
        width: 100%;
      }
    }

    .btnRemove {
      align-items: center;

      &:hover {
        cursor: pointer;
        color: #b83f45;
      }
    }

    &:hover .itemContent {
      .item__btn__remove {
        display: flex;
      }
    }
  }
`;
