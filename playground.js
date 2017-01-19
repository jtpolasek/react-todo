function revrot(str, sz) {
    if(sz <= 0 || str === '' || sz > str.length){
    return "";
    }
    var arr = str.split('');

    var comp = arr.reduce((final, curr, prev, arrs) => {
      console.log('arr' + arrs);
      console.log('sz' + sz);
      while(arrs.length >= sz){
        var temparr = arrs.splice(0, sz);
        var sum = 0;
            console.log("temp arr" + temparr);
            temparr.forEach((a) => {
                console.log("a" + a);
              var power =Math.pow(a, 3);
                console.log("power" + power);
              sum += power;
                console.log('sum' + sum);
            });
                console.log('sum % 2 ' + sum % 2);
            if(sum % 2 === 0){
              final = temparr.reverse();

            } else{
              
                var a = temparr.shift()
                final = temparr.push(a);
                console.log('final rev ' + final);
            }
      }
      console.log('final' + final);
      return final;
    }, [])
}
// keep this function call here
s = "733049910872815764"
console.log(revrot(s, 5));
