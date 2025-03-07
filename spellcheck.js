export const checkSpelling = (text) => {
  const dictionary = ["history", "revolution", "freedom", "democracy", "government", "independence"];
  const words = text.toLowerCase().split(/\s+/);
  return words.filter(word => !dictionary.includes(word) && word.length > 3);
};
