import axios from "axios";

const VITE_API_URL = 'http://localhost:5000';

/**
 * Lista todas as opções de uma enquete
 */
export function getPollChoices(pollId) {
    return axios.get(`${VITE_API_URL}/poll/${pollId}/choice`);
}


/**
 * Cria uma opção da enquete
 */
export function postChoice(body) {
    return axios.post(`${VITE_API_URL}/choice`, body)
}


/**
 * Vota em uma opção da enquete
 */
export function voteChoice(choiceId) {
    return axios.post(`${VITE_API_URL}/choice/${choiceId}/vote`)
}
