const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve([7, 4, 1])
    reject('Things went wrong')
  }, 2000);
})

doWorkPromise.then((result) => {
  console.log('Sucess', result)
}).catch((error) => {
  console.log(error)
})