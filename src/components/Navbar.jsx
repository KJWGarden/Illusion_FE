import * as React from "react";
import Box from "@mui/material/Box";
import {AppBar, Button, Link, Toolbar, Typography} from "@mui/material";

function Navbar() {
  //const navItems = ["카테고리", "리뷰", "팀모집"];

  return (
    <>
      <AppBar position="fixed">
        <Toolbar sx={{ display: "flex" }}>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Illusion
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link href={"/posts"}>
                <Button
                    sx={{
                        color: "#fff",
                    }}
                >
                    카테고리
                </Button>
            </Link>
              <Button
                  sx={{
                      color: "#fff",
                  }}
              >
                  리뷰
              </Button>
              <Button
                  sx={{
                      color: "#fff",
                  }}
              >
                  팀모집
              </Button>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Button sx={{ color: "#fff" }}>회원가입 / 로그인</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
