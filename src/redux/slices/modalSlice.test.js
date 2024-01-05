import modalReducer, { handlerModal } from "./modalSlice";

const initialValue = {
    isModalAdd: false,
    isModalDel: false,
};

describe("modalReducer test", () => {
    test("should modalReducer return default value whithout state and action", () => {
        expect(modalReducer(undefined, { type: undefined })).toEqual(
            initialValue
        );
    });

    test("should modalReducer changed isModalAdd value by handlerModal action whith payload 'isModalAdd'", () => {
        const payloadMock = "isModalAdd";

        expect(modalReducer(undefined, handlerModal(payloadMock))).toEqual({
            isModalAdd: true,
            isModalDel: false,
        });
    });

    test("should modalReducer changed isModalDel value by handlerModal action whith payload 'isModalDel'", () => {
        const payloadMock = "isModalDel";

        expect(modalReducer(undefined, handlerModal(payloadMock))).toEqual({
            isModalAdd: false,
            isModalDel: true,
        });
    });

    test("should modalReducer not changed state by handlerModal action whith another payload value", () => {
        const payloadMock = "anotherValue";

        expect(modalReducer(undefined, handlerModal(payloadMock))).toEqual({
            isModalAdd: false,
            isModalDel: false,
        });
    });
});
