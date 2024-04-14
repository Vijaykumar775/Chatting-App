import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";



export const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: "react(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whitespace: "nowrap",
    width: 1,
});

export const Link = styled(LinkComponent)
`
text-decoration: none;
color: black;
&:hover{
    background-color: rgba(0,0,0,0.2);
}
`;

export const InputBox = styled("input")`
width:100%;
height: 100%;
border: none;
outline: none;
padding:0 3rem;
border-radius: 1.5rem;
background-color:lightgray;
`


export const SearchFeild = styled("input")`
padding: 1rem 2rem;
width: 20vmax;
border-radius: 1.5rem;
background-color: #f1f1f1;
font-size:1.1rem;
`;

export const CurveButton  = styled("button")`
border-radius: 1.5rem;
padding: 0.8rem;
border:none;
outline:none;
cursor:pointer;
background-color:#2d2d2f;
color:white;
font-size:0.5rem;
&:hover{
    background-color: rgba(0,0,0,0.8);
}
`;  