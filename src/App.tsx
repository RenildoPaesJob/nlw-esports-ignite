/**
 * COMPONENTES E PROPIEDADES NO REACT
 *  -> são como tags e atributos no html
 *  -> Componentes => Função que retorna um conjunto de tags html
 *      - quando dentro de uma função retorna mais de um componente, deve-se colocar dentro de uma tag principal -> <>
 * 
 *  -> Propriedades => São atributos dos elementos HTML dentro de uma INTERFACE
 *        - para acessar as propriedades dentro do elemento:
 *            > deve-se colocar entre chaves {props.atributo}
 * 
 */

interface ButtonsProps {
  title: string;
}

function Button(props: ButtonsProps){
  return (
    <button 
      title={props.title}
    >
      post
    </button>
  )
}

function App() {
  return (
    <>
      <Button title="post 1"/>
      <Button title="post 2"/>
      <Button title="post 3"/>
    </>
  )
}

export default App
