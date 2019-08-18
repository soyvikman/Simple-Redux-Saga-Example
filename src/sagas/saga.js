import { takeLatest, put, delay, call } from "redux-saga/effects";
import axios from "axios";

export function fetchFromApi() {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/`);
}

function* cargarEntradas() {
  yield delay(0);
  const llamada = yield call(fetchFromApi);
  yield put({ type: "VER_ENTRADA", value: llamada.data });
}

export default function* rootSaga() {
  yield takeLatest("CARGAR_ENTRADAS", cargarEntradas);
}
