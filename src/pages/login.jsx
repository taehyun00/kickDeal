import '../pagescss/login.css';
import logo from '../images/logo.svg'
import React, {useState} from 'react'; 
import axios from 'axios';

export default function Login() {

  const [Pw,setPw] = useState("");
  const [Id,setId] = useState("");

  const requestAccessToken = async (Id, Pw) => {
    try {
      const response = await axios.post(`건우야 빨리 서버 주소 알려주자/login`, {
        id: Id,
        password: Pw,
      });

      const accessToken = response.data.access;
      
      if (accessToken) {
        // ✅ 토큰 저장 (localStorage 또는 axios 헤더 설정)
        localStorage.setItem('accessToken', accessToken);
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        
        console.log("로그인 성공! 토큰 저장 완료:", accessToken);
      }
    } catch (e) {
      console.error("로그인 실패:", e.response?.data || e.message);
    }
  };
  

  return (
      <div className="Ma_">
        <div className='Tit'>
            <p className='TitT'>킥딜을 시작해볼까요?</p>
            <img src={logo} className='TitTimage' />
        </div>
        <div className='forms_'>
          <div className='ft'>Login</div>

          <div className='realforms_'>

            <div className='divW'>아이디</div>
              <div className='fi'>
                <input  className='fin' placeholder='아이디를 입력해주세요' value ={Id} onChange={(event)=> 
                  {setId(event.target.value);
                  }}/>
              </div> 

             <div className='divW'>비밀번호</div>
              <div className='fi'>
                <input  className='fin' placeholder='비밀번호를 입력해주세요' value={Pw}onChange={(event)=> 
                  {setPw(event.target.value);
                  }}/>
              </div> 
            
            <hr className='line'></hr>
            <div className='bt_'>
              <button className='btt_' onClick={() => requestAccessToken(Id,Pw)}>로그인</button>

            </div>
            
            
            </div>
          </div>
        </div>



  );
}
