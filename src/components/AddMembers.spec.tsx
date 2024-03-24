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
  const saveButton = screen.getByText("추가");

  return {
    input,
    saveButton,
  };
};

describe("모임 멤버 추가 input 박스", () => {
  test("모임 멤버 입력 input 박스가 렌더링 되는가", () => {
    const { input, saveButton } = renderComponent();

    expect(input).not.toBeNull;
    expect(saveButton).not.toBeNull;
  });

  // test('모임 멤버를 입력하지 않고 "추가" 버튼을 클릭 시, 에러 메시지를 노출한다.', async () => {
  //   const {saveButton} = renderComponent()

  //   await userEvent.click(saveButton)

  //   const errorMessage = await screen.findByText('모임 멤버들의 이름을 입력해 주세요.')
  //   expect(errorMessage).toBeInTheDocument() // errorMessage가 현재 document에 존재하는지
  // })

  test('모임 멤버를 입력한 후, "추가" 버튼 클릭 시, 저장에 성공', async () => {
    const { input, saveButton } = renderComponent();

    await userEvent.type(input, "철수 영희 영수"); // type : 예시
    await userEvent.click(saveButton);

    const errorMessage = screen.queryByText(
      "모임 멤버의 이름을 입력해 주세요."
    );
    expect(errorMessage).toBeNull; // 에러메시지가 노출되지 않아야 성공한거니깐 toBeNull이 되어야함
  });
});
