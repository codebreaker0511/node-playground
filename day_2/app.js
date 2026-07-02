const {
    createFile,
    deleteFile,
    writeFile,
    readFile,
    appendFile
} = require("./fileManager.js");

try {

    const command = process.argv[2];
    const filePath = process.argv[3];
    const message = process.argv[4];

    if (command === "create") {

        if (process.argv.length !== 4) {
            console.log("Usage: node app.js create <file>");
            return;
        }

        createFile(filePath);

    } else if (command === "delete") {

        if (process.argv.length !== 4) {
            console.log("Usage: node app.js delete <file>");
            return;
        }

        deleteFile(filePath);

    } else if (command === "read") {

        if (process.argv.length !== 4) {
            console.log("Usage: node app.js read <file>");
            return;
        }

        readFile(filePath);

    } else if (command === "write") {

        if (process.argv.length !== 5) {
            console.log("Usage: node app.js write <file> <message>");
            return;
        }

        writeFile(filePath, message);

    } else if (command === "append") {

        if (process.argv.length !== 5) {
            console.log("Usage: node app.js append <file> <message>");
            return;
        }

        appendFile(filePath, message);

    } else {

        console.log("Invalid command.");

    }

} catch (error) {
    console.log(error.message);
}