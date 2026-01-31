

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Data is ", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
};


getData(100);
getData(200);
getData(300);


/**
 * callBack Hell:
 * nested callbacks stacked below one onther forming a myramid structure
 * pyramid of doom
 * 
 * this style of programming becomes difficult
 */



getData(1, () => {
    getData(2);
});
