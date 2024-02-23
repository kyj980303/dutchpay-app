import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateDuchPay, Expense, Main } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/createDuchPay" element={<CreateDuchPay />} />
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </BrowserRouter>
  );
};
