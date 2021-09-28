export const UserAPI = {
  list() {
    let suersString = localStorage.getItem("users");
    let suers = suersString ? JSON.parse(suersString) : [];
    return suers;
  },
  add(user) {
    let users = UserAPI.list();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  },
  find(user) {
    let users = UserAPI.list();
    return users.find((u) => u.id === user.id);
  },
};
