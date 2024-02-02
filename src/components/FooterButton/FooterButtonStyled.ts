import styled from "@emotion/styled";

export const FooterStyled = styled.div`
  display: flex;
  background: #e4dcdc;
  justify-content: space-between;
  border-top: 1px solid #e6e6e6;
  font-size: 15px;
  height: 20px;
  padding: 10px 15px;
  color: #000;
  position: relative;

  .link {
    position: relative;
    z-index: 1;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const ButtonListStyled = styled.div`
  position: relative;
  z-index: 1;
  ul {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 5px;
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      padding: 0 5px;
      a {
        font-weight: normal;
        color: #000;
      }

      &.active {
        border: 1px solid #ce4646;
        border-radius: 3px;
      }
    }
  }
`;