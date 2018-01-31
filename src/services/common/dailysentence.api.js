import { jsonp } from './index';

const url = 'http://sentence.iciba.com/index.php?c=dailysentence&m=getTodaySentence'

export async function getDetails () {
  const res = await jsonp(url)
  return res

}
