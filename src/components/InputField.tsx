import React,{useRef} from 'react'


interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e:React.FormEvent) => void
}
const  InputField = ({todo, setTodo, handleSubmit}:Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      <form className='input' onSubmit={(e) =>{handleSubmit(e); inputRef.current?.blur()}} >
        <input ref={inputRef} value={todo} onChange={e => setTodo(e.target.value)} type="input" placeholder="Enter a task" className="input_box" />
        <button className='input_submit'  type='submit'>Go</button>
      </form>
    </div>
  )
}

export default InputField
