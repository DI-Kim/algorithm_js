function solution(n, m, section) {
  // 페인트칠이 끝난 기준으로(기준)
  let end = section[0] + m - 1;
  // 무조건 1회는 칠해야 하니까 default 1
  let result = 1;

  for (const i of section) {
    // 기준보다 section의 값이 커지는 순간 if 문으로 들어감
    if (end < i) {
      // 기준 초기화
      end = i + m - 1;
      // 칠 횟수 1 증가
      result += 1;
    }
  }
  return result;
}
