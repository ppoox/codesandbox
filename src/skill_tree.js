function solution(skill, skill_trees) {
  let answer = 0;

  const skills = skill.split("");

  for (let st of skill_trees) {
    let count = 0;
    let prev = -1;

    let noCount = 0;
    let isSuccess = true;
    for (let skill of skills) {
      let index = st.indexOf(skill);
      if (index === -1) {
        noCount++;
      }

      if (prev > index) {
        console.log(count, st);
        isSuccess = false;
        break;
      }
      prev = index;

      count++;
    }
    // if (noCount > skills.length - 1) {
    //   console.log(st);
    //   isSuccess = false;
    // }

    if (isSuccess) {
      console.log("결과", st);
      answer++;
    }
  }
  return answer;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA", "AQT"]);
