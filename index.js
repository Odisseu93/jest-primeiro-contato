const baseURL ="https://reqres.in/api/";

const get = async ()=>{
const response = await fetch(baseURL + 'users?page=2', {
    method: "GET",
})

return response;

};

function sum(a, b) {
    return a + b;
  }


const fulName = (firsName, lastName) => `${firsName} ${lastName}`;


module.exports = { sum, get, fulName};