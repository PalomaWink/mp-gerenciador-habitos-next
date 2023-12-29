import Image from 'next/image'
import logo from '../../../public/logo.svg'

export default function Header() {
  return (
    <header>
      <div className='flex justify-center pt-6'>
          <Image src={logo} alt='logo' width={40} height={40}/>
          <div className="text-center flex justify-start items-center ml-2">
            <span className="text-white text-4xl font-bold font-['Dosis']">
              meta
            </span>
            <span className="text-white text-4xl font-normal font-['Dosis']">
              .
            </span>
            <span className="text-emerald-400 text-4xl font-normal font-['Dosis']">
              diária
            </span>
          </div>
        </div>
    </header>
  )
}