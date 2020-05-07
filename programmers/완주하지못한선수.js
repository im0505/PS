function solution(participant, completion) {
  var answer = "";
  let obj = {};
  for (let name of participant) {
    if (!obj[name]) {
      obj[name] = 1;
    } else {
      obj[name]++;
    }
  }

  for (let name of completion) {
    obj[name]--;
  }
  for (let name of participant) {
    if (obj[name] >= 1) answer = name;
  }
  return answer;
}

let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
let completion = ["josipa", "filipa", "marina", "nikola"];
participant = ["mislav", "stanko", "mislav", "ana"];
completion = ["mislav", "stanko", "ana"];
console.log(solution(participant, completion));
