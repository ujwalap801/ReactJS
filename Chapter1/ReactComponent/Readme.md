# React Components

## What are Components?

Components are like functions that return HTML elements. In React, components are independent, reusable pieces of code that serve the same purpose as JavaScript functions but work in isolation and return HTML. A component is one of the core building blocks of React. In other words, every application we develop in React will be made of pieces called components. Components make the task of building the UI much easier. They let you split the UI into independent, reusable pieces and think about each piece in isolation.

## Types of Components

There are two types of components in React:
1. Class Components
2. Function Components

### Class Components

Class components must extend from `React.Component`. This creates an inheritance to React. A class component requires a `render()` method, which returns HTML.

Example:

```javascript
class MyComponent extends React.Component {
    render() {
        return (
            <ElementOrComponent .../>
        );
    }
}


class MyComponent extends React.Component {
    render() {
        return (
            <h2>Hi, I am a Car!</h2>
        );
    }
}


## Function Components in React

Function components in React return HTML and behave the same as class components, but they can be written with less code and are easier to understand.

### Example
```jsx
function Car() {
    return <h1>Hi, I am Car!</h1>;
}


Declarative Code in React
React code is written in a declarative way. React adopts a declarative approach, which means developers describe how the user interface should look based on its current state, and React takes care of updating the DOM (Document Object Model) accordingly


# React Components

## Reusable and Composable UI

React components are reusable and can be composed to build complex UIs.

## Introducing JSX

JSX, which stands for JavaScript XML, is a syntax extension for JavaScript often used with React.js. It allows you to write HTML code within JavaScript code, making it easier to create and visualize UI components.

### Key Features of JSX:
- Combines JavaScript and HTML
- Enhances readability and maintainability of code

Example:
```jsx
const element = <h1>Hello,</h1>;

Rendering Components with JSX
In React, we define UI components using JavaScript functions or classes that return JSX elements. These components can be composed and nested, creating a tree-like structure.

function App() {
  return (
    <div> 
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

# React Development Workflow and Overview

## Development Workflow

- **Create React Components**: Build modular and reusable UI components.
- **Manage State**: Use state to manage and render dynamic data.
- **Handle User Interactions**: Capture and respond to user inputs and events.

## How React Works

1. **Component Based Architecture**: 
   - Each component can have its own state and behavior, making it easier to manage and scale applications.

2. **Virtual DOM**: 
   - React maintains a lightweight, in-memory representation of the DOM, allowing efficient updates.

3. **Render and Reconciliation**: 
   - React uses a diff algorithm to compare the virtual DOM with the real DOM and update only the necessary parts.

4. **Efficient Updates**: 
   - By updating only the changed elements, React minimizes the number of costly DOM operations, improving performance.

5. **JSX**: 
   - JSX is a syntax extension that allows writing HTML-like code in JavaScript. It is transpiled to regular JavaScript before reaching the browser.

6. **Unidirectional Data Flow**: 
   - Data flows in one direction, making it easier to understand and debug.

7. **Lifecycle Methods**: 
   - Components go through a series of lifecycle methods: Mounting, Updating, and Unmounting, allowing developers to hook into specific points in a component's life.

8. **State Management**: 
   - React components manage their own state using hooks like `useState`, enabling dynamic and interactive UIs.

9. **Component Reusability**: 
   - Components can be reused across different parts of an application, promoting code reuse and reducing redundancy.

10. **React Ecosystem**: 
    - Developers often use state management libraries like Redux and MobX to handle complex state logic.

## Additional Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Redux Documentation](https://redux.js.org/)
- [MobX Documentation](https://mobx.js.org/README.html)



# React Component Basics

## 1. Class Components
Class components in React are JavaScript classes that extend `React.Component`. They can manage their own state and lifecycle methods.

- **State Management**: State is managed using `this.state` and updated with `this.setState`.
- **Lifecycle Methods**: Class components have lifecycle methods that allow you to hook into different stages of the component's lifecycle.

## 2. Event Handling
React components handle user interactions such as clicks using event handlers. Event handlers are specified via props in JSX elements.

- **Example**:
  ```jsx
  <button onClick={this.handleClick}>Click me</button>
3. Conditional Rendering
Conditional rendering allows you to show different UI elements based on conditions. This can be done using if statements or ternary operators within your render method.

Example:
jsx
Copy code
render() {
  return (
    <div>
      {this.state.isLoggedIn ? <Welcome /> : <Login />}
    </div>
  );
}
4. Lists and Keys
Lists of items can be rendered in React using the map() function. Each item in the list should have a unique key prop to help React identify which items have changed.

Example:
jsx
Copy code
const items = ['Item 1', 'Item 2', 'Item 3'];
return (
  <ul>
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
);
5. Component Composition
Components can be composed together to create more complex UIs. This approach involves nesting components within other components.

Example:
jsx
Copy code
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
6. Props Validation (PropTypes)
Props validation is used to specify the expected types for a component’s props. This helps in ensuring that components receive the correct type of data.

Example:
jsx
Copy code
import PropTypes from 'prop-types';

function MyComponent(props) {
  return <div>{props.name}</div>;
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired
};
7. Default Props
Default props allow you to set default values for props in case they are not provided by the parent component.

Example:
jsx
Copy code
function MyComponent(props) {
  return <div>{props.name}</div>;
}

MyComponent.defaultProps = {
  name: 'Default Name'
};
8. Controlled vs Uncontrolled Components
Controlled Components: These are components whose state is controlled by React, often through props.

Uncontrolled Components: These manage their own state, typically interacting directly with the DOM.

Example of Controlled Component:
function ControlledInput(props) {
  return (
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

Example of Uncontrolled Component:
class UncontrolledInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return <input type="text" ref={this.inputRef} />;
  }
}


9)Refs
Refs provide a way to access and interact with DOM elements or React components directly. They are commonly used for tasks like focusing an input or measuring the size of an element.


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current.focus();
  }

  render() {
    return <input ref={this.myRef} />;
  }
}
