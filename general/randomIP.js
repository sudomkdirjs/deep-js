const randomIP = () => 
    Array(4)
    .fill(0)
    .map((_, index) => Math.floor(Math.random() * 255) + (index === 0 ? 1 : 0) )
    .join('.');

console.log(randomIP()); //142.214.148.85