/**
 * Pencil Test Suite
 *
 * This test suite verifies the behavior of the Pencil class. It ensures that
 * the pencil can write text, reduce durability correctly, and handle various
 * edge cases as specified in the Pencil Durability Kata.
 *
 * Test Case: Writing Lowercase Letters
 * -------------------------------------
 * This test case ensures that:
 * 1. A pencil can write a lowercase character.
 * 2. Writing a lowercase character reduces the pencil's durability by 1.
 * 3. The written text matches the input provided to the `write` method.
 *
 * Steps:
 * 1. Create a pencil instance with an initial durability of 10.
 * 2. Write a lowercase letter using the `write` method.
 * 3. Verify that the text written matches the input and the durability
 *    is reduced by 1.
 */

import { Pencil } from "./pencil";

describe("Pencil", () => {
  test("should write a lowercase character and reduce durability by 1", () => {
    // Arrange: Create a pencil with an initial durability of 10
    const pencil = new Pencil(10);

    // Act: Write a lowercase letter
    pencil.write("a");

    // Assert: Verify the written text and remaining durability
    expect(pencil.getText()).toBe("a");
    expect(pencil.getDurability()).toBe(9);
  });
});
