function changeColor() {

    const hexNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

    // Get the length of the array.
    const hexNumbersLength = hexNumbers.length;

    console.log(hexNumbersLength);

    let hexCode = '';

    for (i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * hexNumbersLength);
        console.log(randomIndex);

        hexCode = hexCode + hexNumbers[randomIndex];

        console.log(hexCode);

    }

    document.querySelector("#hexCode").innerHTML = hexCode;
    document.body.style.backgroundColor = `#${hexCode}`;

}