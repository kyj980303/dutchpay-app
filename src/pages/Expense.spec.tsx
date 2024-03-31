import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { Expense } from "./Expense";

const renderComponent = () => {
  render(
    <RecoilRoot>
      <Expense />
    </RecoilRoot>
  );
};

describe("비용 정산 결과 페이지", () => {
  // 비용 정산 결과 컴포넌트 관련 테스트
  test("비용 정산 결과 컴포넌트 렌더링", () => {
    renderComponent();
    const expenseListComponent = screen.getByTestId("expenseList"); // 정산 결과 리스트
    expect(expenseListComponent).toBeInTheDocument();
  });

  // test("모임 명, 총 사용 금액, 총 인원, 결제자, 결제일 데이터가 보여지는가?", () => {
  //   const expenseListComponent = screen.getByTestId("expenseList");
  // });
});
