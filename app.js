function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

const doubleFunc = (val) => val * 2;

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

  const findEvens = (numbers) => {
    const squares = numbers.map((num) => (num ** 2));
    const evens = squares.filter((square) => (square % 2 === 0));
    return evens;
  };

// better answer //
const squareAndFindEvensAnswer = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0);