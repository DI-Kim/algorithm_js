function returnValue(word, n) {
    let a = (word + 1) % n;
    let b = Math.ceil((word + 1) / n);
    return [a === 0 ? n : a, b];
}

function solution(n, words) {
    let beforeValue;

    for (let word = 0; word < words.length; word++) {
        //beforeValue가 없다면
        if (!beforeValue) {
            // beforeValue에 마지막 단어 저장
            beforeValue = words[word].at(-1);
            continue;
        }
        // beforeValue가 있다면
        // beforeValue가 단어 첫글자와 맞다면 beforeValue 업데이트
        if (beforeValue === words[word][0]) {
            beforeValue = words[word].at(-1);
        }
        // 맞지 않다면 그 단어 return하기
        else {
            return returnValue(word, n);
        }
        // 같은 단어가 있다면 return하기
        for (let i = 0; i < word; i++) {
            if (words[i] === words[word]) {
                return returnValue(word, n);
            }
        }
    }

    return [0, 0];
}
