// To check if a year is a leap year or not
export function checkLeapYear(year) {
    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    }
    else {
        return false;
    }
}
let daysInMonths = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31 // December
];
const monthsKeys = [
    ['jan', 'january', '1'],
    ['feb', 'february', '2'],
    ['mar', 'march', '3'],
    ['apr', 'april', '4'],
    ['may', 'may', '5'],
    ['jun', 'june', '6'],
    ['jul', 'july', '7'],
    ['aug', 'august', '8'],
    ['sep', 'september', '9'],
    ['oct', 'october', '10'],
    ['nov', 'november', '11'],
    ['dec', 'december', '12']
];
const searchMonths = (val) => monthsKeys.find((item) => item.includes('' + val));
export function ExtractDate(dateString, format = 'DD/MM/YYYY') {
    let input = dateString.replace(/((?<=\d)(?:st|nd|rd|th)\b)|to/g, '');
    // Split the string by many separators. Eg. 1/01/2023, 1, 01, 2023, 1 01 2023
    let Date = input.trim().toLowerCase().split(/[-,/\|_:~ ]+/g);
    // Making format into chunks
    const FormatArr = format.split('/');
    const MappedDate = {
        // To allow formats with only 2 values
        DD: ['YYYY/MM', 'MM/YYYY'].includes(format) ? 1 : 0,
        YYYY: ['DD/MM', 'MM/DD'].includes(format) ? 1000 : 0,
        MM: 0,
    };
    //@ts-ignore
    Date.map((val, i) => MappedDate[FormatArr[i]] = val);
    // Converts words into month numbers. Jan/January -> 1
    const monthAsInt = searchMonths(MappedDate.MM)?.at(-1);
    MappedDate.MM = monthAsInt ? +monthAsInt : NaN;
    // Converts strings into numbers
    MappedDate.YYYY = +MappedDate.YYYY;
    MappedDate.DD = +MappedDate.DD;
    return MappedDate;
}
export default function ValidateDateRegex(dateString, format = 'DD/MM/YYYY') {
    // To remove ordinal indicators and remove the word 'to'
    const MappedDate = ExtractDate(dateString, format);
    // Checking if date values are within bounds
    if (MappedDate.YYYY > 9999 || MappedDate.YYYY < 1000)
        return false;
    if (!MappedDate.MM || MappedDate.MM < 1)
        return false;
    let daysInMonth = daysInMonths[MappedDate.MM - 1];
    // Checking if leap year for february
    if (checkLeapYear(MappedDate.YYYY) && MappedDate.MM === 2)
        daysInMonth = 29;
    if (MappedDate.DD > daysInMonth || MappedDate.DD < 1)
        return false;
    return true;
}
