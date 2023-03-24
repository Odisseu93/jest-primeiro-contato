
const { get, sum, fulName} = require('./index.js');



test('verifica se retorna json', () => {
    return get().then( reponse => {
        expect(reponse.status).toEqual(200)
        expect(reponse).toHaveProperty('json')
    })
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

test("Return the full name of a person", ()=>{
    expect(fulName('Ulisses', 'Silvério')).toEqual('Ulisses Silvério');
});