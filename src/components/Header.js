import trollFace from '../images/troll-face.png';

export default function Header() {
  return (
    <header className='header'>
      <img src={trollFace} alt="" className='header__image'/>
      <h2 className='header__title'>Meme Generator</h2>
      <h4 className='header__project'>React Course - Project 3</h4>
    </header>
  )
}