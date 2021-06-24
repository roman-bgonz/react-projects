import React from 'react';
import Message from '../Message';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === 'AbortError' ? (
        <Message
          msg={`No existe la canción '<em>${search.song}</em>'`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artist[0]} />
      ) : (
        <Message
          msg={`No existe el interprete '<em>${search.artist}</em>'`}
          bgColor="#dc3545"
        />
      )}
    </>
  );
};

export default SongDetails;
