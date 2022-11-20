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

// Redux Saga - is a side effect state managment library just like redux thunk, except it allows a lot more patterns and it's a lot more complex. The main
// advantage of redux saga is it allows you to perform very complex coordination of asynchronous side effects inside of redux. Sagas is different The actions
// will actually hit the reducers first before moving on to the sage. So in this case, it flows after the reducers have updated.

// So if you think about an action flow, it starts from a component and it moves up and it goes through every other middleware except for the saga. Then it
// moves thorugh the corresponding reducers and it updates there value and then do those actions finally hit the saga's. The saga's will respond to these actions
// and perform certain business logic, certain asynchronous requests whatever it is. It's just in the realm of writing Javascript code based on an action. From here,
// maybe new actions are generated. Maybe the saga does something and it gets a value and then it's like, oh i need to fire off an action so that i can subsequently update
// the reducers. So, thats what the saga will do. They might fire a new action. Those will pass thorugh the middlware and then it'will continue on the flow. But the
// thing about these actions is that these actions might also flow through the sagas.

// Again, actions fired by Saga can trigger other sagas and this very important thing to Note. So this is Redux Saga at a high level :)

// The main thing to understand about sagas is that THEY FIRE AFTER THE REDUCERS HAVE UPDATED.

// Important - And this becomes relevant when we actually recieve an action because if in the saga, when we get the action, we are looking at the state of the store. We will actually
// have the state of the store after it's been updated by the action that we are responding to. So that's any important thing to remember when you think about your saga writing,
// about what the value in the store will be.
