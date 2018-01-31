const emptyState = [];



let validateData = (uniform) => {

  if(uniform.name.length < 1) { throw new Error('no uniform name')};
  if(uniform.description.length < 1) {throw new Error('no description given')};
}

export default (state=emptyState, {type, payload}) => {
  switch (type) {

    case "INIT":
     return payload || emptyState;

    case "UNIFORM_ADD":
     validateData(payload);
     return [...state, payload];

    case "UNIFORM_UPDATE":
     validateData(payload);
     return state.map(item => {
       console.log('item is ', item);
       item._id === payload._id ? payload : item });

    case "UNIFORM_DESTROY":
     return state.filter(item => item._id !== payload)

    default:
        return state;
  }
};
