import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store";

import Header from "./Header";

const Component = () => {
    return (
        <Provider store={store}>
            <Header />
        </Provider>
    );
};

jest.mock("../Navigation", () => () => <div>Navigation</div>);

describe("Header component Smoke test (Snapshot test)", () => {
    test("should Header render", () => {
        const { asFragment } = render(<Component />);

        expect(asFragment()).toMatchSnapshot();
    });
});
