    if (inputLine.slice(0, 7) === "turn off") {
        command = "tof";
        console.log("The given command is to turn off!");
        fromCoordStart = (inputLine.indexOf("turn off".toLowerCase()) + 9);
        console.log("From Coord starts with " + inputLine[fromCoordStart]);
    } else if (inputLine.slice(0, 6) === "turn on") {
        command = "ton";
        console.log("The given command is to turn on!");
        fromCoordStart = (inputLine.indexOf("turn on".toLowerCase()) + 8);
        console.log("From Coord starts with " + inputLine[fromCoordStart]);

    } else if (inputLine.slice(0, 4) === "togg".toLowerCase()) {
        // console.log("The given command is to toggle.");
        command = "tog";
        fromCoordStart = (inputLine.indexOf("toggle".toLowerCase()) + 7);
        // console.log(fromCoordStart);
        console.log("From Coord starts with " + inputLine[fromCoordStart]);
    } else {
        console.log("The command is not recognized.")
    }