import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import { SingleProject } from "./pages/single-project/SingleProject";
import SingleCategory from "./pages/single-category/SingleCategory";
// import "non.geist";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="app">
            <Header />
          <div className="app-content p-3 md:p-0  max-w-none md:max-w-default m-auto">
            <Routes>
              {/* <Route path="/projects" element={<Projects />} /> */}
              <Route path="/project/:id" element={<SingleProject />} />
              <Route path="/category/:id" element={<SingleCategory />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </ApolloProvider>
    </Router>
  );
};

export default App;
