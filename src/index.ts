import { Pencil } from "./pencil";

// Create a pencil with durability 10, length 3, eraser durability 5
const pencil = new Pencil(10, 3, 5);

// Write some text
pencil.write("Hello World");

// Erase the word "World"
pencil.erase("World");

// Sharpen the pencil (restores durability, reduces length)
pencil.sharpen();

// Edit the first blank space (from erased "World") with "Mars"
pencil.edit("Mars");

// Output the final text
console.log(pencil.getText()); // Output: Hello WorMa
