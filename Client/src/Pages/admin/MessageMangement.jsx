import { Avatar, Box, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AdminLayout from '../../Components/layout/AdminLayout'
import Table from '../../Components/shared/Table'
import { dashboardData } from '../../contants/SampleData'
import moment from 'moment'
import { fileFormat, transforImage } from '../../lib/Features'
import RenderAtt from '../../Components/shared/RenderAtt';

const columns = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "attachements",
    headerName: "Attachments",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => {
      const {attachements} = params.row;
      return attachements ?.length > 0 ? attachements.map((i)=>{
        const url = i.url;
        const file = fileFormat(url);
         return <Box>
          <a href={url} download target='_blank' style={{
            color:"black",
          }}>{RenderAtt(file, url)}</a>
         </Box>
      }) : "No Attachments";
      
    },
  },
  {
    field: "content",
    headerName: "Content",
    headerClassName: "table-header",
    width: 400,
  },
  {
    field: "sender",
    headerName: "Send By",
    headerClassName: "table-header",
    width: 200,
    renderCell: (params) => (
      <Stack>
        <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
        <span>{params.row.sender.name}</span>
      </Stack>
    ),
  },
  {
    field: "chat",
    headerName: "Chat",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "groupChat",
    headerName: "Group Chat",
    headerClassName: "table-header",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Time",
    headerClassName: "table-header",
    width: 250,
  },
]

const MessageMangement = () => {
  const [rows, setrows] = useState([]);

  useEffect(() => {
    setrows(dashboardData.messages.map((i) => ({
      ...i,
      id: i._id,
      sender: {
        name: i.sender.name,
        avatar: transforImage(i.sender.avatar, 50),
      },
      createdAt: moment(i.createdAt).format("MMMM Do YYYY"),
    })))
  }, [])

  return (
    <AdminLayout>
      <Table heading={"All Messages"} columns={columns} rows={rows} rowHeight={200}/>
    </AdminLayout>
  )
}

export default MessageMangement
