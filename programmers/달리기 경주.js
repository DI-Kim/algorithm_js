function solution(players, callings) {
  const playerHash = {};
  // 객체에 저장
  // key: player name
  // value: player Index
  for (let i = 0; i < players.length; i++) {
    playerHash[players[i]] = i;
  }
  // callings 함수를 순회하며
  for (const calling of callings) {
    // playerIndex 를 알아놓음
    let playerIndex = playerHash[calling];

    // 객체 순서 바꾸기
    // 제치는 사람의 인덱스(밸류)를 1 낮춰줌
    playerHash[calling] = playerIndex - 1;
    // 제쳐진 사람의 인덱스를 현재 인덱스로 바꿈
    playerHash[players[playerIndex - 1]] = playerIndex;

    // 배열 순서 바꾸기
    // 제친 사람의 인덱스에 제쳐진 사람의 이름 저장
    players[playerIndex] = players[playerIndex - 1];
    // 재쳐진 사람의 인덱스에 제친 사람의 이름 저장
    players[playerIndex - 1] = calling;
  }
  return players;
}
