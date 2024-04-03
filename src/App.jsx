import * as React from "react";
import Box from "@mui/material/Box";
import {
  AppBar,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

function App() {
  const navItems = ["카테고리", "리뷰", "팀모집"];

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
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
