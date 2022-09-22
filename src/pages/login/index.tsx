import { useState } from "react"
import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"
import HomeHeader from "../home/HomeHeader"
import HomeButton from "../home/HomeButton"

interface IFormValues {
  email: string
  password: string
}

function Login() {
  const initialFormValues: IFormValues = { email: '', password: '' }
  const [formValues, setFormValues] = useState<IFormValues>(initialFormValues)

  return (
    <div className="flex flex-col items-center">
      <HomeHeader />
      <form className="w-72 mb-10">
        <p className="font-sans font-bold text-xl text-[#8d120d]">Email</p>
        <input 
          id="email"
          name="email"
          type="text"
          className="input-default"
          value={formValues.email}
          onChange={event => setFormValues({ ...formValues, email: event.target.value })}
        />
        <p className="font-sans font-bold text-xl text-[#8d120d]">Senha</p>
        <input
          id="senha"
          name="senha"
          type="text"
          className="input-default"
          value={formValues.password}
          onChange={event => setFormValues({ ...formValues, password: event.target.value })}
        />
      </form>
      <HomeButton title="Login" linkTo="/" />
      <HomeButton title="Cadastro" linkTo="/" />
      <Link className="flex flex-row" to="/">
        <BiArrowBack className="mr-2" size={30} color="#8d120d" />
        <p className="font-sans font-bold text-xl text-[#8d120d]">Voltar</p>
      </Link>
    </div>
  )
}

export default Login
