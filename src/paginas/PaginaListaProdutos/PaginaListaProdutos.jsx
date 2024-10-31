import "./PaginaListaProdutos.css";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

const PaginaListaProdutos = () => {
  const [produto, setProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [adicionado, setAdicionado] = useState([]);

  const adicionarNaLista = () => {
    if (produto && produto.trim() && preco && preco.trim()) {
      adicionado.push({ produto, preco });
      setAdicionado([...adicionado]);
    } else {
      alert("Preencha o Nome e Preço do produto");
    }

    setProduto("");
    setPreco("");
    document.getElementById("campoProduto", "campoPreco").focus();
  };

  const removerDalista = (index) => {
    if (
      confirm(`Tem certeza que deseja remover: ${adicionado[index].produto}?`)
    ) {
      if (adicionado[index]) {
        adicionado.splice(index, 1);
        setAdicionado([...adicionado]);
      }
    }
  };

  return (
    <Principal
      titulo={`Lista de Produtos (${adicionado.length})`}
      voltarPara="/"
    >
      <div>
        <label>
          <strong>Nome: </strong>
        </label>
        <input
          id="campoProduto"
          type="text"
          placeholder="Digite o nome do Produto"
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />
      </div>

      <div>
        <label>
          <strong>Preço: </strong>
        </label>
        <input
          id="campoPreco"
          type="text"
          placeholder="Digite o preço do Produto"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        />
      </div>

      <BotaoCustomizado cor="primaria" aoClicar={adicionarNaLista}>
        Adicionar
      </BotaoCustomizado>

      {adicionado.map((item, index) => {
        return (
          <div key={index} className="pagina-lista-produtos_item">
            <ul>
              <li>
                <strong>Nome:</strong> {item.produto}
              </li>
              <li>
                <strong>Preço:</strong> R${item.preco}
                <FaTrashCan
                  color="red"
                  className="remover"
                  onClick={() => removerDalista(index)}
                />
              </li>
            </ul>
          </div>
        );
      })}

      {adicionado.length === 0 && (
        <span className="pagina-lista-produtos_mensagem-vazia">
          Não há produtos para listar
        </span>
      )}
    </Principal>
  );
};

export default PaginaListaProdutos;
