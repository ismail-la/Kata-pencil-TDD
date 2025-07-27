# Pencil Durability Kata – TDD Challenge

Welcome! This project is a command-line simulation of a pencil, built using TypeScript and developed with a strict Test-Driven Development (TDD) approach.

## Approach

This project was developed using a strict Test-Driven Development (TDD) approach. Each feature was implemented in three steps:

1. Write a failing test to define the expected behavior.
2. Implement the minimal code required to pass the test.
3. Refactor the code for clarity and maintainability.

## How to Run

1. Install dependencies: `npm install`
2. Run tests: `npm test`

## Features

- Writing text with durability tracking.
- Writing lowercase letters reduces durability by 1.
- Writing spaces does not reduce durability.
- Retrieve written text and remaining durability.

## Usage

```typescript
const pencil = new Pencil(10);
pencil.write("hello");
console.log(pencil.getText()); // Output: "hello"
console.log(pencil.getDurability()); // Output: 5
```
