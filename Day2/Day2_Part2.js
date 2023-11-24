const fs = require('fs');

fs.readFile('Day2_Input', function (err, data) {
    if (err) throw err;

    console.log(data.toString());
    //  \r\n means Carriage Return(\r) , New Line (\n) which means so much as that the carriage return and new line is replaced by a New Line, which is later split on that element.
    const arr = data.toString().replace(/\r\n/g, '\n').split('\n');
    const ribbonNeededArray = [];
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
//  This puzzle consists of two parts. In one part we need the two smallest sides. I'm going to try and figure that out by excluding the largest of the three sides.
        let largestSide = Math.max(substringLength, substringWidth, substringHeight);
        let smallSideOne = null;
        let smallSideTwo = null;
        console.log(largestSide);
//  Now that we know what the largest side is, we can determine the two smallest sides.
        if (largestSide.toString() === substringLength) {
            smallSideOne = substringWidth;
            smallSideTwo = substringHeight;
            console.log("Since " + largestSide + " is the largest side, " + smallSideOne + " and " + smallSideTwo + " are the smaller sides.");
        } else if (largestSide.toString() === substringWidth) {
            smallSideOne = substringLength;
            smallSideTwo = substringHeight;
        } else if (largestSide.toString() === substringHeight) {
            smallSideOne = substringLength;
            smallSideTwo = substringWidth;
        }
        console.log(smallSideOne);
        console.log(smallSideTwo);

//  Now that we have determined the two shortest sides, it's time to calculate the amount of ribbon needed.
        let ribbonWrapNeeded = (2 * smallSideOne) + (2 * smallSideTwo);
        console.log("The amount of ribbon needed to wrap the present is " + ribbonWrapNeeded);
//  Next, we need a bow, made from ribbon as well.
        let bowRibbonNeeded = substringLength * substringWidth * substringHeight;
        console.log("To make the bow, a total of " + bowRibbonNeeded + " feet of ribbon is needed");
//  Finally, it's time to calculate the total amount of ribbon needed. This is simply a matter of adding both previous numbers.
        let totalRibbonNeeded = ribbonWrapNeeded + bowRibbonNeeded;
        console.log("The total amount of ribbon needed for this present is " + totalRibbonNeeded);
//  Add the needed Ribbon to the array ribbonNeededArray
        ribbonNeededArray.push(totalRibbonNeeded);
        console.log(ribbonNeededArray);
        let resultRibbon = 0;
        for (let i = 0; i < ribbonNeededArray.length; i++) {
            resultRibbon = resultRibbon + ribbonNeededArray[i];
        }
        console.log("The total amount of wrapping paper needed is: " + resultRibbon + " square feet.");
    }
    ;
});
