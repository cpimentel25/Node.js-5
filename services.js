const axios = require("axios");

const API = "https://rickandmortyapi.com/api";

async function getUser() {
    try{
        const response = await axios.get(`${API}/character`);
        const res = response.data.results;

        const allCharacter = res.map( item => {
            return item.name;
        })

        console.log(allCharacter);

    } catch (err) {
        console.log(err);
    }
}

async function getEp() {
    try{
        const response = await axios.get(`${API}/episode`);
        const res = response.data.results;

        const allCharacter = res.map( item => {
            return item.name;
        })

        console.log(allCharacter);

    } catch (err) {
        console.log(err);
    }
}

async function getUserById(id) {
    try{
        const response = await axios.get(`${API}/character/${id}`);
        console.log(response.data.name);
    } catch (err) {
        console.log(err);
    }
}

async function getEpById(id) {
    try{
        const response = await axios.get(`${API}/episode/${id}`);
        const newGet = response.data.characters;
        console.log(newGet);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getUser,
    getUserById,
    getEp,
    getEpById
};