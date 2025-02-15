import parse from 'html-react-parser';

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
    parseHTML: parseHTML
};

export default HTMLParser;
