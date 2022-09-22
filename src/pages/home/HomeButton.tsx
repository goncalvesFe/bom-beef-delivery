import { Link } from 'react-router-dom'

interface HomeButtonProps {
  title: string
  linkTo: string
}

function HomeButton(props: HomeButtonProps) {
  const { title, linkTo } = props
  return (
    <Link to={linkTo}>
      <button className="w-72 rounded-lg h-14 text-slate-200 text-xl font-medium bg-[#8d120d] mb-5">
        {title}
      </button>
    </Link>
  )
}

export default HomeButton
