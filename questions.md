# Questions

1.  What is the difference between Component and PureComponent? give an
    example where it might break my app.

    The difference is that a pure component does not rerender if the state and props have the same values.
    React does a comparison before rerendering in order to make sure that there has been a real change before rerendering.

    Using pure components helps to improve performance and in the case of having lots of changes in the state and props if not handled properly that could lead to break the app.

2.  Context + ShouldComponentUpdate might be dangerous. Can think of why is
    that?

    I read somewhere that the problem occurs when you have a component which parent is a context provider and the child is a context consumer, if the component in the middle uses shouldComponentUpdate then the changes in the context does not get to the child component.

    I would say it could have to do with the fact that the shouldComponentUpdate checks if the state or props have change in order to rerender but in this case the context is not a props or state, so basicaslly the middle component won't rerender because there is not any chenge in the component itself.

3.  Describe 3 ways to pass information from a component to its PARENT.

    - Passing down as a property a method that would change the state of the parent.
    - Using redux.
    - Using react context

4.  Give 2 ways to prevent components from re-rendering.

    - Using pure components.
    - Extracting some side effect logic to custom hooks.

5.  What is a fragment and why do we need it? Give an example where it might
    break my app.

        We need it when we don't want to create an aditional DOM element to wrap a group of elements, the fragment is faster than a div.

        An app could break if we try to pass normal html attributes to a fragment , like styles, id ,etc.

6.  Give 3 examples of the HOC pattern.

    Used to reuse logic avoiding code duplication, it is basically a function that takes as aparamenter a component then injects data and logic and return a new component

    - withRouter from react-router-dom
    - withOktaAuth from @okta/okta-react
    - connect from Redux

7.  what's the difference in handling exceptions in promises, callbacks and
    async...await.

    - Basically in a Promise we handle exceptions using .catch() which gets fired when the promise is rejected.
    - When using async...await then we have to use try... catch to handle the exceptions that could happen within the try block.
    - Now, when using a callback, as the callback is just a method, I would go with try...catch, although if the method returns a promise, we could use the .catch()

8.  How many arguments does setState take and why is it async.

    We can pass an object with the state that we want to change or an arrow method that takes as a parameter the previous state and updates it.

    It is async because it rerenders the component when changes, it needs to be async otherwise it could lead to race conditions and break the app.

9.  List the steps needed to migrate a Class to Function Component.

    - Rewrite the declaration from class to a function
    - Replace state with useState hook
    - Replace life cycle events associated with side effect changes with useEffect hook
    - Remove render method and use just return to render the xjs

10. List a few ways styles can be used with components.

    - Using simple normal css files and using the className attribute in the element tags
    - Using css as javascript, implementing a librtary like styled-components.
    - Using inline css, using th estyles attribute in the element.

11. How to render an HTML string coming from the server.

    Rendering a div and setting up the dangerouslySetInnerHTML attribute with the string coming from the server
