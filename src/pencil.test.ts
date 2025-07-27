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

  /**
   * Test Case: Writing Uppercase Letters
   * -------------------------------------
   * This test case ensures that:
   * 1. A pencil can write an uppercase character.
   * 2. Writing an uppercase character reduces the pencil's durability by 2.
   * 3. The written text matches the input provided to the `write` method.
   *
   * Steps:
   * 1. Create a pencil instance with an initial durability of 10.
   * 2. Write an uppercase letter using the `write` method.
   * 3. Verify that the text written matches the input and the durability
   *    is reduced by 2.
   */
  test("should write an uppercase letter and reduce durability by 2", () => {
    // Arrange: Create a pencil with an initial durability of 10
    const pencil = new Pencil(10);

    // Act: Write an uppercase letter
    pencil.write("A");

    // Assert: Verify the written text and remaining durability
    expect(pencil.getText()).toBe("A");
    expect(pencil.getDurability()).toBe(8);
  });

  /**
   * Test Case: Writing Spaces and Newlines
   * ---------------------------------------
   * This test case ensures that:
   * 1. A pencil can write spaces or newlines without reducing its durability.
   * 2. The written text matches the input provided to the `write` method.
   * 3. The pencil's durability remains unchanged after writing spaces or newlines.
   *
   * Steps:
   * 1. Create a pencil instance with an initial durability of 10.
   * 2. Write a space character using the `write` method.
   * 3. Verify that the text written matches the input and the durability
   *    remains unchanged.
   */

  test("should write spaces without reducing durability", () => {
    // Arrange: Create a pencil with an initial durability of 10
    const pencil = new Pencil(10);

    // Act: Write a space character
    pencil.write(" ");

    // Assert:
    // 1. Verify that the written text matches the input (" ").
    // 2. Verify that the pencil's durability remains unchanged (10).
    expect(pencil.getText()).toBe(" ");
    expect(pencil.getDurability()).toBe(10);
  });
});
