# 내 풀이

### true 인 조건

- 두 문장이 완전 동일하거나
- 1. 시작이 같거나 2) 끝이 같으면서 3) 사이에 아무것도 없거나

위 방법을 생각했는데 코드로 어떻게 구현해야할지 잘 떠오르지 않아 어려웠다.
코드가 더럽더라도 생각한 조건대로 작성하려고 해봤다.

result 의 기본값을 true 로 지정해놓고,
문장 별로 처음과 끝에 해당하는 인덱스를 각각 지정한 뒤
앞에서부터 비교, 뒤에서부터 비교하다가
동일하지 않은 값이 나올 때 false 를 반환하도록 했다.

추가적인 분기처리를 더 해줘야 할 것이라 생각했는데 통과해서 오히려 놀랐던.

# Solution

```
/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(s1, s2) {
    // If sentences are equal, return true.
    if(s1 === s2) return true;
    // Convert the sentences to array of words.
    const w1 = s1.split(' '), w2 = s2.split(' ');

    // Compare the first word of each sentence, if equal, remove it from both.
    while (w1.at(0) === w2.at(0)) w1.shift(),w2.shift();
    // Same for the last word.
    while (w1.at(-1) === w2.at(-1)) w1.pop(),w2.pop();

    // If one sentence can be completed by another, the shortest sentence list will now be empty.
    return !w1.length || !w2.length;
};
```

값을 배열에서 삭제하는 방식도 잠깐 떠올렸는데, 실제로 구현된 코드가 있어서 가져왔다

### 배울 점

1.  at 메서드를 사용해서 특히 마지막 아이템을 비교할 때 편하게 작성했다.
    나는 인덱스로 접근하려다 보니 두 배열의 길이가 달라 각각 `array.length - 1` 을 정의해두고 썼는데 이 방식이 접근이 좀 더 편리했던 듯.
    하지만 at 을 쓰지 않더라도 `array[array.length - 1]` 을 사용하면 되니 최신 문법을 사용한 자체가 잘 한 것이라기보다 동일한 값인 경우 삭제를 해줌으로써 index 를 변화시키지 않고도 계속해서 맨 앞, 맨 뒤 요소만 비교하면 된다는 점이 배울 점이다

2.  shift, pop 을 사용하여 동일한 단어를 찾았을 때 배열에서 아예 삭제해버림
    하나의 덩어리만 추가해서 동일한 문장을 만들어야하기 때문에, 두 문장을 비교할 때 처음이나 끝 중 어느 한 부분은 똑같은 단어로 시작이 되어야한다.

- 첫 부분부터 비교해서 동일한 단어 삭제
- 끝 부분부터 비교해서 동일한 단어 삭제

  하고 났을 때 문장 하나는 남은 요소가 없다면 하나의 덩어리만 추가하여 두 문장을 동일하게 만들 수 있다는 뜻.
