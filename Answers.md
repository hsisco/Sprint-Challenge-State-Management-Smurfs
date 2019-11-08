1. What problem does the context API help solve?

  It avoids prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Actions are objects of information sent to the store and the only information sent to the store. Actions describe what changed, via `type`, but don't actually change the state.

  Reducers define how the state will change in response to the actions and send the state to the store.

  The Store is where the application state is held.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Application state is a global state that all components can access. Component state can only pass state through props to its children components. I'm not sure...

4. Describe `redux-thunk`, what does it allow us to do? How does it change our  `action-creators`?

  Middleware that allows you to call action creators that return a function and keeps functions asychronous.


5. What is your favorite state management system you've learned and this sprint? Please explain why!

  I like Context because its cleaner and makes more sense to me, though that's not probably a sufficient answer.