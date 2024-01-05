import { render } from "@testing-library/react";

import ToggleView from "./ToggleView";

describe("ToggleView component Smoke test (Snapshot test)", () => {
    test("should ToggleView render", () => {
        const { asFragment } = render(<ToggleView />);

        expect(asFragment()).toMatchSnapshot();
    });
});
