import { useInputValidation } from '6pp';
import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { sampleUsers } from '../../contants/SampleData';
import UserItem from '../shared/UserItem';

const NewGroup = () => {

  const groupName = useInputValidation("");

  const submitHandler = () => {""};
  const closeHandler = () => {""};

  const [members, setmembers] = useState(sampleUsers);
  const [selectedMember, setselectedMember] = useState([]);

  const SelectMemberHandler = (id) => {
    setselectedMember((prev)=> prev.includes(id) ? prev.filter((currentElement)=> currentElement !== id): [...prev,id]);
  };
  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"}>
        <DialogTitle textAlign={"center"} variant='h5'>New Groups</DialogTitle>
        <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler}/>
        <Typography variant='body1' marginTop={"0.5rem"}>Members</Typography>
        <Stack>
          {
            members.map((i) => (
              <UserItem user={i} key={i._id} handler={SelectMemberHandler} isAdded={selectedMember.includes(i._id)}/>
            ))
          }
        </Stack>
        <Stack direction={"row"} justifyContent={"space-around"} marginTop={'2rem'}>
        <Button variant='outlined' color='error' size='large'>Cancel</Button>
        <Button variant='contained' size='large' onClick={submitHandler}>Create</Button>
        </Stack>
      </Stack>
    </Dialog>
  )
}

export default NewGroup
