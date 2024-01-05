import favouriteReducer, {
    addFavourite,
    removeFavourite,
} from "./favouriteSlice";

const initialValue = {
    favouriteList: [],
};

describe("favouriteReducer test", () => {
    test("should favouriteReducer return default value whithout state and action", () => {
        expect(favouriteReducer(undefined, { type: undefined })).toEqual(
            initialValue
        );
    });

    test("should favouriteReducer added card by addFavourite action", () => {
        const payloadMock = { id: 1 };

        expect(favouriteReducer(undefined, addFavourite(payloadMock))).toEqual({
            favouriteList: [payloadMock],
        });
    });

    test("should favouriteReducer not added card by addFavourite action with duplicate card", () => {
        const initialValueMock = { favouriteList: [{ id: 1 }] };
        const payloadMock = { id: 1 };

        expect(
            favouriteReducer(initialValueMock, addFavourite(payloadMock))
        ).toEqual({
            favouriteList: [{ id: 1 }],
        });
    });

    test("should favouriteReducer removed card by removeFavourite action", () => {
        const initialValueMock = { favouriteList: [{ id: 1 }] };
        const payloadMock = { id: 1 };

        expect(
            favouriteReducer(initialValueMock, removeFavourite(payloadMock))
        ).toEqual({
            favouriteList: [],
        });
    });
});
