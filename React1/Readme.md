ReactJS - A javascript library for building a fast and interactive user Interface
Developed by Meta

Imperative vs Declarative 
Imperative = Explaining each Step
Imperative Programming as the name suggests is a type of programming paradigm that describes how the program executes. Developers are more concerned with how to get an answer step by step. It comprises the sequence of command imperatives.


Declarative :
Declarative Programming as the name suggests is a type of programming paradigm that describes what programs to be executed. Developers are more concerned with the answer that is received. It declares what kind of results we want and leave programming language aside focusing on simply figuring out how to produce them. In simple words, it mainly focuses on end result.  

Both ReactJS and Angular JS are declarative

ReactJS is a Js Library(Medium level applications we use)
ReactJS Examples: Facebook,Insta,Netflix, Airbnb, Dropbox
Angular JS is a jS framework(Enterprise level Applications)
Ex:Gmail, Google drive, ectc
Vue JS s a framework

A single-page application (SPA) is a modern way to build apps, like the ones Google, Facebook, Twitter, and others use. SPAs are like apps that run in our web browser, and they don’t need to reload the whole page when we use them.

A multiple-page application (MPA) is a more traditional approach to app development. With MPAs, every time we want to see something new, the whole web page has to reload. E-commerce companies with lots of products often prefer this approach.


By using ReactJS we can create SPA applications


install node js
npx create-react-app my-app 
or
npm create vite@latest

src- all source code inside it 
index.html- Main page (inside src)
App.jsx= route component of react application

All reactjs, angular follows component based Architectre


Components:They let u split the UI into independent, reusable pieces
Every component must return React Element



# What are React Hooks?
React hooks are functions introduced in React 16.8 that allow developers to use state and other React features in functional components without needing to write class components.
 The most commonly used hooks are useState for managing state, and useEffect for handling side effects like fetching data or updating the DOM. Hooks make React code cleaner and easier to manage by enabling the reuse of logic between components and eliminating the need for lifecycle methods in class components.

# For example, useState lets me declare a state variable in a functional component, and useEffect is useful for performing side effects, such as fetching data when the component loads or when certain values change


# useState: "With useState, I can declare a state variable and update its value using the setter function. It's perfect for managing things like form inputs or counters."

# useEffect: "The useEffect hook acts as a replacement for lifecycle methods like componentDidMount and componentDidUpdate. It allows me to run side effects, like fetching data, and can be configured to run only when certain dependencies change."


# import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Runs when 'count' changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
