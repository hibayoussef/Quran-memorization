import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useLinks } from "../../useLinks"

const DrawerComponent = () => {
  const { links } = useLinks();
  const [openIndex, setOpenIndex] =useState(false);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box sx={{ width: "250px", bgcolor: "background.paper" }}>
      <List>
        {links.map((link, index) => (
          <div key={link.name}>
            <ListItem button onClick={() => handleToggle(index)}>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.name} />
            </ListItem>
            {link.list && (
              <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {link.list.map((subLink) => (
                    <ListItem button key={subLink.name} sx={{ pl: 4 }}>
                      <ListItemIcon>{subLink.icon}</ListItemIcon>
                      <ListItemText primary={subLink.name} />
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
            <Divider />
          </div>
        ))}
      </List>
    </Box>
  );
};

export default DrawerComponent;
