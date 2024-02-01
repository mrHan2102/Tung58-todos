import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  background: #fff;
  position: relative;
  display: flex;
  width: 100%;
  input {
    background: rgba(0, 0, 0, 0.003);
    color: #484848;
    font-size: 24px;
    line-height: 1.4em;
    padding: 16px 16px 16px 60px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    width: 100%;

    ::-ms-input-placeholder {
      font-style: italic;
    }

    ::placeholder {
      font-style: italic;
    }

    &:focus {
      outline: 1px solid #b83f45;
      box-shadow: 0 0 2px 2px #cf7d7d;
    }
  }

  .iconCheckAll {
    position: absolute;
    left: 0;
    width: 60px;
    top: 30%;
  }
`;

export const ItemTodoStyled = styled.div`
  background: #fff;
  position: relative;
  color: #484848;
  padding: 15px 15px 15px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  border: solid 1px #484848;

  .updateInput {
    background: rgba(0, 0, 0, 0.003);
    width: 100%;
    color: #484848;
    font-size: 24px;
    line-height: 1.4em;
    padding: 16px 16px 16px 60px;
    border: none;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    width: 100%;

    ::-ms-input-placeholder {
      font-style: italic;
    }

    ::placeholder {
      font-style: italic;
    }

    &:focus {
      outline: 1px solid #b83f45;
      box-shadow: 0 0 2px 2px #cf7d7d;
    }
  }

  .inputCheckBox {
    appearance: none;
    position: absolute;
    margin-left: -50px;
    z-index: 1000;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid #949494;
    outline: none;
    cursor: pointer;
  }
  .inputCheckBox:checked {
    background-color: #3ea390;
  }
`;
