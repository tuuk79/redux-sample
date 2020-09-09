const redux = require("redux");

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "TIMESTWO":
      return state * 2;
    default:
      return state;
  }
}

function plusOne() {
  store.dispatch({ type: "INCREMENT" });
  return store.getState();
}

let store = redux.createStore(counter);

//store.subscribe(() => console.log(store.getState()));

describe("counter", () => {
  it('should return "1" if initial state is "0"', () => {
    expect(plusOne()).toBe(1);
  });
});
