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
   * Writes a single character to the text and reduces durability.
   * @param char - The character to write.
   */
  write(char: string): void {
    if (this.isDurable() && char !== " ") {
      this.text += char;
      this.reduceDurability(1);
    } else {
      this.text += char;
    }
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
