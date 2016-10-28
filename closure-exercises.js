//Counter
function counter() {
    var count = 0;
    function increaseCount(){
        count+= 1;
        return count;
    }
    return increaseCount;
}
var count1 = counter();
var count2 = counter();
console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2());
console.log(count1());

//Counter 2
function counter2(num) {
    var count = num-1;
    function increaseCount(){
        count+= 1;
        return count;
    }
    return increaseCount;
}
var count1 = counter2(5);
var count2 = counter2(10);
console.log(count1());
console.log(count1());
console.log(count2());
console.log(count2());
console.log(count1());


//Battleship
var fire = function initializeBoard() {
    var board = [
      ['o', ' ', 'o', 'o', ' '],
      ['o', ' ', ' ', ' ', ' '],
      ['o', ' ', 'o', 'o', 'o'],
      ['o', ' ', ' ', ' ', ' '],
      [' ', ' ', 'o', ' ', 'o'],
      [' ', ' ', 'o', ' ', 'o']
    ];

    function fire(row, col) {
      if (board[row][col] === 'o') {
        board[row][col] = 'x';
        return 'Hit!';
      } else {
        return 'Miss';
      }
    }

    return fire;

}();
console.log(fire(0, 1));

//Acronym
var acronym = function intializeAcronymn(wordArray) {

    function getFirst(word) {
        return word[0].toUpperCase();
    }

    function acronym(wordArray) {
        newArray = wordArray.map(getFirst);
        return newArray.reduce(function(a,b) {return a+b;});
    }

    return acronym;
}();
console.log(acronym(['very', 'important', 'person']));
console.log(acronym(['national', 'aeronautics', 'space', 'administration']));
