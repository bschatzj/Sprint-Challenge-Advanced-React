- [ ] Why would you use class component over function components (removing hooks from the question)?
    We need to use class components to have a stateful app. We use class components to actually create and manage state when we don't have hooks.    

- [ ] Name three lifecycle methods and their purposes.
    ComponentWillMount: This method will happen when the given component is rendered. 

    ComponentWillUnmount: This method will happen when the given component is finished rendering. Used to clean up the app when the event listeners and other things are no longer needed. 

    ComponentDidUpdate: This method will happen when the state or the props change. 



- [ ] What is the purpose of a custom hook?
Custom hooks are really good for reusing code. When you have a piece of stateful logic you want to use multiple times you would make a custom hook that could be implemented in multiple places.


- [ ] Why is it important to test our apps?

Makes it easier to find bugs in our code. Can help verify that each piece of code has the intended effect. 