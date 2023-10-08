function solution(n) {
  const result = [];
  // 시작값과 끝 값 설정
  let start = 1;
  let from = 3;

  function hanoi(start, from, n) {
    if (n === 1) {
      result.push([start, from]);
      return;
    }
    // 하노이의 탑 분석 후 반복되는 지점을 코드로 바꿈
    // 목표가 1 -> 3 이면
    // 중간 값 전에 모든 원판(n-1원판까지)은 1 -> 2 로 보냄
    hanoi(start, 6 - start - from, n - 1);
    // n번째 원판을 목표 지점(1 -> 3)으로 보냄
    result.push([start, from]);
    // n - 1 번째 원판까지 모든 원판을 2 -> 3 으로 보냄
    hanoi(6 - start - from, from, n - 1);
  }
  hanoi(start, from, n);

  return result;
}
