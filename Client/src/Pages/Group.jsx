import { Add as AddIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from '@mui/icons-material'
import { Backdrop, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, memo, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import AvatarCard from '../Components/shared/AvatarCard'
import { Link } from '../Components/styles/StyledComponents'
import { Samplechats, sampleUsers } from '../contants/SampleData'
import { bgGradient}from '../contants/color'
import UserItem from '../Components/shared/UserItem'

const ConfirmDeleteDialog = lazy(() => import("../Components/dialogs/ConfirmDeleteDialog"));
const AddMemberDialog = lazy(() => import("../Components/dialogs/AddMemberDialog"))
const isAddMember = false;

const Group = () => {

  const [isMobileMenuOpne, setisMobileMenuOpne] = useState(false);
  const chatId = useSearchParams()[0].get("group");
  const [GroupNames, setGroupNames] = useState("");
  const [groupnameUpdatedVlalue, setGroupNameUpdatedValue] = useState("");
  const [confirmDeleteDialog, setconfirmDeleteDialog] = useState(false);



  const confirmDeleteHandler = () => {
    setconfirmDeleteDialog(true);
    console.log("Delete Group");
  }
  const CloseconfirmDeleteHandler = () => {
    setconfirmDeleteDialog(false);
  }

  const openAddMember = () => {
    console.log("Add member");
  }

  const deleteHandler = () => {
    console.log("Delete Handler");
    CloseconfirmDeleteHandler();
  }

  const removeMemberHandler = (id) => {
    console.log("Remove member", id)
  };

  const hanleMobile = () => {
    setisMobileMenuOpne((prev) => !prev);
  };

  const handleMobileClose = () => {
    setisMobileMenuOpne(false);
  };

  const navigate = useNavigate()


  const navigateBack = () => {
    navigate("/")
  }



  const UpdateGroupName = () => {
    setisEdit(false);
    console.log(groupnameUpdatedVlalue);
  }

  useEffect(() => {
    if (chatId) {
      setGroupNames(`Group Name ${chatId}`);
      setGroupNameUpdatedValue(`Group Name ${chatId}`);
    }
    return () => {
      setGroupNames("")
      setGroupNameUpdatedValue("")
      setisEdit(false);
    };
  }, [chatId]);


  const [isEdit, setisEdit] = useState(false)
  const GroupName = <Stack direction={"row"} alignItems={"center"} spacing={"1rem"} padding={"2rem"}>
    {
      isEdit ? <>
        <TextField label="Group Name" value={groupnameUpdatedVlalue} onChange={e => setGroupNameUpdatedValue(e.target.value)} />
        <IconButton onClick={UpdateGroupName}><DoneIcon /></IconButton>
      </> : <>
        <Typography variant='h4' fontWeight={"600"}>{GroupNames}</Typography>
        <IconButton onClick={() => setisEdit(true)}><EditIcon /></IconButton>
      </>
    }
  </Stack>

  const ButtonGroup = (
    <Stack
      direction={{
        sm: "row",
        xs: "column-reverse",
      }}
      spacing={"1rem"}
      p={{
        sm: "1rem",
        xs: "0",
        md: "1rem 4rem",
      }}>

      <Button size='large' color='error' variant='contained' startIcon={<DeleteIcon />} onClick={confirmDeleteHandler}>Delete Group</Button>
      <Button size='large' variant='contained' startIcon={<AddIcon />} onClick={openAddMember}>Add Member</Button>

    </Stack>

  )

  const IconBtns = <>
    <Tooltip title="Menu">
      <IconButton sx={{
        display: {
          xs: "block",
          sm: "none",
        },
        top: "1rem",
        left: "8rem",
        bgcolor: "rgba(0,0,0,0.7)",
        color: "white",
        ":hover": {
          bgcolor: "black",
        }
      }} onClick={hanleMobile}>
        <MenuIcon />
      </IconButton>
    </Tooltip>

    <Tooltip title="back">
      <IconButton sx={{
        position: "absolute",
        top: "2rem",
        left: "2rem",
        bgcolor: "rgba(0,0,0,0.7)",
        color: "white",
        ":hover": {
          bgcolor: "black",
        },
      }} onClick={navigateBack}>
        <KeyboardBackspaceIcon />
      </IconButton>
    </Tooltip>
  </>

  return <Grid container height={"100vh"}>
    <Grid item sx={{
      display: {
        xs: "none",
        sm: "block",
      },
    }} sm={4} fontWeight={600}>

      <GroupsList myGroups={Samplechats} chatId={chatId} />

    </Grid>
    <Grid item xs={12} sm={8} sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      padding: "1rem 3rem",
      fontWeight: "600",
    }}>
      {
        IconBtns
      }
      {
        GroupNames && <>
          {GroupName}
          <Typography margin={"2rem"} alignSelf={"flex-start"} variant='h5' fontWeight={"600"}>Members</Typography>
          <Stack
            maxWidth={"45rem"}
            width={"100%"}
            boxSizing={"border-box"}
            padding={{
              sm: "1rem",
              xs: "0",
              md: "1rem 5rem",
            }}
            spacing={"1rem"}
            height={"50vh"}
            overflow={"auto"}
          >
            {/*Member*/}
            {
              sampleUsers.map((i) => (
                <UserItem user={i} key={i._id} isAdded styling={{
                  boxShadow: "0 0 1.5rem rgba(0,0,0,0.2)",
                  padding: "1rem 2rem",
                  borderRadius: "1rem",

                }}
                  handler={removeMemberHandler}
                />
              ))
            }
          </Stack>
          {ButtonGroup}
        </>
      }
    </Grid>

    {
      isAddMember && <Suspense fallback={<Backdrop open />}>
        <AddMemberDialog />
      </Suspense>
    }

    {
      confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog open={ConfirmDeleteDialog} handleClose={CloseconfirmDeleteHandler} deleteHandler={deleteHandler} />
        </Suspense>
      )}

    <Drawer sx={{ display: { xs: "block", sm: "none" } }} open={isMobileMenuOpne} onClose={handleMobileClose}>
      <GroupsList w={"60vw"} myGroups={Samplechats} chatId={chatId} />
    </Drawer>
  </Grid>

};

const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack width={w} overflow={"auto"}
  sx={{ backgroundImage:bgGradient, height:"100vh"}}
  >
    {
      myGroups.length > 0 ? (myGroups.map((group) => <GroupListItem group={group} chatId={chatId} key={group._id} />)) : (<Typography textAlign={"center"} padding={"1rem"}>No Group</Typography>)
    }
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link to={`?group=${_id}`} onClick={(e) => {
      if (chatId === _id) e.preventDefault();
    }}>
      <Stack direction={"row"} spacing={"1rem"} padding={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>

  )
});



export default Group
