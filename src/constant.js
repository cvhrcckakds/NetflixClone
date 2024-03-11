//movieaction.js sayfasında api verisi olarak almıştık, yer kapmaması için buraya attık

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2E2MWQwMmZjNWE5MTA0MTgxMWY1YWQ1ZDMzMGMwOCIsInN1YiI6IjY1ZTU3ZmU0ZjcwNmRlMDE0YWM4YjM0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fmOv4m3e8h3ZG_kJrl06XIwwsOS1d96VAEUU2eX_tjc'
    }
  };

  //fotoğrafların başına eklenmesi gereken baseurl
  export const baseImgURL= "https://image.tmdb.org/t/p/original"