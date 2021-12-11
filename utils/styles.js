import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#fffff",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "#fffff",
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: "85vh",
  },
  footer: {
    textAlign: "center",
    margin: "40px",
  },
});

export default useStyles;
