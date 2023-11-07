import { Link } from "react-router-dom";
import { useLoteria } from "../../hooks";
import "./index.css"

export default function Menu() {
    const {ativo,setAtivo} = useLoteria();

  return (
    <div>
      <Link to="/megasena" className={ativo=== "megasena" ? "ativo":"megasena"} onClick={() => setAtivo("megasena")}>MEGASENA</Link>
      <Link to="/quina" className={ativo=== "quina" ? "ativo":"quina"} onClick={() => setAtivo("quina")}>QUINA</Link>
      <Link to="/lotofacil" className={ativo=== "lotofacil" ? "ativo":"lotofacil"} onClick={() => setAtivo("lotofacil")}>LOTOFÁCIL</Link>
    </div>
  );
}

