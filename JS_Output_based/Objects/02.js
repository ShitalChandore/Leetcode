let user = {
  name: "shital",
  getName() {
    setTimeout(() => {
      console.log(this.name);
    }, 0);
  },
};

user.getName();
