import { useState, KeyboardEvent } from "react";

type Props = {
  onEnter: (taskName: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    // console.log(e.code); // aqui pega os valores de cada tecla
    // A KeyboardEvent.codepropriedade representa uma tecla física no teclado (em oposição ao caractere gerado ao pressionar a tecla). Em outras palavras, essa propriedade retorna um valor que não é alterado pelo layout do teclado ou pelo estado das teclas modificadoras.
    // Essa propriedade é útil quando você deseja manipular chaves com base em suas posições físicas no dispositivo de entrada em vez dos caracteres associados a essas chaves; isso é especialmente comum ao escrever código para manipular a entrada de jogos que simulam um ambiente semelhante a um gamepad usando as teclas do teclado. Esteja ciente, no entanto, que você não pode usar o valor relatado por KeyboardEvent.codepara determinar o caractere gerado pelo pressionamento de tecla, porque o nome do código de tecla pode não corresponder ao caractere real impresso na tecla ou gerado pelo computador quando a tecla é pressionada .

    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText); //uma função que foi passada de um outro componente que será executado adicionando o valor do input
      setInputText("");
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        border: "1px solid #555",
        borderRadius: "15px",
        padding: "10px",
        margin: "20px 0",
      }}
    >
      <div style={{ marginRight: "5px" }}>➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        style={{
          //   width: "100%",
          flex: "1",
          outline: "0",
          background: "transparent",
          border: "0",
          color: "#fff",
          fontSize: "18px",
        }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};
