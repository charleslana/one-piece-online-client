export interface Character {
  id: number;
  character: string;
  avatar: string;
}

export interface CharacterResponse {
  characters: Character[];
}
