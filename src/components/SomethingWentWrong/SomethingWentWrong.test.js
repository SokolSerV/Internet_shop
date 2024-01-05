import { render } from "@testing-library/react";

import SomethingWentWrong from "./SomethingWentWrong";

describe("SomethingWentWrong component Smoke test (Snapshot test)", () => {
    test("should SomethingWentWrong render", () => {
        const { asFragment } = render(<SomethingWentWrong />);

        expect(asFragment()).toMatchSnapshot();
    });
});
