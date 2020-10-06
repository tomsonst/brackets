module.exports = function check(str, arr) {
  let arrTest =[];
  let k =0;
  for(let i =0;i<arr.length; i++){
    let strTest = arr[i][0] +arr[i][1];
    arrTest.push(strTest);
  }
  for(let c = 0; c< 50; c++){
    
    for(let i =0; i<arrTest.length;i++){
   
      str = str.replace(arrTest[i], '');
      
    }
    
  }
  
  return(str.length === 0 ? true: false);
}
