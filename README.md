# seqmap
Sequential map

# Install

```
npm i -S seqmap
```

# Usage
```js

const seqmap = require('seqmap')

function asyncfn(seconds, index){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(index + ': Resolved after ' + seconds + 'seconds')
    }, seconds*1000)
  })
}

function logger(val){
  console.log(val)
}


seqmap([3,2], asyncfn, logger, () => { console.log('All promises resolved seqly') })
```
