import './App.css';
import { useState ,useEffect} from 'react';
import NavBarInshort from './Components/NavBarInshortDiv/NavBarInshortDiv.js';
import axios from "axios";
import NewsContent from './Components/NewsContentDiv/NewsContentDiv.js';
import Footer from './Components/FooterDiv/FooterDiv.js';
import apikey from './DataElement/ConfigApi.js';

function App() {
  const [category, setCategory] = useState(["general"])
  const [newsArray, setNewsArray] = useState([])
  const [newsResult, setNewsResult] = useState()
  const [lodeMore, setLodeMore] = useState(10)

  const newsApi=async ()=>{
    try {
      const proxyUrl="https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apikey}&pageSize=${lodeMore}`);
      if (news.data && news.data.articles) {
        const filteredArticles = news.data.articles.filter(
          (article) => article.title !== '[Removed]'
        );
        setNewsArray(filteredArticles);
      } else {
        setNewsArray([]);
      }
      setNewsResult(news.data.totalResults)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
  newsApi();  // eslint-disable-next-line
  }, [category,lodeMore])
  
  return (
    <>
    <nav>
    <NavBarInshort setCategory={setCategory}></NavBarInshort>
    </nav>
    <NewsContent lodeMore={lodeMore} setLodeMore={setLodeMore} newsArray={newsArray} newsResult={newsResult}></NewsContent>
    <footer>
      <Footer></Footer>
    </footer>
    </>
  );
}

export default App;
