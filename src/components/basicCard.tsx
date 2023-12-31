import React, { useState, useEffect } from "react";
import { Button, TextField } from "@mui/material";
import userData from "../data";
import UserCard from "../views/userCard";

import sortByProperty from "../utils/util";

const appdata = userData.filter((user) => user.age >= 18);

const sortOptions = [
  { title: "By company name", property: "company" },
  { title: "By age", property: "age" },
];
export default function BasicCard() {
  const [sortType, setSortType] = useState(sortOptions[0]);
  const [users, setUsers] = useState(appdata);
  const [removedUsers, setRemovedUsers] = useState([]);
  const [actBtn, setActBtn] = useState(sortOptions[0]);
  const [text, setText] = useState("");
  const [restore, setRestore] = useState(false);

  const removedUser = (index) => {
    removedUsers.push(users[index]);
    setRemovedUsers([...removedUsers]);
    const newUser = [...users].filter((_, i) => i != index);
    setUsers(newUser);
  };
  const restoredUser = (index) => {
    console.log(removedUsers);
    users.push(removedUsers[index]);
    const userRemoved = [...removedUsers].filter((_, i) => i != index);
    console.log(userRemoved);
    setRemovedUsers([...userRemoved]);
    console.log(users);
  };
  useEffect(() => {
    const newUsers = [...users].sort(sortByProperty(sortType.property));
    setUsers(newUsers);
  }, [sortType]);

  const changeSortType = (e) => {
    const selectedType = sortOptions.find(
      (type) => type.title === e.target.value
    );
    setSortType(selectedType);
  };
  function clickHandler(sort) {
    setActBtn(sort);
    setSortType(sort);
  }

  function search(text) {
    if (text && text != "" && text != null) {
      let searchedUser = users.filter(
        (a) => a.name.toLowerCase() === text.toLowerCase()
      );
      if (searchedUser && searchedUser.length) {
        setUsers(searchedUser);
      } else {
        let searchedRemovedUser = removedUsers.filter(
          (a) => a.name.toLowerCase() === text.toLowerCase()
        );
        if (searchedRemovedUser && searchedRemovedUser.length) {
          setRemovedUsers(searchedRemovedUser);
          setRestore(true);
          console.log(restore);
        }
      }
    }
  }
  if (!users?.length && !removedUsers?.length) {
    return <div>No users found</div>;
  }
  return (
    <div className="row my-5">
      <select onChange={changeSortType}>
        {sortOptions.map(({ title }, index) => {
          return <option key={index}>{title}</option>;
        })}
      </select>
      <p style={{ marginBottom: 0, marginTop: 30 }}>Search for a user</p>
      <TextField
        defaultValue={text}
        style={{ display: "block", margin: "auto" }}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button variant="contained" onClick={() => search(text)}>
        Search
      </Button>
      {text != "" &&
        removedUsers.length &&
        removedUsers.map((user, index) => {
          return (
            <div>
              <UserCard user={user} key={index}></UserCard>
              <Button size="small" onClick={() => restoredUser(index)}>
                Restore
              </Button>
            </div>
          );
        })}
      {(text != "" &&
        !removedUsers) || text =="" && users.map((user, index) => {
        return (
          <div>
            <UserCard user={user} key={index}></UserCard>
            <Button size="small" onClick={() => removedUser(index)}>
              Remove
            </Button>
            <Button
              size="small"
              style={{ display: !restore ? "none" : "" }}
              onClick={() => removedUser(index)}
            >
              Restore
            </Button>
          </div>
        );
      })}
    </div>
  );
}
