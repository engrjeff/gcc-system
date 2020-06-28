import React from "react";
import Header from "./components/layout/AppHeader";
import AppContent from "./components/layout/AppContent";
import AppSidebar from "./components/layout/AppSidebar";
import { TogglerProvider } from "./context/TogglerContext";
import store from "./state/store";
import { loadUser } from "./state/actions/authActions";
import { Provider } from "react-redux";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <main className="app">
          <TogglerProvider>
            <AppSidebar />
            <Header />
            <AppContent />
          </TogglerProvider>
        </main>
      </Provider>
    );
  }
}

export default App;
