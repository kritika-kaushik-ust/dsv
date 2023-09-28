import React, { useState ,useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import userData from "../data";
import sortByProperty from "../utils/util";

const appdata = userData.filter((user) => user.age >= 18);
function randomStr(len, arr) {
  let ans = "";
  for (let i = len; i > 0; i--) {
    ans += arr[Math.floor(Math.random() * arr.length)];
  }
  return ans;
}
const sortOptions = [
  { title: "By company name", property: "company" },
  { title: "By age", property: "age" }
];
export default function BasicCard() {
  const [sortType, setSortType] = useState(sortOptions[0]);
  const [users, setUsers] = useState(appdata);
  const [removedUsers, setRemovedUsers] = useState([]);
  const [actBtn, setActBtn] = useState(sortOptions[0])

  const removedUser=(index)=>{
    removedUsers.push(users[index]);
    setRemovedUsers([...removedUsers]);
    console.log(removedUsers);
    const newUser=[...users].filter((_,i)=>i!=index);
    setUsers(newUser);
    console.log(index);
  }
  useEffect(() => {
    const newUsers = [...users].sort(sortByProperty(sortType.property));
    setUsers(newUsers);
  }, [sortType]);

  const changeSortType = (e) => {
    const selectedType = sortOptions.find(
      (type) => type.title === e.target.value
    );
    //console.log(`Picked sort type is ${e.target.value}`)
    setSortType(selectedType);
  };
 function clickHandler(sort){
    setActBtn(sort);
    setSortType(sort);
  }

  return (
    <div className="row my-5">       
      <select onChange={changeSortType}>
        {sortOptions.map(({ title }, index) => {
          return <option key={index}>{title}</option>;
        })}
      </select>
      {users.map((user, index) => {
        return (
          <Card key={index} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Id: {randomStr(6, "ABCDEF123456")}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Name : {user.name}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Age : {user.age}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Address : {user.address.street} , {user.address.suite} , {user.address.city} , {user.address.zipcode}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Company: {user.company.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={()=>removedUser(index)}>Remove</Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
