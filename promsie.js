let p11 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('error'))
  }, 3000);
})

let p22 = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    resolve(p11)
  }, 1000);
})

p22
  .then(res => console.log(res))
  .catch(ex => console.error(ex))