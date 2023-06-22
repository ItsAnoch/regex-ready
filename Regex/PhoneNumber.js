import countryCodes from "../data/countryCodes";
export const findCode = (country) => countryCodes.find((countryCodeData) => {
    country = country.trim().toLowerCase();
    return Object.values(countryCodeData).map((c) => c.toLowerCase()).includes(country);
});
export default function PhoneNumberRegex(countryCodes = [''], areaCodes = ['']) {
    let CountryCodes = countryCodes.map((c) => '\\' + findCode(c)?.dial_code).join("|");
    const AreaCodes = areaCodes.join('|') || '\\d{3}';
    const space = `[- ]*`;
    console.log(AreaCodes);
    const regexString = `(${CountryCodes ? CountryCodes + space : ''})` + `(${AreaCodes})` + space + `\\d{3}` + space + `\\d{4}`;
    return new RegExp(regexString);
}
