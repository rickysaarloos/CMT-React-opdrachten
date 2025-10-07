import '../App.css';
import Header from "../components/Header";
import Layout from "../components/Layout";
import BookList from "../components/BookList";


function Home() {
    return (
        <>
        <Header />
      <Layout>
      
        <BookList />
      </Layout> 

        </>
    );
}

export default Home;