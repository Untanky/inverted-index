export class TextTokenizer<Position = number> {
  constructor(private separator: string[]) { }

  tokenize(value: string): Map<string, Position[]> {
    const tokenMap = new Map<string, Position[]>();

    let currentIndex = 0;

    for (let i = 0; i < value.length; i++) {
      const currentChar = value[i];
      if (this.separator.includes(currentChar)) {
        const currentString = value.slice(currentIndex, i);
        this.handleEndOfToken(currentString, currentIndex as unknown as Position, tokenMap);
        currentIndex = i + 1;
      }
    }

    return tokenMap;
  }

  private handleEndOfToken(currentString: string, currentIndex: Position, tokenMap: Map<string, Position[]>): void {
    const currentPositions = tokenMap.get(currentString);
    if (currentPositions) {
      currentPositions.push(currentIndex);
    } else {
      tokenMap.set(currentString, [currentIndex]);
    }
  }
}