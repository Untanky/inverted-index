import { DecoratorIdentifier } from '../decorator-identifier';
import { Identifier } from '../identifier';
import { Tokenizer } from '../tokenizer';

class TextIdentifier extends DecoratorIdentifier {
  constructor(readonly position: number, identifier: Identifier) {
    super(identifier)
  }

  serialize(): string {
    return `${this.identifier.serialize()}@${this.position}`;
  }
}

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