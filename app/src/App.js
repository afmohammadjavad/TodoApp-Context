import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import TodosProvider from "./components/Contexts/TodosContext";

const App = () => {
  return (
    <Layout>
      <Header />
      <TodosProvider>
        <Content />
      </TodosProvider>
      <Footer />
    </Layout>
  );
};

export default App;
