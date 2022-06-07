
export interface IAbbyy {
  /** Итоговое слово которое участвует в игре (рандомно выбрано в компоненте старт) */
  text: string;
  /** Наименование категории угадываемого слова */
  category: string;
}


export default function getRandomWord(wordArr: Array<IAbbyy>, letterCount: number) {

  const arrByCount = wordArr.filter((el: any) => Number(el.num) === Number(letterCount));
  const randomNumber = Math.floor(Math.random() * arrByCount.length);
  return arrByCount[randomNumber];

}
