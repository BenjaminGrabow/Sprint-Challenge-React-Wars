# Answers

1.  What is React JS and what problems does it try and solve?

React.JS is not an opinionated library; it lets you use JavaScript and other JavaScript libraries the way you want. React.JS gives enough flexibility rather than other frameworks which have a reputation of being opinionated and one would have to code using 'their' way.
If the page has data that changes over time at high rates then there is a requirement for DOM updates to be very fast and also reflect in other parts of the UI if they use the same data.React solves this problem, without even having the page reload. It does by a concept called virtual DOM.
Any app with state that changes a lot will benefit from React.js.
This allows you to completely forget about DOM performance, and you can simply re-render the entire page all the time, as soon as your state changes. This almost always results in much smaller and simpler code base, which leads to less bugs.
Another side effect is that it allows you to practice functional reactive programming (FRP).

1.  What does it mean to _think_ in react?

Step 1: Break The UI Into A Component Hierarchy. ...
Step 2: Build A Static Version in React. ...
Step 3: Identify The Minimal (but complete) Representation Of UI State. ...
Step 4: Identify Where Your State Should Live. ...
Step 5: Add Inverse Data Flow.

We’ve gotten used to showing a user interface then mutating it to update and show the latest changes. What React did very well was to bring immutable UIs to the masses - you never "mutate" a UI - you always (re-)render it! Always run the same function that was used for the initial rendering to get the updated interface. This leads us to the main point of the React way of thinking.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

The most obvious one difference is the syntax. A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from React.Component and create a render function which returns a React element.

1.  Describe state.

In the React sense, “state” is an object that represents the parts of the app that can change. Each component can maintain its own state, which lives in an object called this.state .
State works differently when compared to props. State is internal to a component, while props are passed to a component.
State can Change because it is Mutable.

1.  Describe props.

Both state and props in react are used to control data into a component, generally props are set by parent and passed to child components and they are fixed throughout the component. For data that is going to change, we have to use state.
In React and React Native the data flows in one direction -> From the parent to the child. You can write your own components that use props. The idea behind props is that you can make a single component that is used in many different places in your app.
Props are short for Properties. The simple rule of thumb is props should not be changed. In the programming world we call it “Immutable” or in simple english “Unchangeable”.
Props essentially help you write reusable code
