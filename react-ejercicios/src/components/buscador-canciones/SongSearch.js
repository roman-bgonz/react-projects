import React, { useState, useEffect } from 'react';
import { helpHttp } from '../../helpers/helpHttp';
import Loader from '../Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

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
  }, [search]);

  const handleSearch = (data) => {
    //console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Son search</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loader />}
        {/** Cuando search tenga algo y loading sea falso */}
        {search && !loading && (
          <SongDetails search={search} lyric={lyric} bio={bio} />
        )}
      </article>
    </div>
  );
};

export default SongSearch;
