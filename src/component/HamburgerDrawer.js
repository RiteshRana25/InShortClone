import * as React from "react";
import Categories from "../Data/Categories.js";
import {
  Box,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


export default function AnchorTemporaryDrawer({setCategory}) {
  const [state, setState] = React.useState({ left: false });

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // Create theme based on user preference
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  // Toggle drawer open/close
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setState((prevState) => ({ ...prevState, [anchor]: open }));
  };

  // Drawer content
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 200 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>Categories</ListItem>  
      </List>
      <Divider />
      <List>
        {Categories.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={()=>setCategory(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <React.Fragment key={"left"}>
          <Button onClick={toggleDrawer("left", true)}>
            <MenuIcon color="action" />
          </Button>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}
