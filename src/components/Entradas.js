import React from "react";
import { connect } from "react-redux";
import "./Entradas.css";

const Entradas = props => {
  return (
    <div className='main-central'>
      <h1>Blog</h1>
      <br />
      <button onClick={props.verEntradas}>See posts</button>
      <br />
      {props.entradas.map(entrada => (
        <div key={entrada.id}>
          <h1>{entrada.title}</h1>
          <p>{entrada.body}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  entradas: state.entradas.entradas
});

const mapDispachToProps = dispach => ({
  verEntradas: () => dispach({ type: "CARGAR_ENTRADAS" })
});

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Entradas);
