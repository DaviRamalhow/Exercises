function addEndereço(endereco){

    const {cidade, estado, pais} = endereco;

    const novoEnd = {
        cidade,
        estado,
        pais
    }

   

console.log(`Eu moro no ${pais}, no estado do ${estado} e na cidade de ${cidade}`);
}
addEndereço({cidade:'Curitiba',estado:'Parana', pais:'Brasil'});


