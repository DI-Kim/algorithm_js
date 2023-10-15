function solution(today, terms, privacies) {
  const expire = new Date(today);

  //     termsDict = {A: 6, B: 12, C: 3}
  const termsDict = {};
  for (const i of terms) {
    let [type, term] = i.split(" ");
    termsDict[type] = Number(term);
  }

  const answer = [];
  // 개인정보 수집일자를 확인한다.
  privacies.forEach((item, idx) => {
    const [date, type] = item.split(" ");
    const newDate = new Date(date);

    newDate.setMonth(newDate.getMonth() + termsDict[type]);
    console.log(newDate);

    // 유효기간이 오늘 보다 작거나 같으면 answer에 푸쉬해준다.
    if (newDate <= expire) answer.push(idx + 1);
  });

  return answer;
}
