import parse from 'html-react-parser';

const HTMLParser =  {
    parseHTML: (htmlString) => {
        return parse(htmlString);
    }
};

export default HTMLParser;
