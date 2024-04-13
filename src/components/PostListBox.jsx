import React from 'react';
import Box from "@mui/material/Box";
import eximg from "../image/eximg.png"
import Rating from '@mui/material/Rating';

function PostListBox(props) {
    const [value, setValue] = React.useState(2);

    return (
        <div style={{marginLeft:80}}>
            <Box
                height={300}
                width={550}
                my={4}
                alignItems="center"
                gap={4}
                p={2}
                sx={{ border: '1px solid lightgrey', borderRadius: 1 }}
            >
                <div style={{ justifyContent: "center", display:'flex', alignItems:"center"}}>
                    <img src={eximg} style={{ width: 170, height: 170}}/>&nbsp;
                    <img src={eximg} style={{ width: 170, height: 170}}/>&nbsp;
                    <img src={eximg} style={{ width: 170, height: 170}}/>
                </div>
                <div style={{ display: 'flex'}}>
                    <div style={{ marginLeft:25, marginTop:15, fontSize: 20 }}>마이멜로디 의인화</div>
                    <div style={{ marginLeft:280, marginTop:20, fontSize: 18 }}>25000원~</div>
                </div>

                <div style={{ marginLeft:20, marginTop:5}}>
                    <Rating name="read-only" value={value} readOnly />
                    <div style={{ marginLeft:5, marginTop: 5}}>평균 0일 소요</div>
                    <div style={{ marginLeft:5, marginTop: 5}}>총 30건 완료</div>
                </div>
            </Box>
        </div>
    );
}

export default PostListBox;
