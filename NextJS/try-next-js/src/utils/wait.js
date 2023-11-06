/** @format */

const wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("rejected"), 5000);
    });
};

export default wait;
