# Base de dados

- Mongodb criada com docker, na porta 27017

# Import dataset

- Uso da versão em Excel do ficheiro
- Uso da funcionalidade "Substituir" do excel para remover newlines (\n)
- Uso de ferramenta online para exportar para csv
- Uso do script python ``treatdataset.py`` para trocar as vírgulas no campo ``precocontratual`` para pontos, de modo a serem reconhecidos como decimais
- Uso de ferramenta online csv to json, troca no csv do nome do campo idContrato para _id
- Transferência para /tmp do docker
- Uso do comando mongoimport para importar os registos

