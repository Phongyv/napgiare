import { Link, Outlet } from "react-router-dom"
import '../Css/Main.css'
import signInWithGoogle from "../Backend/firebase";

function Main(){
    return(
        <div>
        <header className='header'>
        <img className='header-left' src='https://firebasestorage.googleapis.com/v0/b/pornbase-725c8.appspot.com/o/452584245_1554542245442975_3492446680806899145_n.png?alt=media&token=6b0965c6-c489-4ac5-8f97-d56d1de9c289' alt=''></img>
        <div className='header-center'>
          <Link to={'/'} className='header-center_item'>🏠 TRANG CHỦ</Link>
          <Link to={'/shopacc'} className='header-center_item'>🛒 SHOP ACC</Link>
          <Link to={'/minigame'} className='header-center_item'>🎁 MINI GAME</Link>
          <Link to={'/nap'} className='header-center_item'>💵 NẠP</Link>
          <Link to={'/support'} className='header-center_item'>📬 HỖ TRỢ</Link>
        </div>
        <Link className="header-right" to={'/user'} onClick={signInWithGoogle}>
        <img className='header-right_icon' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt=''></img>
        <div className="header-right_user">
          <span className="header-right_user-name">User</span>
          <span className="header-right_user-info">Coin: 200</span>
        </div>
        </Link>
        </header>
        <Outlet/>
        </div>
    )
}

export default Main;