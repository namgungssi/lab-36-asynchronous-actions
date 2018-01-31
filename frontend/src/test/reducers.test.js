import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import uuid from 'uuid/v1';
import uniformReducer from '../components/Uniform/reducer';



describe('uniform Reducer tests', () => {

  let costume = {name: 'seattle', description: 'football', id: uuid()};
  let state =[];

  test('add a new uniform', () => {

    let action = {type: 'UNIFORM_ADD', payload: uniform};
    state = uniformReducer(state, action);

    expect(state.length).toEqual(1);
    expect(state[0].description).toEqual(uniform.description);
    expect(state[0].name).toEqual(uniform.name);
  });

  test('update a uniform', () => {

    let newUniform = {name: 'seattle', description: 'basketball' };

      state = uniformReducer(state, {
      type: 'UNIFORM_UPDATE',
      payload: {
        id: uniform.id,
        name: newUniform.name,
        description: newUniform.description,
      }
    });

    expect(state[0].name).toEqual('seattle');
    expect(state[0].description).toEqual('basketball');
    expect(state[0].id).toEqual(costume.id);
  });

  test('delete a uniform', () => {

    let costume1 = {name: 'seattle', description: 'football', id: uuid()};
    let costume2 = {name: 'seattle', description: 'basketball', id: uuid()};

    state = [{...uniform1}, {...uniform2}];

    state = uniformReducer(state, {
      type: 'UNIFORM_DESTROY',
      payload: uniform2.id
    });

    expect(state.length).toEqual(1);
    expect(state[0].name).toEqual('seattle');
    expect(state[0].description).toEqual('basketball');
  });
})
