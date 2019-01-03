// find the longest sequence of repeating chars...
// return [start index, stop index]
// ex: 'aaabbbbcc' => [3,6]
// no input return => [0,0]

function longestRun (string) {
  if(string.length === 0) return [0,0]
  let answer = []; let hold = null;
  for(let i = 0; i < string.length; i++) {
    if(answer.length === 0){answer.push({letter:string[i],first:i,last:i})}
    else if (string[i] === answer[answer.length - 1].letter){answer[answer.length - 1].last++}
    else if(string[i] !== answer[answer.length - 1]){answer.push({letter:string[i],first:i,last:i})}
  }
  for(let i = 0; i < answer.length; i++) {
    if(hold === null) {hold = answer[i]} 
    else if ((answer[i].last-answer[i].first) > (hold.last-hold.first)) {
      hold = answer[i]
    }
  } 
  return [hold.first,hold.last];
}
// the second for loop idealy doesnt have to loop through everything 
// but it could, so n2...