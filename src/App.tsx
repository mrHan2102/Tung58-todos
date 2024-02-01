import { PageLayout, FormSetTodo } from "./components";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<PageLayout />}>
          <Route index element={<FormSetTodo />} />
          <Route path="/active" element={<FormSetTodo />} />
          <Route path="/completed" element={<FormSetTodo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
