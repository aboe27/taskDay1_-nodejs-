var mapFilterAndReduce = arr =>{
  return arr.map(function(val){
    return val.firstName
  }).filter(function(val){
    return val.length < 5;
  }).reduce(function(acc,next){
    acc[next] = next.length
    return acc;
  }, {})
}
