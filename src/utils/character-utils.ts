export function getFaction(faction: string) {
  switch (faction) {
    case 'pirate':
      return 'Pirata';
    case 'marine':
      return 'Marinha';
    case 'revolutionary':
      return 'Revolucionário';
    default:
      return '';
  }
}
