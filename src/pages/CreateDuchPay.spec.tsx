import { render, screen } from "@testing-library/react";
import { CreateDuchPay } from ".";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

const renderComponent = () => {
  render(
    <BrowserRouter>
      <RecoilRoot>
        <CreateDuchPay />
      </RecoilRoot>
    </BrowserRouter>
  );
  // screen: 현재 렌더링 된 화면을 가리킴
  const input1 = screen.getByPlaceholderText("모임명을 입력해 주세요.");
  const input2 = screen.getByPlaceholderText("내용을 입력해 주세요.");
  const input3 = screen.getByPlaceholderText("총 사용금액을 입력해 주세요.");
  const input4 = screen.getByPlaceholderText("결제자를 입력해 주세요.");
  const input5 = screen.getByPlaceholderText("날짜를 입력해 주세요.");
  const createButton = screen.getByText("추가");
  const errorMessage1 = screen.queryByText("모임명을 입력해 주세요.");
  const errorMessage2 = screen.queryByText("내용을 입력해 주세요.");
  const errorMessage3 = screen.queryByText("총 사용금액을 입력해 주세요.");
  const errorMessage4 = screen.queryByText("결제자를 입력해 주세요.");
  const errorMessage5 = screen.queryByText("날짜를 입력해 주세요.");

  return {
    input1,
    input2,
    input3,
    input4,
    input5,
    createButton,
    errorMessage1,
    errorMessage2,
    errorMessage3,
    errorMessage4,
    errorMessage5,
  };
};

describe("더치페이 생성 페이지", () => {
  test("더치페이 생성 컴포넌트가 렌더링 되는가?", () => {
    const { input1, input2, input3, input4, input5, createButton } =
      renderComponent();

    // input1 이 null이 아니길 기대한다라는 뜻
    expect(input1).not.toBeNull();
    expect(input2).not.toBeNull();
    expect(input3).not.toBeNull();
    expect(input4).not.toBeNull();
    expect(input5).not.toBeNull();
    expect(createButton).not.toBeNull();
  });

  // test('모임 이름, 종 인원, 내용, 총 사용금액, 결제자, 날짜를 입력하지 않고 "추가" 버튼을 클릭 시, 에러 메시지를 노출한다.', async () => {
  //   const {
  //     createButton,
  //     errorMessage1,
  //     errorMessage2,
  //     errorMessage3,
  //     errorMessage4,
  //     errorMessage5,
  //     errorMessage6,
  //   } = renderComponent();

  //   await userEvent.click(createButton);
  //   expect(errorMessage1).not.toBeNull();
  //   expect(errorMessage2).not.toBeNull();
  //   expect(errorMessage3).not.toBeNull();
  //   expect(errorMessage4).not.toBeNull();
  //   expect(errorMessage5).not.toBeNull();
  //   expect(errorMessage6).not.toBeNull();
  // });

  test('모임 이름, 종 인원, 내용, 총 사용금액, 결제자, 날짜를 입력한 후, "추가" 버튼 클릭 시, 생성 성공.', async () => {
    const {
      input1,
      input2,
      input3,
      input4,
      input5,
      createButton,
      errorMessage1,
      errorMessage2,
      errorMessage3,
      errorMessage4,
      errorMessage5,
    } = renderComponent();

    await userEvent.type(input1, "예시 모임명");
    await userEvent.type(input2, "예시 내용");
    await userEvent.type(input3, "예시 사용금액");
    await userEvent.type(input4, "예시 결제자");
    await userEvent.type(input5, "예시 날짜");
    await userEvent.click(createButton);

    expect(errorMessage1).toBeNull();
    expect(errorMessage2).toBeNull();
    expect(errorMessage3).toBeNull();
    expect(errorMessage4).toBeNull();
    expect(errorMessage5).toBeNull();
  });
});
