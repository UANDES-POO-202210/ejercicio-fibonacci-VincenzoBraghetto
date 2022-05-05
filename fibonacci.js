function F(n){
    if (n==0 || n==1){
        if (n==0){
            return 0;
        }
        if (n==1){
            return 1;
        }
    }
    else{
        return F(n-1)+F(n-2);
    }
}

const fs = require('fs');

fs.readFile("numero.txt", 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("F("+data+")"+" =", F(data));
});

