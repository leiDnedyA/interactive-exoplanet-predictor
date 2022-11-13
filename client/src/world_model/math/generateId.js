
const randomInt = (max) => (Math.floor(Math.random() * max));

const generateId = (length) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ''
    for(let i = 0; i < length; i++){
        result += chars[0, randomInt(chars.length)];
    }
    return result;
}

export default generateId;