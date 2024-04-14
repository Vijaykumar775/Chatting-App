import React from 'react'
import { transforImage } from '../../lib/Features';
import { FileOpen as FileOpenIcon } from '@mui/icons-material';

const RenderAtt = (file, url) => {
  
    switch (file) {
        case "video":
           return <video src={url} preload='none' width={"200px"} controls />
        

        case "image":
            return <img src={transforImage(url,200)} alt="Attachments" width={"200px"} height={"150px"} style={{
                objectFit:"contain"
            }}/>

        case "audio":
            return   <audio src={url} alt="Attachments" preload='none' controls/>

        default:
            return <FileOpenIcon />
    }
}

export default RenderAtt;
