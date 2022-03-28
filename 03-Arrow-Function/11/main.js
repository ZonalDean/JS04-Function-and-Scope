let tempConvert = f => {
    f = prompt('F temp');
    c = (f - 32) * 0.5556;
    alert(`The temparture is ${c} Celsius`)
} 

tempConvert();