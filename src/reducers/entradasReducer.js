const initialState = {
  entradas: []
};

const entradasReducer = (state = initialState, action) => {
  const estado = { ...state };
  switch (action.type) {
    case "VER_ENTRADA":
      estado.entradas = action.value;
      break;
    default:
      return estado;
  }
  return estado;
};

export default entradasReducer;
