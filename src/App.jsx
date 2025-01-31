import { useState, useRef } from 'react'
import './App.css'
import { use } from 'react'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email_2, setEmail_2] = useState('')
  const [password_2, setPassword_2] = useState('')
  const [confirm, setConfirm] = useState('')
  const [name_2, setName_2] = useState('')
  const [email_3, setEmail_3] = useState('')
  const [description, setDescription] = useState('')
  const [input, setInput] = useState([])
  const [text, setText] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const buttonn = useRef()

  function getData(event) {
    event.preventDefault()
    if (!email || !password) {
      alert('ma`lumot bo`sh')
      return;
    }
    console.log(email)
    console.log(password)
  }

  function getData_2(event) {
    event.preventDefault()
    if (!name || !surname || !email_2 || !password_2 || !confirm) {
      alert("ma`lumot bo`sh")
      return;
    }

    if (password_2 !== confirm) {
      alert('parol mos kelmadi')
      return;
    }
  }

  function getData_3(event) {
    event.preventDefault()
    if (description.length < 20) {
      alert(`Xabar kamida 20 ta belgidan iborat bo'lishi kerak!`)
      return;
    }
  }

  function addInput(event) {
    event.preventDefault()
    console.log(text)

    setInput([...input, ""])
  }

  function handleChange(index, event) {
    const newInput = [...input]
    newInput[index] = event.target.value
    setInput(newInput)
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (event.target.checked) {
      console.log(buttonn)
    }

  }

  return (
    <>
      {/* 1-vazifa */}
      <p className='paragraph'> Login Formasi Yaratish
        Foydalanuvchi login formasi yarating. Formada quyidagi maydonlar bo'lsin:
        Email
        Parol
        Formani yuborishda foydalanuvchi kiritgan qiymatlarni konsolga chiqaring.
        Foydalanuvchi email maydonini to'ldirmasa, "Email kiritilishi shart!" xabarini chiqaring.
      </p>
      <form className='form_1' onSubmit={getData}>
        <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" placeholder='enter email...' />
        <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" placeholder='enter password...' />
        <br />
        <br />
        <button className='button_1' type='submit'>Jo'natish</button>

        {/* {error && <p>{error}</p>} */}
      </form> <br /> <br />
      {/* 2-vazifa */}
      <p className='paragraph'>. Ro'yxatdan O'tish Formasi
        Quyidagi maydonlarga ega forma yarating:
        Ism
        Familiya
        Email
        Parol
        Parolni tasdiqlash
        Foydalanuvchi parol va tasdiqlash parolini bir xil kiritmasa, "Parollar mos emas!" xabarini ko'rsating.
      </p>
      <form className='form_2' onSubmit={getData_2}>
        <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder='enter name...' />
        <input value={surname} onChange={(e) => { setSurname(e.target.value) }} type="text" placeholder='enter surname...' />
        <input value={email_2} onChange={(e) => { setEmail_2(e.target.value) }} type="email" placeholder='enter email...' />
        <input value={password_2} onChange={(e) => { setPassword_2(e.target.value) }} type="password" placeholder='enter password...' />
        <input value={confirm} onChange={(e) => { setConfirm(e.target.value) }} type="text" placeholder='enter confirm password...' />
        <button type='submit'>Jo'natish</button>
      </form> <br /> <br />
      {/* 3-vazifa */}
      <p className='paragraph'>. Kontakt Formasi
        Quyidagi elementlarga ega kontakt formasi yarating:
        Ism
        Email
        Xabar (textarea)
        Foydalanuvchi xabar maydoniga kamida 20 ta belgidan iborat matn kiritmasa, "Xabar kamida 20 ta belgidan iborat bo'lishi kerak!" xabarini ko'rsating.
      </p>
      <form className='form_3' onSubmit={getData_3}>
        <input value={name_2} onChange={(e) => { setName_2(e.target.value) }} type="text" placeholder='enter name...' />
        <input value={email_3} onChange={(e) => { setEmail_3(e.target.value) }} type="email" placeholder='enter name...' />
        <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder='description'></textarea>
        <button type='submit'>Jo'natish</button>
      </form>
      {/* 4-vazifa */}
      <p className='paragraph'>. Dinamik Input Qo'shish
        Dastlab faqat bitta input maydonidan iborat forma yarating.
        "Yana input qo'shish" tugmachasi bosilganda yangi input maydoni dinamik ravishda qo'shilsin.
        Har bir input maydoniga kiritilgan qiymatni forma yuborilganda konsolga chiqaring.
      </p>
      <form className='form_4'>
        {input.map((value, index) => (
          <input
            key={index}
            value={value}
            onChange={(e) => handleChange(index, e)}
            type='text'
            placeholder='text'
          />
        ))}
        <input value={text} onChange={(e) => { setText(e.target.value) }} type="text" placeholder='nimadir' />
        <button onClick={addInput}>yana input qo'shish</button>
        <br /><br />
      </form>
      {/* 5-vazifa */}
      <p className='paragraph'> Checkbox Bilan Yuborish Tugmasi Aktivlashtirish
        Kontakt formasini yarating va formaga quyidagi elementni qo'shing:
        "Men shartlarni qabul qilaman" checkbox elementi
        Yuborish tugmasi
        Checkbox belgilangunga qadar yuborish tugmasi deaktiv bo'lsin. Checkbox belgilanganda esa tugma aktiv bo'lsin.
      </p>
      <form className='form_5'>
        <label htmlFor="input">Men shartlarni qabul qilaman" checkbox elementi</label>
        <br />
        <input id='input' checked={isChecked} name='checkbox' onChange={() => setIsChecked(!isChecked)} type="checkbox" />
        <br />
        <button ref={buttonn} disabled={!isChecked} type='submit'>Yuborish</button>
      </form>
    </>
  )
}

export default App
