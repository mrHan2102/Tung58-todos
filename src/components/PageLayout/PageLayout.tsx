import {Outlet} from "react-router-dom";
import { Wrapper } from "./PageLayoutStyled";

const PageLayout = () => {
    return(
        <>
        <Wrapper>
            <h1>todos</h1>
            <Outlet/>
        </Wrapper>
        </>
    )
}

export default PageLayout