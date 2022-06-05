
interface IAbbyy {
  text: string;
  category: string;
}


export default function getRandomWord(wordArr: Array<IAbbyy>, letterCount: number) {

  const arrByCount = wordArr.filter((el: any) => Number(el.num) === Number(letterCount));
  const randomNumber = Math.floor(Math.random() * arrByCount.length);
  return arrByCount[randomNumber];

}
