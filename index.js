// code your solution here

const superbowlWin = (records) => { 
    const yearWin = records.find(record => record.result === "W");
    return yearWin ? yearWin.year : undefined;
}