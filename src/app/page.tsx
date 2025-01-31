import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home Page</h1>
      <Link href='/newHabit'>Cadastrar hábito</Link>
      <Link href='/detailsHabit'>Detalhes dos hábitos</Link>
    </main>
  )
}
