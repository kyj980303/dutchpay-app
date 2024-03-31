import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RecoilRoot } from "recoil";
import { AddMembers } from "./AddMembers";

const renderComponent = () => {
  render(
    <RecoilRoot>
      <AddMembers />
    </RecoilRoot>
  );

  // getByTestId: 아래 div 태그의 id를 가져와 접근할 수 있음
  // <div data-testid="id"></div>
  const input = screen.getByTestId("input-member-names");

  return {
    input,
  };
};

describe("모임 멤버 추가 input 박스", () => {
  test("모임 멤버 입력 input 박스가 렌더링 되는가", () => {
    const { input } = renderComponent();

    // expect(input).not.toBeNull;
  });

  // test('모임 멤버를 입력하지 않고 "추가" 버튼을 클릭 시, 에러 메시지를 노출한다.', async () => {
  //   const {saveButton} = renderComponent()

  //   await userEvent.click(saveButton)

  //   const errorMessage = await screen.findByText('모임 멤버들의 이름을 입력해 주세요.')
  //   expect(errorMessage).toBeInTheDocument() // errorMessage가 현재 document에 존재하는지
  // })

  test("모임 멤버를 입력 되었는가", () => {
    const { input } = renderComponent();

    // 모임 멤버를 입력
    userEvent.type(input, "John, Mary");

    // 입력한 값이 올바르게 반영되었는지 확인
    expect(input).toHaveValue("John, Mary");
  });
});
