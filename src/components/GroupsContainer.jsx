import React, { useState } from "react";
import Group from "./Group";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const GroupsContainer = () => {
  let navigate = useNavigate();

  const [groupIdJoin, setGroupIdJoin] = useState("");

  const handleIdChange = (event) => {
    setGroupIdJoin(event.target.value);
  };

  const createGroup = () => {
    let config = {
      headers: {
        AT: localStorage.getItem("AT"),
        UI: localStorage.getItem("UI"),
      },
    };
    axios
      .get("http://127.0.0.1:5000/groups/create", config)
      .then((response) => {
        console.log(response.data);
        const groupId = response.data.groupId;
        navigate("/createGroup?id=" + groupId);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const joinGroup = () => {
    let config = {
      headers: {
        AT: localStorage.getItem("AT"),
        UI: localStorage.getItem("UI"),
      },
    };
    axios
      .get("http://127.0.0.1:5000/groups/join?id=" + groupIdJoin, config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.status, error.response.data);
      });
  };
  return (
    <div className="">
      <div className="">
        <h1 className="text-w font-bold md:text-7xl sm:text-6xl text-5xl py-16 px-32 md:text-left text-center">
          MY GROUPS
        </h1>
        <div className="bg-black flex flex-col">
          <button
            className="bg-red-500 px-4 py-2 rounded-md w-36 m-5"
            onClick={() => createGroup()}
          >
            {" "}
            CREATE GROUP
          </button>
          <div className="flex">
            <input
              value={groupIdJoin}
              className="text-black"
              onChange={handleIdChange}
            />
            <button
              className="bg-red-500 px-4 py-2 rounded-md "
              onClick={() => joinGroup()}
            >
              {" "}
              JOIN GROUP
            </button>
          </div>
        </div>
      </div>

      <div className="flex  flex-wrap justify-center gap-10">
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
        <Group />
      </div>
    </div>
  );
};

export default GroupsContainer;
