function solution(k, m, score) {
  const quantity = {};
  let result = 0;

  // 과일의 점수와 수량을 object에 key, value로 넣어둠
  for (let i of score) {
    if (quantity[i] === undefined) {
      quantity[i] = 1;
    } else {
      quantity[i] += 1;
    }
  }
  // 반복문을 돌며
  let i = k;
  while (i > 0) {
    // 해당 점수의 과일이 없으면 점수를 깎고 넘어감
    if (quantity[i] === undefined) {
      i--;
      continue;
    }
    // 해당 점수의 과일이 1박스 수량과 같다면 result에 점수를 넣고 1점 깎음
    if (quantity[i] === m) {
      result += m * i;
      quantity[i] -= m;
      i--;
    } else if (quantity[i] > m) {
      // 해당 점수의 과일이 1박스 수량보다 많으면 result에 점수를 넣고 수량을 깎음
      result += m * i;
      quantity[i] -= m;
    } else {
      // 해당점수의 과일이 1박스 수량보다 적으면 점수를 1점 깎고 깎인 점수의 과일 수량을 더해줌
      if (quantity[i - 1] === undefined) {
        quantity[i - 1] = quantity[i];
      } else {
        quantity[i - 1] += quantity[i];
      }
      i--;
    }
  }
  return result;
}
