const seqmap = require('../lib/index')

function asyncfn(seconds){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved after ' + seconds + 'seconds')
    }, seconds*1000)
  })
}

function logger(val){
  console.log(val)
}


seqmap([1,2], asyncfn, logger, () => { console.log('All promises resolved seqly') })
