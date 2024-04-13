import React from 'react';
import Button from "@mui/material/Button";
import PopupState, {bindMenu, bindTrigger} from "material-ui-popup-state";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function PostListCategory(props) {
    return (
        <PopupState variant="popover" popupId="demo-popup-menu"
        >
            {(popupState) => (
                <React.Fragment>
                    <Button variant="outlined" {...bindTrigger(popupState)}
                            sx = {{ height: 56, width: 150, color: "grey", bgcolor: "white", marginLeft: 5, fontSize: 15 }}>
                        카테고리
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>인기순</MenuItem>
                        <MenuItem onClick={popupState.close}>최신순</MenuItem>
                    </Menu>
                </React.Fragment>
            )}
        </PopupState>
    );
}

export default PostListCategory;
