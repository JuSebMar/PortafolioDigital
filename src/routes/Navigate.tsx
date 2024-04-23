import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { AppLayOut } from "../common/layout/ApplayOut";

export const Navigate = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayOut />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
