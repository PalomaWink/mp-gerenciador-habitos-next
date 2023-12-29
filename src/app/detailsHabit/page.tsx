import Link from "next/link"
function DetailsHabit(){
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Página de detalhes dos hábitos</h1>
      <Link href='/'>Home</Link>
    </div>
  )
}

export default DetailsHabit