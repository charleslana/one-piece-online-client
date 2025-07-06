export default function formatCountdown(secondsLeft: number): string {
  if (secondsLeft <= 0) return 'Expirado';

  const secInMinute = 60;
  const secInHour = 3600;
  const secInDay = 86400;
  const secInMonth = secInDay * 30;
  const secInYear = secInDay * 365;

  if (secondsLeft >= secInYear) {
    const years = Math.floor(secondsLeft / secInYear);
    return `${years} ano${years > 1 ? 's' : ''} restante${years > 1 ? 's' : ''}`;
  }

  if (secondsLeft >= secInMonth) {
    const months = Math.floor(secondsLeft / secInMonth);
    return `${months} mês${months > 1 ? 'es' : ''} restante${months > 1 ? 's' : ''}`;
  }

  if (secondsLeft >= secInDay) {
    const days = Math.floor(secondsLeft / secInDay);
    return `${days} dia${days > 1 ? 's' : ''} restante${days > 1 ? 's' : ''}`;
  }

  if (secondsLeft >= secInHour) {
    const hours = Math.floor(secondsLeft / secInHour);
    return `${hours} hora${hours > 1 ? 's' : ''} restante${hours > 1 ? 's' : ''}`;
  }

  const h = Math.floor(secondsLeft / secInHour)
    .toString()
    .padStart(2, '0');
  const m = Math.floor((secondsLeft % secInHour) / secInMinute)
    .toString()
    .padStart(2, '0');
  const s = Math.floor(secondsLeft % secInMinute)
    .toString()
    .padStart(2, '0');

  return `${h}:${m}:${s}`;
}
