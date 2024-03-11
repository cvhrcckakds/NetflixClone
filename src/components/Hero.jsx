import { useSelector } from "react-redux" //storada tuttuğumuz için useSelector kullanıyoruz
import { baseImgURL } from "../constant";
import Loading from './Loading';
const Hero = () => {
   const state= useSelector((store)=>store.movie)

   //1) Popüler filmlerden rastgele bir tanesini seç 0-20 arasında rastgele sayı üret
   const i = Math.round(Math.random()* state.popularMovies.length);

   //2) rastgele üretilen sıradaki filme eriş
   const randomMovie= state.popularMovies[i] //indeksteki elemanları i ile ratgele al

   console.log(randomMovie)


  return (
    <div className="hero row p-4">
      {/* yüklenme deva mediyorsa loading bas */}
      {!randomMovie ? (
        <Loading />
      ) : (
        <>
          <div className="col-md-6 d-flex flex-column gap-3 align-items-center justify-content-center">
            <h1>{randomMovie.title}</h1>
            <p className="text-start">{randomMovie.overview}</p>
            <p>
              <span>IMDB:</span>
              <span className="text-warning px-2">
                {randomMovie.vote_average}
              </span>
            </p>

            <div className="d-flex gap-3">
              <button className="btn btn-danger">Filmi İzle</button>
              <button className="btn btn-info">Listeye Ekle</button>
            </div>
          </div>

          <div className="col-md-6">
            <img
              className="img-fluid rounded shadow my-4"
              src={baseImgURL + randomMovie.backdrop_path}
            />
          </div>
        </>
      )}
    </div>
  );
};


export default Hero
