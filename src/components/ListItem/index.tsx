import { useState } from "react";
import { Item } from "../../Types/Item";

export type Props = {
  item: Item;
};

export const ListItem = ({ item }: Props ) => {
  
  const [isChecked, setIsChecked] = useState(item.done);
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#20212c",
          padding: "10px",
          borderRadius: "10px",
          marginBottom: "10px",
         
        }}
       
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          style={{ width: "25px", height: "25px", marginRight: "5px" }}
        />
        <p style={{ margin: "0", color: "#ccc" }}>{item.name}</p>
      </div>
    </>
  );
};
