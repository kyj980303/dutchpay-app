import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { CreateDuchPay, Expense, Main } from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/createDuchPay" element={<CreateDuchPay />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
};
