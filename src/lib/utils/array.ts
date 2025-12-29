export const shuffle = <T>(array: T[]): T[] => {
  const shuffled = [...array];

  array.forEach((_, i) => {
    const randIndex = Math.floor(Math.random() * i) as number;

    [shuffled[i], shuffled[randIndex]] = [shuffled[randIndex], shuffled[i]];
  });

  return shuffled;
};
