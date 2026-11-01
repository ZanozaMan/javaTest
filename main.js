let obj = {
    name: "valera",
    age: 18,
    a() {
        console.log(obj.name);
    },

    b() {
        console.log(this.name)
    }
}

a();
b();