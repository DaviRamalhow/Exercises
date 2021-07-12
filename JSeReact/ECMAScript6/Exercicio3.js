let ADD = (...numeros)=>{

    let somar = (numeros) => {
        let total =0;
        for(let i in numeros){
            total+=numeros[i];
        }

return total;
    }
    console.log(somar(numeros));
}
ADD(1,2,3,4,5,6,7);