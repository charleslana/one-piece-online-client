export interface UserCharacter {
  id: number;
  character: string;
  avatar: string;
  name: string;
  level: number;
  faction: string;
  berry: string;
  sea: string;
  heart: string;
  energy: string;
  stamina: string;
  characterProfile: string;
}

export interface UserCharacterResponse {
  userCharacters: UserCharacter[];
}
