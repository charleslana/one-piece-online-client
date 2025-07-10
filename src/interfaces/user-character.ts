export interface UserCharacter {
  id: string;
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

export interface CreateUserCharacter {
  name: string;
  sea: string;
  faction: string;
  breed: string;
  characterClass: string;
}
