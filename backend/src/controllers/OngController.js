const connection = require('../database/connection');
const crypto = require('crypto') //pacote para criptografia, neste caso sendo utilizado para gerar ID

module.exports = {
    async index(request,response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },
    
    async create(request, response) {
        const { name, email, whatsapp, city, uf} = request.body; //desestruturação pegando todos os dados enviados pelo body

        const id = crypto.randomBytes(4).toString('HEX'); //gera 4 bytes de caracteres hexadecimais
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};