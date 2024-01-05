import basketReducer, {
    offerCard,
    addBasket,
    removeBasket,
    deleteBasket,
} from "./basketSlice";

const initialValue = {
    basketList: [],
    currentCard: {},
};

describe("basketReducer test", () => {
    test("should basketReducer return default value whithout state and action", () => {
        expect(basketReducer(undefined, { type: undefined })).toEqual(
            initialValue
        );
    });

    test("should basketReducer saved card in the currentCard by offerCard action", () => {
        const payloadMock = { id: 1 };

        expect(basketReducer(undefined, offerCard(payloadMock))).toEqual({
            basketList: [],
            currentCard: { id: 1 },
        });
    });

    test("should basketReducer added card by addBasket action", () => {
        const initialValueMock = {
            basketList: [],
            currentCard: { id: 1 },
        };

        expect(
            basketReducer(
                initialValueMock,
                addBasket(initialValueMock.currentCard)
            )
        ).toEqual({
            basketList: [{ id: 1 }],
            currentCard: {},
        });
    });

    test("should basketReducer not added card by addBasket action with duplicate card", () => {
        const initialValueMock = {
            basketList: [{ id: 1 }],
            currentCard: { id: 1 },
        };

        expect(
            basketReducer(
                initialValueMock,
                addBasket(initialValueMock.currentCard)
            )
        ).toEqual({
            basketList: [{ id: 1 }],
            currentCard: {},
        });
    });

    test("should basketReducer removed card by removeBasket action", () => {
        const initialValueMock = {
            basketList: [{ id: 1 }],
            currentCard: { id: 1 },
        };

        expect(
            basketReducer(
                initialValueMock,
                removeBasket(initialValueMock.currentCard)
            )
        ).toEqual({
            basketList: [],
            currentCard: {},
        });
    });

    test("should basketReducer cleaned basket by deleteBasket action", () => {
        const initialValueMock = {
            basketList: [{ id: 1 }],
            currentCard: {},
        };

        expect(basketReducer(initialValueMock, deleteBasket())).toEqual({
            basketList: [],
            currentCard: {},
        });
    });
});
