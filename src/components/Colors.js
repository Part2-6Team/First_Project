export const Colors = (item) => {
    switch (item) {
        case 'beige':
            return 'var(--Orange-200)';
        case 'purple':
            return 'var(--Purple-200)';
        case 'blue':
            return 'var(--Blue-200)';
        default:
            return 'var(--Green-200)';
    }
};