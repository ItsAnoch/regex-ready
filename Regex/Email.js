export var EmailDomains;
(function (EmailDomains) {
    EmailDomains["GMAIL"] = "gmail.com";
    EmailDomains["HOTMAIL"] = "hotmail.com";
    EmailDomains["YAHOO"] = "yahoo.com";
    EmailDomains["OUTLOOK"] = "outlook.com";
    EmailDomains["PROTONMAIL"] = "protonmail.com";
    EmailDomains["AOL"] = "aol.com";
    EmailDomains["ICLOUD"] = "icloud.com";
    EmailDomains["ZOHO"] = "zoho.com";
    EmailDomains["MAIL"] = "mail.com";
    EmailDomains["GMX"] = "gmx.com";
    EmailDomains["YANDEX"] = "yandex.com";
    EmailDomains["LIVE"] = "live.com";
    EmailDomains["ATT"] = "att.net";
    EmailDomains["VERIZON"] = "verizon.net";
    EmailDomains["COX"] = "cox.net";
})(EmailDomains || (EmailDomains = {}));
export default function EmailRegex(domain = '', topLevelDomain = []) {
    if (Array.isArray(domain))
        domain = `(${domain.join('|')}).(${topLevelDomain.length ? topLevelDomain.join('|') : '[\\w-]{2,4}'})`;
    if (domain instanceof RegExp)
        domain = domain.source;
    const DomainRegexString = domain ?? `([\w-]+\.)+[\w-]{2,4}`;
    const BaseRegexString = `[\\w-\\.]+@${DomainRegexString}`;
    const emailRegex = new RegExp(BaseRegexString, 'g');
    return emailRegex;
}
