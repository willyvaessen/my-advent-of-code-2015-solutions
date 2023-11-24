const fs = require('fs');

fs.readFile('inputfile.txt', function (err, data) {
    if (err) throw err;

    console.log(data.toString());


//  \r\n means Carriage Return(\r) , New Line (\n) which means so much as that the carriage return and new line is replaced by a New Line, which is later split on that element.
    const arr = data.toString().replace(/\r\n/g, '\n').split('\n');
    const paperNeededArray = [];
    console.log("Data has just been added to an array, named 'arr' ");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].toString());
        let firstX = arr[i].indexOf("x");
        let lastX = arr[i].lastIndexOf("x");
        // console.log("The first X is located at position " + firstX + " in the string.");
        // console.log("The second/last X is located at position " + lastX + " in the string.");

        substringLength = arr[i].substring(0, firstX);


        substringWidth = arr[i].substring(firstX + 1, lastX);


        substringHeight = arr[i].substring(lastX + 1);
        // console.log("Time to log the substrings we have declared");
        // console.log(substringLength);
        // console.log(substringWidth);
        // console.log(substringHeight);
        console.log("This present has a length of " + substringLength + ", a width of " + substringWidth + " and a height of " + substringHeight);
        //  Now it's time to calculate the paper needed for this present
        //  First we calculate the area for each side of the present
        let sideOneArea = substringLength * substringWidth;
        console.log(sideOneArea);

        let sideTwoArea = substringWidth * substringHeight;
        console.log(sideTwoArea);

        let sideThreeArea = substringLength * substringHeight;
        console.log(sideThreeArea);

        //  We need some slack paper:
        // let slackPaper = substringLength * substringWidth; <-- This was my original solution, which didn't work out right beacuse I had not read the instructions well enough.
        let slackPaper = Math.min(sideOneArea, sideTwoArea, sideThreeArea);
        console.log(slackPaper);

        //  Let's log it:
        let paperNeeded = (2 * sideOneArea) + (2 * sideTwoArea) + (2 * sideThreeArea) + slackPaper;
        console.log("The paper needed for this present is: " + paperNeeded);
        //  Amd push this into the array paperNeededArray
        paperNeededArray.push(paperNeeded);

    }
    console.log(paperNeededArray);

    //  Now that we have an array with all the paper needed, PER present, it's time to add all those numbers together.
    console.log("We are now going to find a wat to add all numbers in the array, to get a grand total.");
//  Let's see if I can do that with a For .. loop as well.
    let result = 0;
    for (let i = 0; i < paperNeededArray.length; i++) {
        result = result + paperNeededArray[i];
    }
    console.log("The total amount of wrapping paper needed is: " + result + " square feet.");
});






