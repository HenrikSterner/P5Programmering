function setup() {
    createCanvas(windowWidth, windowHeight);
    translate(windowWidth/2, windowHeight/2);
    line(0, 0, 0, windowHeight/2);
    line(0, 0, windowWidth/2, 0);
    line(0, 0, 0, -windowHeight/2);
    line(0, 0, -windowWidth/2, 0);

    let funcList = [[], [], [], [], [], []];
    for (let x = - windowWidth/2; x < windowWidth/2; x++) {
        //førstegrads ligning
        let fx = 2*x +3;
        let gx = sq(0.1*x) + 3*x +4;
        let hx = 2*sqrt(x);
        let ix;
        if (x != 0) {
            ix = 5000/x;
        }
        else {
            ix = 0;
        }
        let jx = 20*sin(0.05*x);
        let kx = 20*cos(0.05*x);

        funcList[0].push(fx);
        funcList[1].push(gx);
        funcList[2].push(hx);
        funcList[3].push(ix);
        funcList[4].push(jx);
        funcList[5].push(kx);

        for (let i = 0; i < funcList.length; i++){
            line(x-1, funcList[i][funcList[i].length -2], x, funcList[i][funcList[i].length -1]);
        }
        print(funcList[0]);
    }
}