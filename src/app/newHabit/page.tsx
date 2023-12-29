'use client'
import { useForm } from "react-hook-form"
import Link from "next/link"
import { useState } from "react"
import { newHabit } from "../types"

function NewHabit() {
  const { register, handleSubmit, reset } = useForm<newHabit>()
  const [listHabits, setListHabits] = useState<newHabit[]>([])

  const submitNewHabit = (data: newHabit) => {
    setListHabits([...listHabits, data])
    reset()
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1>Novo hábito</h1>
      <form
        onSubmit={handleSubmit(submitNewHabit)}
      >
        <input 
          type="text" 
          placeholder="Nome do hábito" 
          {...register('habit')}
          className="border border-gray-400 rounded-md p-2 m-2"
        />
        <button 
          type="submit"
          className="w-40 h-10 bg-emerald-400 rounded-xl text-center text-neutral-900 font-normal font-['Dosis']"
        >
          Cadastrar
        </button>
        <Link href='/'>
          <button
            className="w-40 h-10 bg-neutral-800 rounded-xl text-center text-rose-500 font-normal font-['Dosis']"
          >
            Cancelar
          </button>
        </Link>
      </form>
    </div>
  )
}

export default NewHabit
