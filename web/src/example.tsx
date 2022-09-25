//Para passar propriedade com TS é necessário
//declarar os tipos delas

//Nomenclatura -> Nome do componente + props
interface ButtonProps{
  title: string; 
}

//Função que vai criar o componente
//1a letra maiscula

//Para o componente pegar as propriedades definidas pelo TS
//é necessário passar o props por parâmetro
function Button(props: ButtonProps){
  return(
    //Para passar códigos JS no JSX é necessário cercá-lo com {}
    //props.propriedade
    <button>
      {props.title}
    </button>
  )
}

//função que vai retornar o componente
function Example() {
  return (
    //Para botar vários componentes seguidos um do outro, 
    //é necessário possuir um elemento pai
    <div>
      <Button title="Botão 1"/>
      <Button title="Botão 2"/>
      <Button title="Botão 3"/>
    </div>
  )
}

export default Example
