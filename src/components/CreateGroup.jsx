import React, { useEffect, useState } from "react";
import Navbar from "./NavbarHome";
import MembersContainer from "./MembersContainer";
import ItemPLContainer from "./ItemPLContainer";
import axios from "axios";
import { IoCopyOutline } from "react-icons/io5";
import Member from "./Member";

const CreateGroup = () => {
  useEffect(() => {
    getGroup();
  }, []);

  const [group, setGroup] = useState();
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const getGroup = () => {
    console.log("id", id);

    let config = {
      headers: {
        AT: localStorage.getItem("AT"),
        UI: localStorage.getItem("UI"),
      },
    };
    axios
      .get("http://127.0.0.1:5000/groups/group?id=" + id, config)
      .then((response) => {
        console.log(response.data);
        setGroup(response.data);
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
            <label for="first_name" class="block mb-2 text-sm font-medium ">
              Group Code
            </label>
            <input
              type="text"
              class="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5 cursor-not-allowed "
              placeholder="Group Name"
              value={group != null ? id : "Loading"}
              disabled
            />
          </div>

          <div className="m-5 w-1/2">
            <label for="first_name" class="block mb-2 text-sm font-medium ">
              Group Name
            </label>
            <input
              type="text"
              class="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5 "
              placeholder="Group Name"
              value={group != null ? group.name : "Loading"}
            />
          </div>

          <div className="ml-5 mr-5">
            <label for="first_name" class="block mb-2 text-sm font-medium ">
              Select a Genre
            </label>
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5 ">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>

          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 border border-blue-700 rounded">
            Save Changes
          </button>
        </div>
        <ItemPLContainer />
      </div>
    </div>
  );
};

export default CreateGroup;
