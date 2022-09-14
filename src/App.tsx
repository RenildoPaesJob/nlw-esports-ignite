
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

/* interface ButtonsProps {
//   title: string;
// }

// function Button(props: ButtonsProps){
//   return (
//     <button 
//       title={props.title}
//     >
//       post
//     </button>
//   )
*/
import './styles/main.css';
import LogoImg from './assets/logo-nlw-esports.svg';

function App() {
  return (
    <div 
      className="max-w-[1344px] mx-auto flex flex-col items-center my-20"
    >
      <img src={LogoImg} />

      <h1
        className="text-6xl text-white font-black mt-20"
      >
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

    </div>
  )
}

export default App
