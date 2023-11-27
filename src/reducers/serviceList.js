import {nanoid} from 'nanoid';

const initialState = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {

  switch (action.type) {
    case 'ADD_SERVICE': {
      const {name, price, id} = action.payload;
      if (id) {
        return state.map((el) => {
          if (el.id === id) {
            return {...el, name: name, price: Number(price)}
          }

          return el;
        });
      }

      return [...state, {id: nanoid(), name, price: Number(price)}];
    }
    case 'REMOVE_SERVICE': {
      const {id} = action.payload;

      return state.filter(service => service.id !== id);
    }
    default: {
      return state;
    }
  }
}
