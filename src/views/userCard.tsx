import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function randomStr(len, arr) {
    let ans = "";
    for (let i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
  }
  interface DisplayTableProps {
    name: string,
    age: number,
    address: object,
    company: object
  }
  type Props = {
    user: DisplayTableProps
  }
export default function userCard({user}:Props) {
    return (
    <div className="row my-5">     
          <Card sx={{ minWidth: 100 }}>
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
          </Card>
    </div>
  )}