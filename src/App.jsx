import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faBars,faCode,faBolt,faMessage,faXmark} from '@fortawesome/free-solid-svg-icons'
import Download from "./server/storage.js"
import "./App.css"
import "./css/mobile.css"
import {Layout1,Layout2, Layout3} from './layout/layouts';

import data from "./api/data.json"


function Logo({log}){
  return <img src={process.env.PUBLIC_URL+"/img/svg/log.svg"} className={log} alt="Logo" />
}
function Header2(){
  return (
    <div className='header-bar'>
      <NavMenu></NavMenu>
      <Logo log="header-log"></Logo>
      <div className='header-search'>
        <input className='nav-search' type="search" placeholder='Search'/>
        <FontAwesomeIcon className='icon' icon={faMagnifyingGlass}></FontAwesomeIcon>
      </div>
    </div>
  )
}

function Text(){
  return (
    <div className='text'>
       <p>Hello👋</p>
        <section className="animation">
          <div className="first"><div>we are a notec family</div></div>
          <div className="second"><div>we are welcome to you</div></div>
          <div className='third'><div>thank you</div></div>
        </section>
    </div>
  )
}

function NavMenu(){
  return (
    <div className='content'>
      <nav className='mobile' role="navigation">
        <div className='mobile-log'>
          <img src={process.env.PUBLIC_URL+"/img/svg/log.svg"} width="50"></img>
          <span>notec</span>
        </div>
        <ul className="nav-links">
          <li id='mobiletest1'>Develop  🧑‍💻</li>
          <li id='mobiletest2'>Contact 🔗</li>
          <li id='mobiletest3'>About 📌</li>
        </ul>
        <div className='iconbar'>
          <FontAwesomeIcon className='icons' icon={faBars}></FontAwesomeIcon>
          <FontAwesomeIcon className='icons' icon={faXmark}></FontAwesomeIcon>
        </div>
      </nav>
    </div>
      
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header2></Header2>
        <nav className='nav-bar'>
          <ul id='navbar'>
            <li id="test1" >Develop</li>
            <li id="test2">Contacts</li>
            <li id="test3">About</li>
          </ul>
        </nav>
        <Text></Text>
        <div className='div-app'>
          <div className='btns'>
            <button className='button-1' onClick={Download} >Windows <i className="fa-brands fa-windows fa-bounce btn-icon" style={{color:"#005eff"}}></i></button>
            <button className='button-1'>Android <i className="fa-brands fa-android fa-bounce btn-icon" style={{color:"#00ff2a"}}></i></button>
          </div>
          <img src='./img/app.jpg'></img>
        </div>
      </header>
      <div className="App-body">
          <div className="layout">
            <Layout1></Layout1>
          </div>
          <div className="layout">
            <Layout2></Layout2>
          </div>
          <div className="layout">
            <Layout3></Layout3>
          </div>
      </div>
    </div>
  );
}

export default App;