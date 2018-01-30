import { Api } from './index';

export async function getDetails () {
  const res = await Api('http://sentence.iciba.com/index.php?c=dailysentence&m=getTodaySentence');
  console.log(res)
  return res;
}
