import "./App.css";
import { useState } from "react";

export default function App() {
  const names = [
    {
      name: "Jai Bhim",
      img: "https://moviegalleri.net/wp-content/uploads/2021/07/Actor-Suriya-Jai-Bhim-Movie-First-Look-Poster-HD.jpg",
      cast: "Surya, Lijomol Jose, Manikandan",
      genre: "Crime",
      summary:"A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
      director: "TJ Gnanavel",
      rating:9.3
    },
    {
      name: "Soorarai Potru",
      img: "https://www.pinkvilla.com/imageresize/suriya_soorarai_pottru_trailer_release.jpeg?width=752&format=webp&t=pvorg",
      cast: "Surya, Aparna Balamurali",
      genre: "Drama",
      summary:"Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.",
      director:"Sudha Kongara Prasad",
      rating:9.1
    },
    {
      name: "Maanaadu",
      img: "https://m.media-amazon.com/images/M/MV5BMjFkMTFjYjgtNDhkNS00MGNmLWJkZWMtZWIwNGYyOWE3MTM0XkEyXkFqcGdeQXVyMTE1MjcwOTA4._V1_.jpg",
      cast: "Silambarasan,S.J. Suryah, Y.G.Mahendran",
      genre: "Action Sci-Fi Thriller",
      summary:"On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer become stuck in a time loop.",
      director:"Venkat Prabhu",
      rating:8.7
    },
    {
      name: "Thuppakki",
      img:"https://m.media-amazon.com/images/M/MV5BZTc4YWY5MzAtOTc4Zi00NDVmLThlMGItYjliOGNkYmM3NDBmXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
      cast: "Vijay, Vidyut Jammwal ",
      genre: "Action-Thriller",
      summary:"In a bomb blast, an army officer apprehends a sleeper agent who confesses that more bomb attacks are planned around the city; the officer impedes the subsequent blasts and devices a plan to capture the mastermind behind these attacks.",
      director:"AR Murugadoss",
      rating:8.1
    },
    {
      name: "Mankatha",
      img:"https://www.infoflick.com/poster/mankatha_1573585635.jpg",
      cast: "Ajith Kumar, Arjun Sarja",
      genre: "Acton-Crime-thriller",
      summary:"Inspector Vinayak is suspended after he lets a smuggler escape. He then meets a group of men who plan to whisk away 500 crore belonging to a gangster. He promises to help them for a share in the loot.",
      director:"Venkat Prabhu",
      rating:7.6 
    }
  ];
  return (
    <div className="App">
    <Addmovie />
      <div className="movie">
   {names.map((user) => (
              <Rating name={user.name} img={user.img} cast={user.cast} genre={user.genre} summary={user.summary} director={user.director} rating={user.rating} />
    ))}
      
    </div>
    </div>
  );
}

function Rating({name,img,cast,genre,summary,director,rating}){
  const [dislike,setdislike]= useState(0);
  const [like,setlike]= useState(0);
  const styles={
    color: rating > 8.5 ? "green" : "red"
  };
  
  return(
     <div className="movie-container">
        <img src={img} id="res" className="poster" alt="pics" />
        <h3>Movie : {name}</h3>
        <p>Cast : {cast}</p>
        <p>Genre : {genre}</p>
        <p>Summary : {summary}</p>
        <p>Directed by : {director} </p>
        <p style={styles}>IMDB Rating : ⭐{rating}</p>
        <div className="buton">
        <button className="btn btn-primary" onClick={() => setlike(like + 1)}>like👍{like}</button>
       <button className="btn btn-secondary" onClick={() => setdislike(dislike + 1)}>Dislike👎{dislike}</button>
     </div>
     </div>
     );
}

function Addmovie(){
    const [input,setInput]=useState(""); 

    const [Movielist,setMovielist]=useState([{
      name: "Jai Bhim",
      img: "https://moviegalleri.net/wp-content/uploads/2021/07/Actor-Suriya-Jai-Bhim-Movie-First-Look-Poster-HD.jpg",
      cast: "Surya, Lijomol Jose, Manikandan",
      genre: "Crime",
      summary:"A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
      director: "TJ Gnanavel",
      rating:9.3
    },
    {
      name: "Soorarai Potru",
      img: "https://www.pinkvilla.com/imageresize/suriya_soorarai_pottru_trailer_release.jpeg?width=752&format=webp&t=pvorg",
      cast: "Surya, Aparna Balamurali",
      genre: "Drama",
      summary:"Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.",
      director:"Sudha Kongara Prasad",
      rating:9.1
    },
    {
      name: "Maanaadu",
      img: "https://m.media-amazon.com/images/M/MV5BMjFkMTFjYjgtNDhkNS00MGNmLWJkZWMtZWIwNGYyOWE3MTM0XkEyXkFqcGdeQXVyMTE1MjcwOTA4._V1_.jpg",
      cast: "Silambarasan,S.J. Suryah, Y.G.Mahendran",
      genre: "Action Sci-Fi Thriller",
      summary:"On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer become stuck in a time loop.",
      director:"Venkat Prabhu",
      rating:8.7
    },
    {
      name: "Thuppakki",
      img:"https://m.media-amazon.com/images/M/MV5BZTc4YWY5MzAtOTc4Zi00NDVmLThlMGItYjliOGNkYmM3NDBmXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
      cast: "Vijay, Vidyut Jammwal ",
      genre: "Action-Thriller",
      summary:"In a bomb blast, an army officer apprehends a sleeper agent who confesses that more bomb attacks are planned around the city; the officer impedes the subsequent blasts and devices a plan to capture the mastermind behind these attacks.",
      director:"AR Murugadoss",
      rating:8.1
    },
    {
      name: "Mankatha",
      img:"https://www.infoflick.com/poster/mankatha_1573585635.jpg",
      cast: "Ajith Kumar, Arjun Sarja",
      genre: "Acton-Crime-thriller",
      summary:"Inspector Vinayak is suspended after he lets a smuggler escape. He then meets a group of men who plan to whisk away 500 crore belonging to a gangster. He promises to help them for a share in the loot.",
      director:"Venkat Prabhu",
      rating:7.6 
    }]);
    
   return (
     <div className="admovie">
       <label for="movie">Movie Name:</label>
       <input id="movie" value={input} onChange={(event)=>setInput(event.target.value)}/>
       <label for="cast">Cast:</label>
       <input id="cast"/>
       <label for="genre">Genre:</label>
       <input id="genre"/>
       <label for="summary">Summary:</label>
       <textarea id="summary"/>
        <label for="rating">IMDB Rating:</label>
       <input id="rating"/>
       <div className="admov">
       <button className="btn btn-danger" onClick={() => setMovielist([...Movielist,input]) }>Add New Movie</button>
     </div>
     {Movielist.map((user) => (
              <Newmovie name={user.name} img={user.img} cast={user.cast} genre={user.genre} summary={user.summary} director={user.director} rating={user.rating} />
    ))}
  
     </div>
   )

}

function Newmovie({name,cast,genre,summary,director,rating}){
  const [dislike,setdislike]= useState(0);
  const [like,setlike]= useState(0);
  const styles={
    color: rating > 8.5 ? "green" : "red"
  };
   return (
    <div className="movie-container">
    {/* <img src={img} id="res" className="poster" alt="pics" /> */}
    <h3>Movie : {name}</h3>
    <p>Cast : {cast}</p>
    <p>Genre : {genre}</p>
    <p>Summary : {summary}</p>
    <p>Directed by : {director} </p>
    <p style={styles}>IMDB Rating : ⭐{rating}</p>
    <div className="buton">
    <button className="btn btn-primary" onClick={() => setlike(like + 1)}>like👍{like}</button>
   <button className="btn btn-secondary" onClick={() => setdislike(dislike + 1)}>Dislike👎{dislike}</button>
 </div>
 </div>
   )

}
