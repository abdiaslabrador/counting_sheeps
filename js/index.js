sheepsAndWolfList = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ]

    wolfs = [ false, false, false ];

function countingSheeps(sheepsAndWolf) {
    let sheeps_acount = 0;

    let wolfs_acount = 0;

    for (let i = 0; i < sheepsAndWolf.length; i++) {
        if (sheepsAndWolf[i] == true) {
            sheeps_acount += 1;
        }
        else{
            wolfs_acount += 1;
        }
    }
    if (sheeps_acount > 0) {
        console.log('There are %s sheeps in total!', sheeps_acount);
    } else if(sheeps_acount == 0 && wolfs_acount > 1){
        console.log("UPS!!! Wolfs eaten Sheeps");
    }
}

countingSheeps(sheepsAndWolfList)
countingSheeps(wolfs)