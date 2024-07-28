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


