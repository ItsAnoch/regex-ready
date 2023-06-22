export default function UrlRegex(domains = [], topLevelDomains = [], protocols = ['https', 'http']) {
    const PROTOCOLS_REGEX_STRING = `(${protocols.join('|') ?? '[-a-zA-Z0-9@:%._\\+~#=]{1,256}'})://(www.)?`;
    const DOMAIN_REGEX_STRING = `(${domains.join('|') ?? '[a-zA-Z0-9()]{1,6}'})`;
    const TOPLEVEL_DOMAIN_REGEX_STRING = `.(${topLevelDomains.join('|')})`;
    const REGEX_STRING = `${PROTOCOLS_REGEX_STRING + DOMAIN_REGEX_STRING + TOPLEVEL_DOMAIN_REGEX_STRING}(/.+)?`;
    return new RegExp(REGEX_STRING, 'g');
}
