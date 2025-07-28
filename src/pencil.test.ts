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
    const pencil = new Pencil(10, 5); // Add length argument
    pencil.write("a");
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
    const pencil = new Pencil(10, 5); // Add length argument
    pencil.write("A");
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
    const pencil = new Pencil(10, 5); // Add length argument
    pencil.write(" ");
    expect(pencil.getText()).toBe(" ");
    expect(pencil.getDurability()).toBe(10);
  });

  /**
   * Test Case: Stop Writing When Durability = 0
   * --------------------------------------------
   * This test case ensures that:
   * 1. The pencil stops writing characters once its durability reaches zero.
   * 2. Characters written after the durability is depleted are not added to the text.
   * 3. Spaces are still written even when durability is zero, as they do not reduce durability.
   *
   * Steps:
   * 1. Create a pencil instance with an initial durability of 1.
   * 2. Write a character that reduces durability to zero.
   * 3. Attempt to write another character after durability is depleted.
   * 4. Verify that only the first character and spaces are written, and the second character is ignored.
   */

  test("should stop writing when durability is zero", () => {
    const pencil = new Pencil(1, 5); // Add length argument
    pencil.write("a");
    pencil.write("b");
    expect(pencil.getText()).toBe("a ");
  });

  /**
   * Test Case: Sharpening the Pencil
   * ---------------------------------
   * This test case ensures that:
   * 1. Sharpening restores the pencil's durability to its initial value.
   * 2. Sharpening reduces the pencil's length by 1.
   * 3. The pencil cannot be sharpened if its length is 0.
   *
   * Steps:
   * 1. Create a pencil instance with an initial durability of 10 and length of 3.
   * 2. Write some text to reduce durability.
   * 3. Sharpen the pencil and verify durability is restored and length is reduced.
   * 4. Attempt to sharpen the pencil when length is 0 and verify no changes occur.
   */
  test("should restore durability and reduce length when sharpened", () => {
    const pencil = new Pencil(10, 3); // Add length argument
    pencil.write("hello");
    expect(pencil.getDurability()).toBe(5);
    pencil.sharpen();
    expect(pencil.getDurability()).toBe(10);
    expect(pencil.getLength()).toBe(2);
    pencil.sharpen();
    pencil.sharpen();
    pencil.sharpen(); // No effect when length is 0
    expect(pencil.getLength()).toBe(0);
    expect(pencil.getDurability()).toBe(10);
  });

  /**
   * Test Case: Erasing the Last Occurrence of a Word
   * -------------------------------------------------
   * This test case ensures that:
   * 1. The pencil can erase the last occurrence of a word from the text.
   * 2. Erased characters are replaced with spaces.
   *
   * Steps:
   * 1. Create a pencil instance and write some text.
   * 2. Erase the last occurrence of a word.
   * 3. Verify that the word is replaced with spaces in the text.
   */
  it("should erase the last occurrence of a word", () => {
    const pencil = new Pencil(20, 5); // 💡 ensure enough durability
    pencil.write("hello world hello");
    pencil.erase("hello");
    expect(pencil.getText()).toBe("hello world      ");
  });

  /**
   * Test Case: Erasing Reduces Eraser Durability
   * ---------------------------------------------
   * This test case ensures that:
   * 1. Erasing characters reduces the eraser's durability.
   * 2. Erasing stops when the eraser's durability is exhausted.
   *
   * Steps:
   * 1. Create a pencil instance with an eraser durability of 3.
   * 2. Write some text and erase part of it.
   * 3. Verify that only characters up to the eraser's durability are erased.
   * 4. Verify the remaining eraser durability.
   */
  test("erasing reduces eraser durability, stops when exhausted", () => {
    const pencil = new Pencil(10, 2, 3); // durability, length, eraserDurability
    pencil.write("erase me");
    pencil.erase("me");
    expect(pencil.getText()).toBe("erase  "); // only 2 chars erased, 1 left
    expect(pencil.getEraserDurability()).toBe(1);
  });
});
