var Contrato = require('../models/contrato');

module.exports.list = () => {
    return Contrato
        .find()
        .exec();
}

module.exports.findById = id => {
    return Contrato
        .findOne({_id: id})
        .exec();
}

module.exports.findbyEntidade = entidade => {
    return Contrato
        .find({NIPC_entidade_comunicante: entidade})
        .exec();
}

module.exports.findbyTipo = tipo => {
    return Contrato
        .find({tipoprocedimento: tipo})
        .exec();
}

module.exports.getContractValuesofEntidade = entidade => {
    console.log("entidade: " + entidade)
    console.log('"' + entidade + '"')
    return Contrato
        .aggregate([{ $group: { _id: '"' + entidade + '"', count: { $sum: "$precoContratual" } } }])
        .exec();
}

module.exports.getContractsfromEntidade = entidade => {
    return Contrato
        .find({NIPC_entidade_comunicante: entidade})
        .exec();
}

module.exports.getEntidadeNamefromNIPC = nipc => {
    return Contrato
        .findOne({NIPC_entidade_comunicante: nipc},{entidade_comunicante:true})
        .exec();
}

module.exports.findEntidades = () => {
    return Contrato
        .distinct('entidade_comunicante')
        .sort()
        .exec();
} 

module.exports.findTipos = () => {
    return Contrato
        .distinct('tipoprocedimento')
        .sort()
        .exec();
} 

module.exports.insert = a => {
    return Contrato.create(a);
}

module.exports.update = (id, a) => {
    return Contrato
        .findOneAndUpdate({_id: id}, a, {new: true})
        .exec();
}

module.exports.remove = id => {
    return Contrato
        .deleteOne({_id: id})
        .exec();
}
