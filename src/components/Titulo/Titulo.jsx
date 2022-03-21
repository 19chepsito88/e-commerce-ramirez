import "./Titulo.css";
const Titulo = ({ tituloProps,subTit }) => {
  return <div className="titulo">
    <h1>{tituloProps}</h1>
    <h2>{subTit}</h2>
  </div>;
};

export default Titulo;
