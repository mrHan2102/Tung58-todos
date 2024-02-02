import {Outlet} from "react-router-dom";
import { Wrapper } from "./PageLayoutStyled";

const PageLayout = () => {
    return(
        <>
        <Wrapper>
            <h1>TO DO LIST</h1>
            <Outlet/>
        </Wrapper>
        </>
    )
}

export default PageLayout