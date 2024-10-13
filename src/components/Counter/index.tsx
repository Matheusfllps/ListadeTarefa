import { useEffect, useState } from "react";

const Counte = () => {
  const [count, setCount] = useState(0)

  // const [count2, setCount2] = useState(0)

  // useEffect(() => {
  //   console.log('executa sem array de dependencias')}
  // );
  useEffect(() => {
    console.log('montado ')}
  ), [];

  useEffect(() => {
    console.log('Atualizando')
},[count]);

// useEffect(() => {
//   console.log('executa com array de dependencias contendo o count2')
// },[count2]);

// useEffect(() => {
//   console.log('executa com array de dependencias  contendo o count e count2')
// },[count, count2]);
  
  return ( 
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
     <div>
       <h1>contador 1</h1>
       <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)} >incrementar</button>
      
     </div>
     {/* <div>
       <h1>contador 2</h1>
       <h2>{count2}</h2>
        <button onClick={() => setCount2(count2 + 1)}>incrementar 2</button>
     </div> */}
    </div>
   );
}
 
export default Counte;