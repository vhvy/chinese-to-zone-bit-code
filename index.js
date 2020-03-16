import { keys } from "./keys.js";

export function convertToZoneBitCode(str) {
    let codeList = "";

    for (let s of str) {
        const index = keys.indexOf(s);
        if (index === -1) continue;
        const highBitCode = (0xB0 + parseInt(index / 94)) - 0xA0;
        const lowBitCode = (0xA1 + parseInt(index % 94)) - 0xA0;
        console.log(highBitCode, lowBitCode);
        codeList += highBitCode + (lowBitCode < 10 ? "0" : "") + lowBitCode;
    }
    return codeList;
}

export default convertToZoneBitCode;