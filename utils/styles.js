import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#fffff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "85vh",
  },
  footer: {
    textAlign: "center",
  },
});

export default useStyles;
