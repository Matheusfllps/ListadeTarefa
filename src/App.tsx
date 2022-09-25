import { useState } from "react";
import { Item } from "./Types/Item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
import { FaTrashAlt } from "react-icons/fa";


function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "comprar pão na padaria!", done: false },
    { id: 2, name: "comprar doce na sorveteria!", done: true },
  ]);

  const handleAddtask = (taskName: string) => {
    let newList = [...list]; // clonou a lista
    newList.push({
      // adicicionou items a lista
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList); // atualizou o valores da lista
 
     };

   const handleRemoveItem = (item: Item) => {
  // alert("Remove item")
  //  console.log(item.name)
  console.log(list.splice( item.id, 1))
  //  setList(valor)

     };

  //   const handleRemoveItem = () => {
  // alert("Remove item")
   
  //    };
  
 


  return (
    <div
      style={{
        backgroundColor: "#17181F",
        color: "#797A81",
        minHeight: "100vh",
      }}
    >
      <div style={{ maxWidth: "960px", margin: "auto", padding: "10px" }}>
        <h1
          style={{
            padding: "0",
            margin: "0",
            color: "#fff",
            textAlign: "center",
            borderBottom: "1px solid #444",
            paddingBottom: "20px",
          }}
        >
          Lista de Tarefas
        </h1>

        <AddArea onEnter={handleAddtask} />
        {/* a propriedade onEnter neste caso é uma função que chama outra função handleAddtask que por sua vez faz o procedimento de clonar a lista adicionar valores da lista e atualizar valores a lista */}

        {list.map((item) => (
          <div style={{ display: "flex", alignItems: "center", width: "100%"}}>
            <ListItem item={item}  />
            <FaTrashAlt style={{marginLeft: '10px', fontSize: '30px', color: '#cd3939', cursor: 'pointer'}} onClick={() => handleRemoveItem(item)} />
           
          
          </div>
        ))}
         {/* {/* {console.log(list.map((item) => (
          <div style={{ display: "flex", alignItems: "center", width: "100%"}}>
            <ListItem item={item}  />
            <FaTrashAlt style={{marginLeft: '10px', fontSize: '30px', color: '#cd3939', cursor: 'pointer'}}  />
           
          
          </div> 
        )))} */}
      
      
      </div>
    </div>
  );
        }

export default App;
