import * as services from './../src/services/index'
import * as localstorage from './../src/services/localStorage'

test('Recebe Favoritos', () => {
  expect(services.getFavorites()).not.toBeNull();
});

test('Recebe todos usuários', () => {    
  expect(localstorage.getUsers()).not.toBeNull();
});

test('Cria usuário', () => {    
    const users = {
        nome: 'Nome',
        email: 'email@gmail.com',
        pass: '123'
    }
  expect(localstorage.createUser(users)).not.toBeNull();
});

test('Verifica login', () => {    
    const user = {
        email: 'email@gmail.com',
        pass: '123'
    }
  expect(localstorage.checkAuth(user)).not.toBeNull();
});


test('Consulta API', () => {
  const query = {
      title: 'Nome do filme',
      director: 'Diretor'
  }
  const action = function() {};
   expect(services.SearchAPI(query, action)).not.toBeNull();
});