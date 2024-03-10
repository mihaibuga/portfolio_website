export const getYearFromDate = (dateString) => {
    const regex = /^\d{4}/;
    const match = dateString.match(regex);
    return match ? match[0] : '';
}