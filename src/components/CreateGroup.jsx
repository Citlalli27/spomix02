import React, { useEffect, useState } from "react";
import Navbar from "./NavbarHome";
import MembersContainer from "./MembersContainer";
import ItemPLContainer from "./ItemPLContainer";
import axios from "axios";
import { IoCopyOutline } from "react-icons/io5";
import Member from "./Member";
import ItemPL from "./ItemPL";

const CreateGroup = () => {
  useEffect(() => {
    getGroup();
  }, []);

  const [group, setGroup] = useState();

  const [genre, setGenre] = useState("Hip Hop");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const getGroup = () => {
    let config = {
      headers: {
        AT: localStorage.getItem("AT"),
        UI: localStorage.getItem("UI"),
      },
    };
    axios
      .get("http://127.0.0.1:5000/groups/group?id=" + id, config)
      .then((response) => {
        console.log("Group", response.data);
        setGroup(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createPlaylist = () => {
    let config = {
      headers: {
        AT: localStorage.getItem("AT"),
        UI: localStorage.getItem("UI"),
      },
    };
    axios
      .get(
        "http://127.0.0.1:5000/groups/recommendations?id=" +
          id +
          "&genre=" +
          genre,
        config
      )
      .then((response) => {
        console.log("Playlist", response.data);
        setGroup({ ...group, playlist: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-gradient-to-r from-[#2d2965] via-[#4b477f] to-rose-500 text-white h-screen">
      <Navbar />
      <div className="bg-gradient-to-r from-[#2d2965] via-[#4b477f] to-rose-500 text-white ">
        <h1 className="text-w font-bold md:text-7xl sm:text-6xl text-5xl py-16 px-32 md:text-left text-center">
          {group != null ? <>{group.name}</> : <>Loading</>}
        </h1>
      </div>
      <div className=" flex flex-col md:flex-row sm:flex-row gap-1 bg-gray-200 ">
        <div className="bg-indigo-400 ml-5 mr-5">
          <p className="text-center m-5">Members</p>
          {group != null ? (
            group.profiles.map((profile) => {
              return (
                <Member
                  name={profile.display_name}
                  img={profile.images[0].url}
                />
              );
            })
          ) : (
            <p>Loading</p>
          )}
        </div>

        <div className="bg-gray-200">
          <div className="m-5 w-1/2">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium "
            >
              Group Code
            </label>
            <input
              type="text"
              className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5 cursor-not-allowed "
              placeholder="Group Name"
              value={group != null ? id : "Loading"}
              disabled
            />
          </div>

          <div className="m-5 w-1/2">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium "
            >
              Group Name
            </label>
            <input
              type="text"
              className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5 "
              placeholder="Group Name"
              value={group != null ? group.name : "Loading"}
            />
          </div>

          <div className="ml-5 mr-5">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium "
            >
              Select a Genre
            </label>

            <select
              value={genre}
              onChange={(e) => handleGenreChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5 "
            >
              <option value="Hip Hop">Hip Hop</option>
              <option value="Rock">Rock</option>
              <option value="Reggaeton">Reggaeton</option>
              <option value="Pop">Pop</option>
            </select>
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-5 border border-orange-700 rounded"
            onClick={() => createPlaylist()}
          >
            Create Playlist
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 border border-blue-700 rounded">
            Save Changes
          </button>
        </div>
        <div className="bg-indigo-800 ml-5 mr-5">
          <p className="text-center m-5">Playlist</p>
          {group != null && group.playlist != null ? (
            group.playlist.map((song) => {
              return (
                <ItemPL
                  img={song.img}
                  artist={song.artist}
                  name={song.name}
                  key={song.id}
                />
              );
            })
          ) : (
            <p>Create your first playlist</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateGroup;
