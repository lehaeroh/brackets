module.exports =
function check(str, bracketsConfig) {
  let stack = [];
  let pairsBrack = Object.fromEntries(bracketsConfig);

  [...str].forEach((item) => {

    if (bracketsConfig.flat().includes(item)) {
      if (stack.length > 0 && pairsBrack[stack[stack.length - 1]] === item) {

        stack.pop();
      } else {
        stack.push(item);
      }
    }
  });
  // console.log("stack.length ", stack.length);
  return stack.length === 0;
}

