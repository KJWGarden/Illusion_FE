import React from 'react';
import Navbar from "../components/Navbar.jsx";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PostListBox from "../components/PostListBox.jsx";
import PostListCategory from "../components/PostListCategory.jsx";

function PostListPage(props) {
    return (
        <>
            <div style={{ height: 64}}>
                <Navbar />
            </div>
            <div style={{ marginLeft: 80, marginRight: 80, marginTop: 50, marginBottom: 20,  display:"flex" }}>
                <TextField id="outlined-basic" label="검색" variant="outlined"
                sx={{ border: "lightgrey"}}/>
                <PostListCategory />
                <Button variant="outlined"
                        sx={{ height: 56, width: 150, color: "grey", bgcolor: "white", marginLeft:85, fontSize: 15 }}>
                    작품 등록
                </Button>
            </div>
            <div style={{ display: 'flex' }}>
                <PostListBox />
                <PostListBox />
            </div>
        </>
    )
}

export default PostListPage;
