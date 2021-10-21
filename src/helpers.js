const getCategoryColor = (categoryName) => {
    const categoriesColor = {
        'Design': '#ffece0',
        'Network': '#d9edff',
        'Security': '#ffe3e3',
        'Medical': '#ffe6d9',
        'Engineering': '#FDEDD2',
    };

    return categoriesColor[categoryName];
};

export const cardBackgroundColor = (categoryName) => {
    return {
        backgroundColor: getCategoryColor(categoryName)
    };
};

export const capitalizeEachWordFirstLetter = (text) => {
    const words = text.split(" ");

    for (const i in words) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }

    return words.join(" ");
};
