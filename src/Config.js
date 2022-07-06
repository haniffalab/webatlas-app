const isValidURL = (config) => {
    // cheapest URL validation I could think of
    var pattern = new RegExp('^(https?:\\/\\/)(.*?).json$', 'i');
    return !!pattern.test(config);
};

export function validateConfig(url) {
    if (isValidURL(url)) {
        return url;
    }

    return 'config/iss-human-brain-advanced.json';
}