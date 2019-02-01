
// check a row
const checkRow = (row) => {
  let nums  = ['1','2','3','4','5','6','7','8','9'];
  for (let i = 0; i < row.length; i++) {
    if(nums.includes(row[i])) nums.splice(nums.indexOf(row[i]), 1);
  }
  if(nums.length) return true;
  else return false;
}

// make a row from a column
const makeColumn = (matrix, x) => {
  let column = [];
  for(let i = 0; i < 9; i++) column.push(matrix[i][x]);
  return column.join('');
}

// make a row from a 3x3 box
const makeBox = (matrix, y, x) => {
  let box = [];
  for(let i = 0; i < 9; i++) {
    if(box.length === 0) box.push(matrix[y][x]);
    else if (i % 3 === 0) { 
      y += 1; x -= 2;
      box.push(matrix[y][x]);
    }
    else {
      x += 1;
      box.push(matrix[y][x]);
    }
  }
  return box.join('');
}

// main function
function sudokuCheck (boardStr) {
  let array = boardStr.match(/.{1,9}/g);
  if(array[0].length !== 9 || array.length !== 9) return "invalid";
  if(checkRow(array[1])             && 
     checkRow(array[7])             && 
     checkRow(makeColumn(array, 1)) && 
     checkRow(makeColumn(array, 7))) return "invalid";
  else {
    let pass = true;
    for(let i = 0; i < 9; i += 3) {
      for(let j = 0; j < 9; j += 3) {
        if(checkRow(makeBox(array, i, j))) pass = false;
      }
    }
    if(!pass) return "invalid";
    else return "solved";
  }
}


let test1 = "795836421\n462195387\n381247956\n279458613\n654371892\n813629745\n147583269\n538962174\n926714538";
let test2 = "735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429";
let test3 = "895631472\n327984516\n461257398\n942813765\n183765924\n756429183\n578142639\n214398657\n639578241";
console.log(sudokuCheck(test3))

//console.log(getCol("123456789"))

// col 1 | 7
// row 1 | 7

// 0 1 2 3 4 5 6 7 8
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8


