import { Identifier } from '../identifier';
import { Tokenizer } from '../tokenizer';
import { TextIdentifier } from '../identifiers/text-identifier';

export class TextTokenizer implements Tokenizer<string, TextIdentifier> {
  constructor(private separator: string[]) { }

  tokenize(value: string, baseIdentifier: Identifier): Map<string, TextIdentifier[]> {
    const tokenMap = new Map<string, TextIdentifier[]>();

    let currentIndex = 0;

    for (let i = 0; i < value.length; i++) {
      const currentChar = value[i];
      if (this.separator.includes(currentChar)) {
        const currentString = value.slice(currentIndex, i);
        this.handleEndOfToken(currentString, new TextIdentifier(currentIndex, baseIdentifier), tokenMap);
        currentIndex = i + 1;
      }
    }

    const currentString = value.slice(currentIndex);
    this.handleEndOfToken(currentString, new TextIdentifier(currentIndex, baseIdentifier), tokenMap);

    return tokenMap;
  }

  private handleEndOfToken(currentString: string, currentIndex: TextIdentifier, tokenMap: Map<string, TextIdentifier[]>): void {
    const currentPositions = tokenMap.get(currentString);
    if (currentPositions) {
      currentPositions.push(currentIndex);
    } else {
      tokenMap.set(currentString, [currentIndex]);
    }
  }
}