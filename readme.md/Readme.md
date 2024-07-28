## Adding JS to a Page

### Inline JS
```html
<script></script>

<script src="script.js"></script>

Import and Export
1. Export
a) Named Exports 

// Exporting individual values
export const name = "uju";
export function greet() {
  console.log(`hello, ${name}`);
}

// Export multiple values at once
export { name, greet };


b) Default Export
// Default export
const person = {
  name: 'jane',
  age: 30,
};

export default person;

export default function sayHello() {
  console.log("hi");
}


2. Import
a) Importing Named Exports
import { name, greet } from './moduleA';
// Using the imported values
console.log(name);
greet();


b) Importing Default Exports
import person from './moduleB'; 
console.log(person.name);