import { Box } from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      bgcolor={"skyblue"}
      sx={{ display: { xs: "none", sm: "block" } }}
      flex={1}
      p={2}
    >
      Sidebar
    </Box>
  );
};

export default Sidebar;
