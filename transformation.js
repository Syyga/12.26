export function assignUserGrade(user) {
    let grade;
    if (user.age < 19) {
      grade = "JUNIOR";
    } else if (user.age < 40) {
      grade = "ADULT";
    } else {
      grade = "SENIOR";
    }
  
    return { ...user, grade };
}
  
  // 사용자 정보를 표준 형식으로 변환하는 함수
export function formatUserData(user) {
    return {
      ...user,
      name: user.name.toUpperCase(),
      createdAt: new Date().toISOString(),
    };
}