const SERVER_ROOT = 'http://localhost:3000';

export const getAllItems = () => fetch(`${SERVER_ROOT}/items`).then(res => res.json());

export const getItem = (id: string) => fetch(`${SERVER_ROOT}/items/${id}`).then(res => res.json());
