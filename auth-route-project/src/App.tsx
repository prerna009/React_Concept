import { ToastContainer } from "react-toastify";
import AppRouter from "./routes/AppRouter";
import { SnackbarProvider } from "notistack";
import "./App.css";

function App() {
  return (
    <div>
      <AppRouter />
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
      </SnackbarProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />

    </div>
  );
}

export default App
