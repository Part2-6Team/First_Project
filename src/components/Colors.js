export const getColor = (item) => {
    switch (item) {
      case 'purple':
        return 'var(--Purple-100)';
      case 'green':
        return 'var(--Green-100)';
      case 'blue':
        return 'var(--Blue-100)';
      default:
        return 'var(--Orange-100)';
    }
};