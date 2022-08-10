export const getNewWord = (array) => {
  const actualWordToTranslate = array[Math.floor(Math.random() * array.length)];
  return actualWordToTranslate;
};
