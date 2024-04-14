import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../../contants/SampleData'
import UserItem from '../shared/UserItem'

const AddMemberDialog = ({addMember, isLoadingMember, chatId}) => {
    
  const [members, setmembers] = useState(sampleUsers);
  const [selectedMember, setselectedMember] = useState([]);

  const SelectMemberHandler = (id) => {
    setselectedMember((prev)=> prev.includes(id) ? prev.filter((currentElement)=> currentElement !== id): [...prev,id]);
  }

    const addMemberSubmitHandler = () => {
      CloseHandler();
    };
    const CloseHandler = () =>{
      setselectedMember([]);
      setmembers([]);
    };

  return (
    <Dialog open onClose={CloseHandler}>
    <Stack p={"2rem"} width={"20rem"} spacing={"1rem"}>
        <DialogTitle textAlign={"center"}>Add Member</DialogTitle>
        <Stack>
        {
           members.length > 0 ? members.map(i =>(
                <UserItem key={i._id} user={i} handler={SelectMemberHandler}
                  isAdded={selectedMember.includes(i._id)}
                />
            )) : <Typography textAlign={"center"}>No Friends</Typography>
        }
        </Stack>
        <Stack direction={"row"} display={"flex"} justifyContent={"space-evenly"}>
        <Button color='error' onClick={CloseHandler}>Cancel</Button>
        <Button variant='contained' disabled={isLoadingMember} onClick={addMemberSubmitHandler}>Submit</Button>

        </Stack>
    </Stack>
    </Dialog>
  )
}

export default AddMemberDialog
