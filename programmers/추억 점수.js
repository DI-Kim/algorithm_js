function solution(name, yearning, photo) {
  const joinObj = {};
  const answer = [];

  // name과 yearning 배열을 객체로 저장 key: name, value: yearning
  for (let i = 0; i < name.length; i++) {
    joinObj[name[i]] = yearning[i];
  }
  // 이중 배열이므로 for문 2번 사용
  for (const names of photo) {
    let score = 0;
    for (const name of names) {
      // 만약 그리움 점수가 있으면 (배열에 이름이 존재하면) score에 그리움 점수 추가
      joinObj[name] && (score += joinObj[name]);
    }
    answer.push(score);
  }
  return answer;
}
