import { fireEvent, render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button component Smoke test (Snapshot test)", () => {
    test("should Button render", () => {
        const { asFragment } = render(
            <Button
                type="reset"
                backgroundColor="red"
                text="Test text"
                isDisabled={true}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    describe("Button ckick", () => {
        const onClickMock = jest.fn();

        test("should onClick triggering by button click", () => {
            render(<Button onClick={onClickMock} text="Test text" />);
            // eslint-disable-next-line testing-library/no-debugging-utils
            screen.debug();

            const btn = screen.getByRole("button");
            fireEvent.click(btn);

            expect(onClickMock).toHaveBeenCalled();
        });
    });
});
