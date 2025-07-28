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
 * 4. Sharpening:
 *    - The pencil can be sharpened to restore its durability to the initial value.
 *    - Sharpening reduces the pencil's length.
 *    - If the pencil's length is 0, sharpening has no effect.
 *
 * 5. Erasing:
 *    - The pencil can erase the last occurrence of a word from the text buffer.
 *    - Erased words are replaced with spaces.
 *
 * Usage:
 * ------
 * const pencil = new Pencil(10, 5); // Create a pencil with durability of 10 and length of 5
 * pencil.write("a");               // Write a lowercase letter
 * console.log(pencil.getText());   // Output: "a"
 * console.log(pencil.getDurability()); // Output: 9
 * pencil.sharpen();                // Sharpen the pencil
 * console.log(pencil.getDurability()); // Output: 10
 * console.log(pencil.getLength()); // Output: 4
 * pencil.erase("a");               // Erase the last occurrence of "a"
 * console.log(pencil.getText());   // Output: " "
 */

export class Pencil {
  private text: string = ""; // Stores the text written by the pencil
  private durability: number; // Tracks the remaining durability of the pencil
  private initialDurability: number; // Stores the initial durability of the pencil
  private length: number; // Tracks the remaining length of the pencil

  constructor(durability: number, length: number) {
    this.durability = durability;
    this.initialDurability = durability;
    this.length = length;
  }

  /**
   * Restores the pencil's durability to its initial value and reduces its length.
   * If the pencil's length is 0, sharpening has no effect.
   */
  sharpen(): void {
    if (this.canSharpen()) {
      this.restoreDurability();
      this.reduceLength();
    }
  }

  /**
   * Checks if the pencil can be sharpened.
   * @returns True if the pencil's length is greater than 0, false otherwise.
   */
  private canSharpen(): boolean {
    return this.length > 0;
  }

  /**
   * Restores the pencil's durability to its initial value.
   */
  private restoreDurability(): void {
    this.durability = this.initialDurability;
  }

  /**
   * Reduces the pencil's length by 1.
   */
  private reduceLength(): void {
    this.length -= 1;
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
   * Writes a string of text to the text buffer and reduces durability if applicable.
   * @param text - The string of text to write.
   */
  write(text: string): void {
    for (const char of text) {
      if (this.isSpace(char)) {
        // Spaces do not reduce durability
        this.appendToText(char);
        continue;
      }

      if (this.isDurable()) {
        // Write the character and reduce durability based on its cost
        const cost = this.calculateDurabilityCost(char);
        console.log(`Writing '${char}' reduces durability by ${cost}`);
        this.appendToText(char);
        this.reduceDurability(cost);
      } else {
        // Handle the case where durability is zero
        this.handleZeroDurability(char);
      }
    }
  }

  /**
   * Handles the case where the pencil has zero durability.
   * @param char - The character to handle.
   */
  private handleZeroDurability(char: string): void {
    // Append a space instead of the character
    this.appendToText(" ");
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
   * Erases the last occurrence of a word from the text buffer.
   * @param word - The word to erase.
   */
  erase(word: string): void {
    // Find the last occurrence of the word, even if it overlaps with spaces
    const lastIndex = this.text.lastIndexOf(word);
    if (lastIndex !== -1) {
      // Replace only the non-space characters in the last occurrence with spaces
      const chars = this.text.split("");
      for (let i = lastIndex + word.length - 1; i >= lastIndex; i--) {
        if (chars[i] !== " ") {
          chars[i] = " ";
        }
      }
      this.text = chars.join("");
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

  /**
   * Retrieves the current length of the pencil.
   * @returns The remaining length.
   */
  getLength(): number {
    return this.length;
  }
}
