/** @format */

const addID = <T extends object>(obj: T) => {
    let id = Math.floor(Math.random() * 100);
    return { ...obj, id };
};

let user = addID({
    name: "Mashrafi",
    age: 40,
});
 
