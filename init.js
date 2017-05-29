exports.seqasync = function(list, action, callback) {
  for (let element of list){
    const result = await action(element)
    callback(result)
  }
};

