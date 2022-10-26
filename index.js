const { getUser, getUserById, getEp, getEpById } = require('./services');

const option = process.argv[2];
const id = process.argv[3];

if(option === 'personajes' && id) {
    getUserById(id)
}else if(option === 'personajes'){
    getUser()
}else if(option === 'episodios' && id){
    getEpById(id)
}else if(option === 'episodios'){
    getEp()
}
