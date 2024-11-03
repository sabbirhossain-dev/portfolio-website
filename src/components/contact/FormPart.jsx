import React,{useState} from 'react'

const FormPart = () => {


  const [userName, setUserName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [errorMsg, setErrorMsg] = useState("")
  const [SuccessMsg, setSuccessMsg] = useState("")
  
  const handleSubmit =(e)=>{
    e.preventDefault()
    
    
    // email validation start //
    const emailValidate =()=>{
      return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    }
    
    // email validation end //
    
    
    
    // input field validation start //
    
    if(userName===""){
      setErrorMsg("Name is Required")
      setSuccessMsg("")
    }else if(phone===""){
      setErrorMsg("Phone Number is Required")
      setSuccessMsg("")
    }else if(!emailValidate(email)){
      setErrorMsg("Give a Valid Email")
      setSuccessMsg("")
    }else if(subject===""){
      setErrorMsg("Subject is Required")
      setSuccessMsg("")
    }else if(message===""){
      setErrorMsg("Message is Required")
      setSuccessMsg("")

    }else{
      setUserName("")
      setPhone("")
      setEmail("")
      setSubject("")
      setMessage("")
      setErrorMsg("")
      setSuccessMsg(`Thank You ${userName} Your Message has been sent Successfully !`)
         
        
      console.log("name: "+ userName,"phone: "+  phone,"email: "+email,"subject: "+ subject,"message: "+ message)
    }

    // input field validation end //

    
  }

  return (
    <div className='w-full lg:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg p-8'>
            <form className='flex flex-col gap-6 py-4' onSubmit={handleSubmit}>
              <div className='flex justify-between gap-10'>
                <div className=' w-1/2 flex flex-col gap-2'>
                  <label className='text-base uppercase tracking-wide'>Your Name</label>
                  <input type='text' className={`${errorMsg ==="Name is Required" && "outline-designColor"} contactInput`} onChange={(e)=>{setUserName(e.target.value)}} value={userName} />
                </div>
                <div className=' w-1/2 flex flex-col gap-2'>
                  <label className='text-base uppercase tracking-wide'>Phone</label>
                  <input type='text' className={`${errorMsg ==="Phone Number is Required" && "outline-designColor"} contactInput`} onChange={(e)=>{setPhone(e.target.value)}} value={phone} />
                </div>
              </div>

              <div className=' w-full flex flex-col gap-2'>
                  <label className='text-base uppercase tracking-wide'>Email</label>
                  <input type='email' className={`${errorMsg ==="Give a Valid Email" && "outline-designColor"} contactInput`} onChange={(e)=>{setEmail(e.target.value)}} value={email} />
               </div>

               <div className=' w-full flex flex-col gap-2'>
                  <label className='text-base uppercase tracking-wide'>Subject</label>
                  <input type='text' className={`${errorMsg ==="Subject is Required" && "outline-designColor"} contactInput`} onChange={(e)=>{setSubject(e.target.value)}} value={subject} />
               </div>

               <div className=' w-full flex flex-col gap-2'>
                  <label className='text-base uppercase tracking-wide'>Message</label>
                  <textarea type='text' cols={6} rows={10} className={`${errorMsg ==="Message is Required" && "outline-designColor"} textArea`} onChange={(e)=>{setMessage(e.target.value)}} value={message} />
               </div>
               <div >
               {
                errorMsg && <p className='w-full py-3 bg-[#1e2024] shadow-shadowOne rounded-lg text-red-700 text-base tracking-wide text-center animate-bounce'>{errorMsg}</p>
               }
               {
                SuccessMsg && <p className='w-full py-3 bg-[#1e2024] shadow-shadowOne rounded-lg text-green-500 text-base tracking-wide text-center animate-bounce'>{SuccessMsg}</p>
               }
               <button type='submit' className='w-full py-4 rounded-lg shadow-shadowOne flex justify-center items-center bg-[#191b1e] mt-2 hover:bg-green-950 bg-opacity-20 duration-300'>
                <p className='text-base uppercase tracking-wide '>Send Message</p>
               </button>
               </div>

            </form>
        </div>
  )
}

export default FormPart
