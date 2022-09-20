interface HomeButtonProps {
  title: String
}

function HomeButton(props: HomeButtonProps) {
  const { title } = props
  return (
    <button className="w-72 rounded-lg h-14 text-slate-200 text-xl font-medium bg-[#8d120d] mb-5">
      {title}
    </button>
  )
}

export default HomeButton
