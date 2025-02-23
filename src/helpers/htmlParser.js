import parse from 'html-react-parser';

function parseDynamicString() {
    let key = '';
    if (arguments && arguments.length > 0) {
        const args = Object.values(arguments);
        key = args.shift();
        const options = [...args];

        options.forEach((option, index) => {
            key = key.replace('{' + index + '}', option);
        });
    }
    return key;
}

function replacePlaceholders(string) {
    let formattedString = string;

    if (formattedString && formattedString.length > 0) {
        if (formattedString.includes('URL_ORIGIN')) {
            formattedString = formattedString.replaceAll('URL_ORIGIN', window.location.origin);
        }

        if (formattedString.includes('URL_HOST')) {
            formattedString = formattedString.replaceAll('URL_HOST', window.location.host);
        }
    }

    return formattedString;
}

function parseHTML(htmlString) {
    return parse(replacePlaceholders(htmlString));
}

const HTMLParser = {
    replacePlaceholders: replacePlaceholders,
    parseHTML: parseHTML,
    parseDynamicString: parseDynamicString
};

export default HTMLParser;
