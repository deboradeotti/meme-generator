import React from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(memesData => setAllMemes(memesData.data.memes))
  }, [])

  function getMemeImage(e) {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target

    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }));
  }

  return (
    <main>
      <form className="form">
        <input className="form__input" type="text" placeholder="Top text" name="topText" onChange={handleChange} value={meme.topText} />
        <input className="form__input" type="text" placeholder="Bottom text" name="bottomText" onChange={handleChange} value={meme.bottomText} />
        <button onClick={getMemeImage} className="form__button">Get a new meme image 🖼️</button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} className="meme__image" alt="" />
        {meme.randomImage && <h2 className="meme__text top">{meme.topText}</h2>}
        {meme.randomImage && <h2 className="meme__text bottom">{meme.bottomText}</h2>}
      </div>
    </main>
  )
}