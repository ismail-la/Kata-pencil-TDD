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
- **Sharpening** (to be implemented):
  - Restores the pencil's durability to its initial value.
  - Reduces the pencil's length with each sharpening.
- **Erasing** (to be implemented):
  - Removes the last occurrence of a word from the text.
  - Tracks eraser durability.
- **Editing** (to be implemented):
  - Allows writing over erased spaces.

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

### Durability Tracking
- The pencil's durability decreases as characters are written.
- The remaining durability can be retrieved using the `getDurability` method.

### Upcoming Features
- **Sharpening**:
  - Restores durability and reduces pencil length.
- **Erasing**:
  - Removes the last occurrence of a word and tracks eraser durability.
- **Editing**:
  - Allows writing over erased spaces.

## Usage

```typescript
const pencil = new Pencil(10);
pencil.write("hello");
console.log(pencil.getText()); // Output: "hello"
console.log(pencil.getDurability()); // Output: 5