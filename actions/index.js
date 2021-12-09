// import users from "../apis/users";
// import { SIGN_IN, SIGN_OUT, FETCH_RANKING } from "./types";

// export const singIn = (tokens) => async () => {
//   var config = {
//     method: "post",
//     url: "http://glacial-garden-26787.herokuapp.com/api/players/session",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     data: tokens,
//   };

//   var axios = require("axios");

//   return axios(config);
// };

// export const signIn = (tokens) => async (dispatch) => {
//   const response = await users.post("/api/players/session", { tokens });
//   dispatch({
//     type: SIGN_IN,
//     payload: response.data,
//   });

// export const signOut = () => {
//   return {
//     type: SIGN_OUT,
//   };
// };

// //Axios con el stream creado dentro de apis
// export const createStream = (formValues) => async (dispatch, getState) => {
//   const { userId } = getState().auth;
//   const response = await streams.post("/streams", { ...formValues, userId });
//   dispatch({
//     type: CREATE_STREAM,
//     payload: response.data,
//   });

//   //Hacer programmatic navigation cuando se termine de crear el stream
//   history.push("/");
// };

// export const fetchStreams = () => async (dispatch) => {
//   const response = await streams.get("/streams");
//   dispatch({
//     type: FETCH_STREAMS,
//     payload: response.data,
//   });
// };

// export const fetchStream = (id) => async (dispatch) => {
//   const response = await streams.get(`/streams/${id}`);
//   dispatch({
//     type: FETCH_STREAM,
//     payload: response.data,
//   });
// };

// export const editStream = (id, formValues) => async (dispatch) => {
//   const response = await streams.patch(`/streams/${id}`, formValues);

//   dispatch({
//     type: EDIT_STREAM,
//     payload: response.data,
//   });

//   history.push("/");
// };

// export const deleteStream = (id) => async (dispatch) => {
//   await streams.delete(`/streams/${id}`);
//   dispatch({
//     type: DELETE_STREAM,
//     payload: id,
//   });
//   history.push("/");
// };
