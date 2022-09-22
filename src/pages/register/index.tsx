import { useState } from "react"
import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"
import HomeHeader from "../home/HomeHeader"
import HomeButton from "../home/HomeButton"

interface IRegisterValues {
  name: string
  email: string
  password: string
}

function Register() {
  const initialRegisterValues: IRegisterValues = { name: '', email: '', password: '' }
  const [registerValues, setRegisterValues] = useState<IRegisterValues>(initialRegisterValues)

  return (
    <div className="flex flex-col items-center">
      <HomeHeader />
      <form className="w-72 mb-10">
      <p className="font-sans font-bold text-xl text-[#8d120d]">Nome</p>
        <input 
          id="name"
          name="name"
          type="text"
          className="input-default"
          value={registerValues.name}
          onChange={event => setRegisterValues({ ...registerValues, name: event.target.value })}
        />
        <p className="font-sans font-bold text-xl text-[#8d120d]">Email</p>
        <input 
          id="email"
          name="email"
          type="text"
          className="input-default"
          value={registerValues.email}
          onChange={event => setRegisterValues({ ...registerValues, email: event.target.value })}
        />
        <p className="font-sans font-bold text-xl text-[#8d120d]">Senha</p>
        <input
          id="senha"
          name="senha"
          type="text"
          className="input-default"
          value={registerValues.password}
          onChange={event => setRegisterValues({ ...registerValues, password: event.target.value })}
        />
      </form>
      <HomeButton title="Cadastrar" linkTo="/" />
      <Link className="flex flex-row" to="/">
        <BiArrowBack className="mr-2" size={30} color="#8d120d" />
        <p className="font-sans font-bold text-xl text-[#8d120d]">Voltar</p>
      </Link>
    </div>
  )
}

export default Register
