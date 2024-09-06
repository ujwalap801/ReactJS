# React Component Overview

### Handling Events & State Changes

In React, components handle user interactions through **event handling** and manage dynamic data using **state**.

#### Handling Events
- When calling a function **without parameters**, you can directly reference the function in the event handler.
- However, when calling a function **with parameters**, you need to use a function call mechanism (e.g., arrow function) to pass the arguments.

#### Handling State
- React components have a built-in `state` object.
- The `state` object stores property values that belong to the component.
- When the `state` object changes, the component **re-renders**, updating the DOM to reflect the new state.
