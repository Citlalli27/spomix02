import React from "react";
import ArtistContainer from "./ArtistContainer";
import SongContainer from "./SongContainer";
import Artist from "./Artist";
import dataArtist from "../artist.json";
import Song from "./Song";
import dataSong from "../song.json";
import NavbarHome from "./NavbarHome";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

const Home = () => {
  const [artists, setArtists] = useState();
  const [songs, setSongs] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("AT") === null &&
      localStorage.getItem("UI") === null
    ) {
      const UI = new URL(window.location.href).searchParams.get("UI");
      const AT = new URL(window.location.href).searchParams.get("AT");

      if (UI == null || AT == null) {
        navigate("/");
      } else {
        localStorage.setItem("UI", UI);
        localStorage.setItem("AT", AT);
      }
    }

    getArtists(localStorage.getItem("AT"));
    getSongs(localStorage.getItem("AT"));
  }, []);

  const getArtists = (AT) => {
    let config = {
      headers: {
        AT: AT,
      },
    };
    axios
      .get("http://127.0.0.1:5000/me/artists", config)
      .then((response) => {
        console.log(response.data);
        setArtists(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSongs = (AT) => {
    let config = {
      headers: {
        AT: AT,
      },
    };
    axios
      .get("http://127.0.0.1:5000/me/tracks", config)
      .then((response) => {
        console.log("Songs", response.data);
        setSongs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-gradient-to-r from-[#2d2965] via-[#4b477f] to-rose-500 text-white ">
      <NavbarHome />

      <div className="flex flex-col ">
        <ArtistContainer>
          {artists != null ? (
            artists.map((artist) => (
              <Artist name={artist.name} imagen={artist.img} key={artist.id} />
            ))
          ) : (
            <p className="animate-ping">Loading...</p>
          )}
        </ArtistContainer>

        <SongContainer>
          {console.log(songs)}
          {songs != null ? (
            songs.map((song) => (
              <Song
                artist={song.artist}
                song={song.name}
                imagen={song.img}
                key={song.id}
              />
            ))
          ) : (
            <p className="animate-ping">Loading...</p>
          )}
        </SongContainer>
      </div>
    </div>
  );
};

export default Home;
