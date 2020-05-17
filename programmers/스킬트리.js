function solution(skill, skill_trees) {
  let cnt = 0;
  for (let n = 0; n < skill_trees.length; n++) {
    let now = skill_trees[n];
    let sk = skill;
    for (let i = 0; i < now.length; i++) {
      if (sk.indexOf(now[i]) > 0) {
        break;
      } else if (sk.indexOf(now[i]) == 0) {
        sk = sk.slice(1, sk.length);
      }
      if (i == now.length - 1) cnt++;
    }
  }
  return cnt;
}
console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
