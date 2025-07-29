# Pencil Durability Kata – TDD Challenge

Welcome! This project is a command-line simulation of a pencil, built using TypeScript and developed with a strict Test-Driven Development (TDD) approach.

## Approach

This project was developed using a strict Test-Driven Development (TDD) approach. Each feature was implemented in three steps:

1. **Red**: Write a failing test to define the expected behavior.
2. **Green**: Implement the minimal code required to pass the test.
3. **Refactor**: Improve the code for clarity, maintainability, and performance.

## How to Run

1. Install dependencies: `npm install`
2. Run tests: `npm test`

## Features

- **Writing Text**:
  - Writing lowercase letters reduces durability by 1.
  - Writing uppercase letters reduces durability by 2.
  - Writing spaces or newlines does not reduce durability.
  - Stops writing when durability reaches 0.
- **Durability Tracking**:
  - Tracks the remaining durability of the pencil.
  - Allows retrieval of the current durability.
- **Sharpening**:
  - Restores the pencil's durability to its initial value.
  - Reduces the pencil's length with each sharpening.
  - Cannot sharpen if length is zero.
- **Erasing**:
  - Removes the last occurrence of a word from the text.
  - Erased characters are replaced with spaces.
  - Erasing reduces the eraser's durability (one per non-space erased).
  - Stops erasing when eraser durability is exhausted.
- **Editing**:
  - Allows writing over erased spaces (first sequence of two or more spaces).
  - If editing collides with a non-space, replaces it with `@`.
- **Edge Cases**:
  - Handles attempts to erase words not present.
  - Handles sharpening when length is zero.
  - Handles editing when no blank spaces are available.
  - Handles erasing when eraser durability is less than word length.

## API

- `write(text: string): void`
- `erase(word: string): void`
- `edit(word: string): void`
- `sharpen(): void`
- `getText(): string`
- `getDurability(): number`
- `getLength(): number`
- `getEraserDurability(): number`

## Usage Example

```typescript
const pencil = new Pencil(10, 3, 5);
pencil.write("Hello World");
pencil.erase("World");
pencil.sharpen();
pencil.edit("Mars");
console.log(pencil.getText());
```

## Command-Line Demo

You can see the Pencil class in action with the included CLI demo:

```typescript
// src/index.ts

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
```

To run this demo:

```bash
npm run start
```

## Project Structure

- `src/pencil.ts` – Pencil class implementation
- `src/pencil.test.ts` – Test suite
- `src/index.ts` – Command-line demo
- `README.md` – Documentation

## Tests

The project includes a comprehensive test suite to verify the behavior of the Pencil class. Below are the key test cases:

### Writing Text

1. **Lowercase Letters**:

   - Writing a lowercase letter reduces durability by 1.
   - Example:
     ```typescript
     const pencil = new Pencil(10);
     pencil.write("a");
     console.log(pencil.getText()); // Output: "a"
     console.log(pencil.getDurability()); // Output: 9
     ```

2. **Uppercase Letters**:

   - Writing an uppercase letter reduces durability by 2.
   - Example:
     ```typescript
     const pencil = new Pencil(10);
     pencil.write("A");
     console.log(pencil.getText()); // Output: "A"
     console.log(pencil.getDurability()); // Output: 8
     ```

3. **Spaces and Newlines**:

   - Writing spaces or newlines does not reduce durability.
   - Example:
     ```typescript
     const pencil = new Pencil(10);
     pencil.write(" ");
     console.log(pencil.getText()); // Output: " "
     console.log(pencil.getDurability()); // Output: 10
     ```

4. **Stop Writing When Durability = 0**:
   - The pencil stops writing characters once its durability reaches zero.
   - Spaces are still written even when durability is zero.
   - Example:
     ```typescript
     const pencil = new Pencil(1);
     pencil.write("a");
     pencil.write("b");
     console.log(pencil.getText()); // Output: "a "
     ```

### 5. Durability Tracking

The pencil's durability decreases as characters are written. The remaining durability can be retrieved using the `getDurability` method.

```typescript
const pencil = new Pencil(5);
pencil.write("abc");
console.log(pencil.getDurability()); // Output: 2
```

### 6. Sharpening

Restores durability and reduces pencil length. Cannot sharpen if length is zero.

```typescript
const pencil = new Pencil(10, 2);
pencil.write("hello");
console.log(pencil.getDurability()); // Output: 5
pencil.sharpen();
console.log(pencil.getDurability()); // Output: 10
console.log(pencil.getLength()); // Output: 1
pencil.sharpen();
console.log(pencil.getLength()); // Output: 0
pencil.sharpen();
console.log(pencil.getDurability()); // Output: 10 (no effect, length is 0)
```

### 7. Erasing

Removes the last occurrence of a word and tracks eraser durability.

```typescript
const pencil = new Pencil(20, 5, 3);
pencil.write("hello world hello");
pencil.erase("hello");
console.log(pencil.getText()); // Output: "hello world      "
console.log(pencil.getEraserDurability()); // Output: 0 (if erased 3 chars)
```

### 8. Editing

Allows writing over erased spaces. If editing collides with a non-space, replaces it with `@`.

```typescript
const pencil = new Pencil(10, 2, 10);
pencil.write("hello     ");
pencil.edit("world");
console.log(pencil.getText()); // Output: "helloworld"
pencil.edit("edit");
console.log(pencil.getText()); // Output: "helloworld"
```

### 9. Edge Cases

- Attempting to erase a word not present leaves text unchanged.
- Sharpening when length is zero does not restore durability.
- Editing when no blank spaces are available does nothing.
- Erasing with eraser durability less than the word length only erases as many characters as possible.

```typescript
const pencil = new Pencil(10, 2, 2);
pencil.write("erase");
pencil.erase("erase");
console.log(pencil.getText()); // Output: "era  "
console.log(pencil.getEraserDurability()); // Output: 0

const pencil2 = new Pencil(5, 1);
pencil2.write("abcde");
pencil2.sharpen();
pencil2.write("f");
console.log(pencil2.getLength()); // Output: 0
console.log(pencil2.getDurability()); // Output: 4

const pencil3 = new Pencil(10, 2, 10);
pencil3.write("hello");
pencil3.edit("world");
console.log(pencil3.getText()); // Output: "hello"
```

### Additional Edge Cases Covered

- Writing with zero or negative durability.
- Erasing when eraser durability is less than the word length.
- Editing with a word longer or shorter than the blank space.
- Editing at the start or end of the text.
- Writing multi-line text and handling newlines.
- Attempting to erase or edit when the text is empty.
- Sharpening after every write until length is zero.
- Writing after eraser durability is zero.

## Design Decisions

- I chose to keep all logic in a single Pencil class for this kata’s scope, but in a real-world scenario, I would extract Eraser and Sharpener as separate classes for better separation of concerns and easier testing.
- The edit method uses a regular expression to find the first sequence of two or more spaces, which is more robust and readable than a manual loop.
- I added extra edge case tests (editing at the start, multi-line, partial erasing) to ensure the implementation is robust and maintainable.
- All methods are single-responsibility and documented for clarity.
- I used explicit checks and helper methods to make the code easy to extend and debug.

### Design and TDD Approach

- Each method is single-responsibility and well-documented.
- The class is designed for extensibility (e.g., could add a separate Eraser class).
- All features were developed using strict TDD: Red (test), Green (code), Refactor (cleanup).
- Edge cases were considered and tested, not just the basic flows.

## TDD Process

- Each feature was developed using Red-Green-Refactor cycles.
- Every commit is atomic and meaningful, demonstrating incremental thinking.
- See commit history for details.

## Future Improvements

- Support for Unicode and special symbols in writing and erasing.
- Extract Eraser and Sharpener logic into separate classes for better modularity.
- Add a TextBuffer class to manage the text state, making it easier to support undo/redo.
- Implement a CLI interface for interactive use.
