import goodsReducer, { setGoods } from "./goodsSlice";

const initialValue = {
    goodsList: [],
};

describe("goodsReducer test", () => {
    test("should goodsReducer return default value whithout state and action", () => {
        expect(goodsReducer(undefined, { type: undefined })).toEqual(
            initialValue
        );
    });

    test("should goodsReducer records data by setGoods action", () => {
        const payloadMock = [{ id: 1 }];

        expect(goodsReducer(undefined, setGoods(payloadMock))).toEqual({
            goodsList: payloadMock,
        });
    });
});
