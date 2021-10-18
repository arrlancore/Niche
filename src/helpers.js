export const getCategoryColor = (categoryName) => {
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