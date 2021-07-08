import React, { useState, useEffect } from 'react';
import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import { helpHttp } from '../../helpers/helpHttp';
import Error404 from '../../pages/Error404';
import Loader from '../shared/Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import SongTable from '../../pages/SongTable';
import SongPage from '../../pages/SongPage';

let mySongsInit = JSON.parse(localStorage.getItem('mySongs')) || [];
const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;
      let artistUrl = `https://theaudiodb.com/api/v1/json/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      setLoading(true);

      // Ponemos await para obtener la información y para que las variables de estado no truene con undefined
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      setBio(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    fetchData();

    localStorage.setItem('mySongs', JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  const handleSaveSong = () => {
    let currentSong = { search, lyric, bio };
    setMySongs((mySongs) => [...mySongs, currentSong]);
    setSearch(null);
  };
  const handleDeleteSong = (id) => {
    let isDelete = window.confirm(
      `Estás seguro de eliminar la cancion con el id ${id}`
    );
    if (isDelete) {
      let songs = mySongs.filter((el, index) => index !== id);
      setMySongs(songs);
      localStorage.setItem('mySongs', JSON.stringify(songs));
    }
  };

  return (
    <div>
      <HashRouter basename="canciones">
        <header>
          <h2>Song search</h2>
          <Link to="/">Home</Link>
        </header>
        {loading && <Loader />}
        <article className="grid-1-2">
          <Switch>
            <Route exact path="/">
              <SongForm
                handleSearch={handleSearch}
                handleSaveSong={handleSaveSong}
              />
              <SongTable
                mySongs={mySongs}
                handleDeleteSong={handleDeleteSong}
              />
              {/** Cuando search tenga algo y loading sea falso */}
              {search && !loading && (
                <SongDetails search={search} lyric={lyric} bio={bio} />
              )}
            </Route>
            <Route
              exact
              path="/:id"
              children={<SongPage mySongs={mySongs} />}
            />
            <Route path="*" children={Error404} />
          </Switch>
        </article>
      </HashRouter>
    </div>
  );
};

export default SongSearch;
