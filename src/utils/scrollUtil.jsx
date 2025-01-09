export const scrollUtil = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
};