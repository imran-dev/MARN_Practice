function Calculation(...numbers){
// function Calculation(a, b, ...numbers){
    let sum = 0;
    for (let i of numbers){
        sum = sum + i;
    }
    console.log(sum);
}
Calculation(10, 2, 3, 4, 5, 8, 25);