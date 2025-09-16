import * as React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
const Profile=(props)=>{
  const {user}=props;

      /*פונקציה שמגרילה צבע לפרופיל*/
function stringToColor(string) {
    let hash = 0;
    let i;
  
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
} 
  /*פונקציה שלוקחת את האותיות הראשונות בשם ומציגה את הפרופיל*/
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Stack>
    {user!==""?
    <Avatar {...stringAvatar(user)} />
    :<h3>Unknown User</h3>
    }  
   </Stack>
  );
}
export default Profile;