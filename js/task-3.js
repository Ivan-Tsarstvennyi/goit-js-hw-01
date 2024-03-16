
function getElementWidth(content, padding, border) {
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;
    return totalWidth;
}
console.log(getElementWidth("100px", "10px", "5px")); 
console.log(getElementWidth("200px", "20px", "10px")); 
console.log(getElementWidth("300px", "15px", "7px")); 
