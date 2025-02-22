import '../pagescss/signup.css';
import React, {useState} from 'react'; 
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const [email,setEmail] = useState("");
  const [Name,setName] = useState("");
  const [Password,setPw] = useState("");
  const [Id,setId] = useState("");
  
  const{replace} = useNavigate();

  const register = () =>{
    axios
  .post('https://localhost:1337/api/auth/local/register',{
    id : Id,
    password : Password,
    name : Name
  })
  .then((response)=>{
      console.log('well done!');
      localStorage.setItem('token', response.data.jwt);
      replace("/");
  })
  }

  return (
      <div className="Ma">
        <div className='forms'>
          <div className='ft'>본인정보를 입력해주세요</div>

          <div className='realforms'>
            <div className='divW'>이름</div>
              <div className='fi'>
                <input  className='fin' placeholder='홍길동' value={Name} onChange={(event)=>{setName(event.target.value)}}/>
              </div>




            <div className='divW'>생년월일</div>
              <div className='fi'>
                <input  className='fin' placeholder='2000.11.17'/>
              </div>
            
            <div className='divW'>이메일</div>
              <div className='fi'>
                <input  className='fin' placeholder='tes1234@gmail.com' value={email} onChange={(event)=> 
                  {setEmail(event.target.value);
                  }}/>
              </div> 

            <div className='divW'>아이디</div>
              <div className='fi'>
                <input  className='fin' placeholder='아이디를 입력해주세요' value={Id} onChange={(event)=>{setId(event.target.value)}}/>
              </div> 

             <div className='divW'>비밀번호</div>
              <div className='fi'>
                <input  className='fin' placeholder='비밀번호를 입력해주세요' value={Password} onChange={(event)=>{setPw(event.target.value)}}/>
              </div> 
            
            <div className='bt'>
              <button className='btt' onClick={()=>{
                register();
              }}>회원가입</button>

            </div>
            
            
            </div>
          </div>
        </div>



  );
}
