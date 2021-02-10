function randomHexValue() {
  const hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a" , "b", "c", "d", "e", "f"];
  let hexCode = ["#"];
  for (i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * Math.floor(15));
    randomNumber = hexValues[randomNumber];
    hexCode.push(randomNumber);
  }

  // let hexCode = ["#", "f", "f", 1, 1, 2, 2];
  // console.log(hexCode);
  // console.log(hexCode[1] === hexCode[2]);
  // console.log(hexCode[3] === hexCode[4]);
  // console.log(hexCode[5] === hexCode[6]);




  if (hexCode[1] === hexCode[2] && hexCode[3] === hexCode[4] && hexCode[5] === hexCode[6]) {
    // console.log(hexCode);
    hexCode.splice(2, 1);
    // console.log(hexCode);
    hexCode.splice(3, 1);
    // console.log(hexCode);
    hexCode.splice(4, 1);
    // console.log(hexCode);
  }



  // console.log(hexCode);
  //
  // for (var i = 1; i < 6; i += 2) {
  //   console.log("i: " + i);
  //   let x = i + 1;
  //   console.log("x:" + x);
  //   // for (var x = 2; x <= 6; x += 2) {
  //   //   console.log(x);
  //   console.log(hexCode[i]);
  //   console.log(hexCode[x]);
  //     if (hexCode[i] == hexCode[x]) {
  //       hexCode.splice(i, 1);
  //     }
  // }

  document.getElementById("hex-value").innerHTML = " " + hexCode.join('');
  document.body.style.background = hexCode.join('');

}
