import HomeHeader from "./HomeHeader"
import HomeButton from "./HomeButton"

function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <HomeHeader />
      <h2 className="font-sans font-black text-3xl text-[#8d120d] mb-10">
        Fala galera, beleza?
      </h2>
      <h3 className="font-sans font-bold text-xl text-[#8d120d] mb-10">
        Qual a boa de hoje?
      </h3>
      <HomeButton title="Cadastrar" linkTo="/" />
      <HomeButton title="Conhecer Delivery" linkTo="/" />
      <HomeButton title="Login" linkTo="/login" />
    </div>
  )
}

export default Home
