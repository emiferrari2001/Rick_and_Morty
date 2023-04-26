const app = require('../src/app');
const request = require('supertest');
const agent = request(app);
const users = require('../src/utils/users');

describe('Test de RUTAS', ()=>{
    describe('GET /rickandmorty/character/:id' , ()=>{
        it('Responde con status: 200', async ()=>{
            await agent.get('/rickandmorty/character/1').expect(200);
        });
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async ()=>{
            const res = await agent.get('/rickandmorty/character/2');
            expect(res.body).toHaveProperty('id');
            expect(res.body).toHaveProperty('name');
            expect(res.body).toHaveProperty('species');
            expect(res.body).toHaveProperty('gender');
            expect(res.body).toHaveProperty('status');
            expect(res.body).toHaveProperty('origin');
            expect(res.body).toHaveProperty('image');

            const res2 = await agent.get('/rickandmorty/character/9');
            expect(res2.body).toHaveProperty('id');
            expect(res2.body).toHaveProperty('name');
            expect(res2.body).toHaveProperty('species');
            expect(res2.body).toHaveProperty('gender');
            expect(res2.body).toHaveProperty('status');
            expect(res2.body).toHaveProperty('origin');
            expect(res2.body).toHaveProperty('image');
        })
        it('Si hay un error responde con status: 500', async ()=>{
            const res = await agent.get('/rickandmorty/character/930');
            expect(res.statusCode).toBe(500);
        })
    })
    describe('GET /rickandmorty/login', ()=>{
        it('Debería devolver { access: true } si se le pasa la información de inicio de sesión correcta', async () => {
            const { email, password } = users[0];
            console.log(users)
            const res = await agent
              .get(`/rickandmorty/login?email=${email}&password=${password}`)
              .expect(200);
        
            expect(res.body).toEqual({ access: true });

            const email2 = users[1].email;
            const password2 = users[1].password;
            console.log(users[1])
            const res2 = await agent
            .get(`/rickandmorty/login?email=${email2}&password=${password2}`)
            .expect(200);
            console.log(res2.body)
        
            expect(res2.body).toEqual({ access: true });
          });
    })
    describe('POST /rickandmorty/fav' , ()=>{
        it('Lo enviado por body se devuelve en un arreglo', async() => {
            const pj1 = await agent.get('/rickandmorty/character/12');
            console.log(pj1.body);
            
            const {body} = await agent.post('/rickandmorty/fav').send(pj1.body);    
            console.log(body)  
            expect(body).toBeInstanceOf(Array);      
        })
        it('Si se envia un segundo personaje, se agrega al arreglo anterior', async() => {
            const pj2 = await agent.get('/rickandmorty/character/17');
            const {body} = await agent.post('/rickandmorty/fav').send(pj2.body);    
            console.log(body)  
            expect(body).toHaveLength(2);
        })
    })
    describe('DELETE /rickandmorty/fav/:id' , ()=>{
        
        it('Si se pide de borrar un personaje no incluido en favoritos, no se modifica el array existente', async()=>{
            const noCharacter = await agent.delete('/rickandmorty/fav/576');
            //console.log(noCharacter.body)
            expect(noCharacter.body).toHaveLength(2);
        })
        it('Si se pide de borrar un personaje que se encuentra en favoritos, se elimina', async()=>{
            const noCharacter = await agent.delete('/rickandmorty/fav/17');
            //console.log(noCharacter.body)
            expect(noCharacter.body).toHaveLength(1);
        })
    })
})