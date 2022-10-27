

export const changeColor = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + randomColor
}


export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
} 