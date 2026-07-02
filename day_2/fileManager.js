const {
    writeFileSync,
    existsSync,
    unlinkSync,
    appendFileSync,
    readFileSync
} = require("fs");

const path = require("path");

const getFilePath = (fileName) => {
    return path.join(__dirname, "data", fileName);
};

const fileExists = (fileName) => {
    return existsSync(getFilePath(fileName));
};

const createFile = (fileName) => {
    const filePath = getFilePath(fileName);

    if (fileExists(fileName)) {
        console.log("File already exists.");
        return;
    }

    writeFileSync(filePath, "");
    console.log("File created successfully.");
};

const readFile = (fileName) => {
    const filePath = getFilePath(fileName);

    if (!fileExists(fileName)) {
        console.log("File does not exist.");
        return;
    }

    console.log(readFileSync(filePath, "utf-8"));
};

const writeFile = (fileName, message) => {
    const filePath = getFilePath(fileName);

    writeFileSync(filePath, message);
    console.log("Content written successfully.");
};

const appendFile = (fileName, message) => {
    const filePath = getFilePath(fileName);

    appendFileSync(filePath, "\n" + message);
    console.log("Content appended successfully.");
};

const deleteFile = (fileName) => {
    const filePath = getFilePath(fileName);

    if (!fileExists(fileName)) {
        console.log("File does not exist.");
        return;
    }

    unlinkSync(filePath);
    console.log("File deleted successfully.");
};

module.exports = {
    createFile,
    deleteFile,
    writeFile,
    readFile,
    appendFile,
    fileExists
};