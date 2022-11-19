///////////////////////////////// 16. Asynchronous Redux_ Redux-Thunk /////////////////////////////////////////
// Redux-Thunk - Redux thunk allow us to recieve actions that are functions. So, instead of us
// dispatching a action the typical format of an object or the type of in a payload instead we pass a function.
// this Function goes to the redux thunk and what happens is that redux then takes this function and it passes into
// it dispatch. So, what we do at this dispatch is now we can dispatch new actions from right inside of this thunk.
// and now this new action will go back into the flow. And it might hit another thunk or It might continue on into the
// subsequent Redux store and furthur reducers etc.

// The key benefit here is that through thunks now we are able to abstract out some of our logic into the thunk themselves.

const thunkMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    action(dispatch)
  }
}

// In Simple words - we use 1. Redux Thunk to put all the asynchronous logic in thunk. and 2. we want to follow Start, Success, Fail Pattern/Architecture.
// 3. For Handling Asynchronous side effect event handling inside of Redux.
