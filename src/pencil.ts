/**
 * Pencil Class
 *
 * This class simulates the behavior of a pencil as described in the Pencil Durability Kata.
 * It models the pencil's ability to write text, track its durability, and handle various
 * edge cases such as spaces and durability depletion.
 *
 * Features:
 * ----------
 * 1. Writing Text:
 *    - The pencil can write characters to a text buffer.
 *    - Writing a lowercase character reduces the pencil's durability by 1.
 *    - Writing an uppercase character reduces the pencil's durability by 2.
 *    - Writing a space does not reduce durability.
 *
 * 2. Durability Tracking:
 *    - The pencil has a finite durability that decreases with each character written.
 *    - The durability is initialized via the constructor and can be retrieved using
 *      the `getDurability` method.
 *
 * 3. Text Retrieval:
 *    - The text written by the pencil can be retrieved using the `getText` method.
 *
 * Usage:
 * ------
 * const pencil = new Pencil(10); // Create a pencil with durability of 10
 * pencil.write("a");             // Write a lowercase letter
 * console.log(pencil.getText()); // Output: "a"
 * console.log(pencil.getDurability()); // Output: 9
 * pencil.write("A");             // Write an uppercase letter
 * console.log(pencil.getText()); // Output: "A"
 * console.log(pencil.getDurability()); // Output: 8
 */

export class Pencil {
  private text: string = ""; // Stores the text written by the pencil
  private durability: number; // Tracks the remaining durability of the pencil

  constructor(durability: number) {
    this.durability = durability;
  }

  /**
   * Checks if the pencil is durable.
   * @returns True if the pencil has durability left, false otherwise.
   *
   * Refactor Note:
   * - This method was introduced to encapsulate the durability check logic.
   * - It improves readability and avoids duplicating the durability check condition.
   */
  private isDurable(): boolean {
    return this.durability > 0;
  }

  /**
   * Reduces the pencil's durability by a specified amount.
   * @param amount - The amount to reduce durability by.
   */
  private reduceDurability(amount: number): void {
    this.durability -= amount;
  }

  /**
   * Calculates the durability cost for a given character.
   * @param char - The character to calculate the cost for.
   * @returns The durability cost.
   *
   * Refactor Note:
   * - This method was updated to improve readability and clarity.
   * - Added explicit checks for uppercase and lowercase characters.
   * - Ensures the logic is easy to follow and maintain.
   */
  private calculateDurabilityCost(char: string): number {
    if (char >= "A" && char <= "Z") {
      // Uppercase letters cost 2 durability points
      return 2;
    } else if (char >= "a" && char <= "z") {
      // Lowercase letters cost 1 durability point
      return 1;
    }
    // Non-alphabetic characters (e.g., spaces) cost 0 durability points
    return 0;
  }

  /**
   * Writes a single character to the text and reduces durability if applicable.
   * @param char - The character to write.
   *
   * Refactor Note:
   * - Simplified the logic for handling spaces and durability checks.
   * - Improved readability by separating space handling and durability logic.
   */
  write(char: string): void {
    if (this.isSpace(char)) {
      // Spaces do not reduce durability
      this.appendToText(char);
      return;
    }

    if (this.isDurable()) {
      // Write the character and reduce durability based on its cost
      this.appendToText(char);
      this.reduceDurability(this.calculateDurabilityCost(char));
    } else {
      // If no durability is left, stop writing non-space characters
      this.appendToText(" "); // Append a space instead of the character
    }
  }

  /**
   * Checks if the given character is a space or newline.
   * @param char - The character to check.
   * @returns True if the character is a space or newline, false otherwise.
   */
  private isSpace(char: string): boolean {
    return char === " " || char === "\n";
  }

  /**
   * Appends a character to the text buffer.
   * @param char - The character to append.
   */
  private appendToText(char: string): void {
    this.text += char;
  }

  /**
   * Retrieves the text written by the pencil.
   * @returns The current text.
   */
  getText(): string {
    return this.text;
  }

  /**
   * Retrieves the current durability of the pencil.
   * @returns The remaining durability.
   */
  getDurability(): number {
    return this.durability;
  }
}
