export default (number) => {
    const formatMumbering = new Intl.NumberFormat ("id-ID");
    return formatMumbering.format(number);
}