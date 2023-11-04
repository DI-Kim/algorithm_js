function solution(a, b) {
  let answer = 0;
  let i = -1;
  while (++i < a.length) {
    answer += a[i] * b[i];
  }
  return answer;
}
