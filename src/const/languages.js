export const LANGUAGES = [
  'システムデザイン工学部',
  '未来科学部',
  '工学部',
  '工学部第二部',
  '理工学部',
  '情報環境学部'
];

export const getLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(LANGUAGES);
    }, 1000)
  })
}
