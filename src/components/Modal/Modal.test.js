import { render, screen, fireEvent } from "@testing-library/react";

import Modal from "./Modal";

describe("Modal component Smoke test (Snapshot test)", () => {
    test("should Modal render", () => {
        const { asFragment } = render(
            <Modal
                header="Test-header"
                closeButton
                text="Test-text"
                actions={<button>Click</button>}
            />
        );

        expect(asFragment()).toMatchSnapshot();
    });

    describe("closeButton ckick", () => {
        const closeModalMock = jest.fn();

        test("should closeModal triggering by closeButton click", () => {
            render(
                <Modal
                    closeModal={closeModalMock}
                    header="Test-header"
                    closeButton
                    text="Test-text"
                />
            );
            // eslint-disable-next-line testing-library/no-debugging-utils
            screen.debug();

            const btnCrossIcon = screen.getByRole("button");
            fireEvent.click(btnCrossIcon);

            expect(closeModalMock).toHaveBeenCalled();
        });
    });
});
