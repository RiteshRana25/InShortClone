import './App.css';
import { useState ,useEffect} from 'react';
import NavBarInshort from './component/NavBarInshort/NavBarInshort';
import axios from "axios";
import NewsContent from './component/newsContent/newsContent';
import Footer from './component/footer/footer';
import apikey from './Data/config';

function App() {
  const [category, setCategory] = useState(["general"])
  const [newsArray, setNewsArray] = useState([])
  const [newsResult, setNewsResult] = useState()
  const [lodeMore, setLodeMore] = useState(10)

  const newsApi=async ()=>{
    try {
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
  }, [newsArray,newsResult,lodeMore])
  
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
