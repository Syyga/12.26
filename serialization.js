export function serializeUser(user) {
    const { name, email, age, grade, createdAt } = user;
    return `${name},${email},${age},${grade},${createdAt}`;
}
  