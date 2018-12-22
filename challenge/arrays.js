// !!! not finished !!!

[ [ [3] ] [ [ [4] ] ] ]

const arrayception = (array) => {
  if(array.includes(Array.isArray())) {
    console.log('yes')
  } else console.log('no')
}

console.log(arrayception([1[2[3]]]))