import '../pagescss/login.css';
import logo from '../images/logo.svg'

export default function Login() {

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
                <input  className='fin' placeholder='아이디를 입력해주세요'/>
              </div> 

             <div className='divW'>비밀번호</div>
              <div className='fi'>
                <input  className='fin' placeholder='비밀번호를 입력해주세요'/>
              </div> 
            
            <hr className='line'></hr>
            <div className='bt_'>
              <button className='btt_'>로그인</button>

            </div>
            
            
            </div>
          </div>
        </div>



  );
}
