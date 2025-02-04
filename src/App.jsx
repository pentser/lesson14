import Greeting from "./components/Greeting";
import Product from "./components/Product";
import ProductList from './components/ProductList';
import "./App.css";
import Button from "./components/Button";
import UserProfile from "./components/UserProfile";
import img1 from "./assets/images/img1.jpeg";
import img2 from "./assets/images/img2.jpg";
import Notification from "./components/Notification/Notification";
import Card from "./components/Card/Card";


function App() {
 
  const card= [
    {
    title: "apple",
    content: "lorem ipsum lorem dd lorem"
  },
    {
    title: "banana",
    content: "lorem ipsum lorem dd lorem fdfdf"
  },
]

  return (
    <>
    <Greeting name="eli"></Greeting>
    <Greeting name="jane"></Greeting>
    <Product name="apple" price="5"></Product>
    <ProductList></ProductList> 
    <Button label="click me"></Button>
    <UserProfile name="john" img={img1}></UserProfile>
    <UserProfile name="dow" img={img2}></UserProfile>
    <Notification type="error" message="This is an error message"></Notification>
    <Notification type="seccsess" message="This is An seccess message"></Notification>
    <Card title={card[0].title} content={card[0].content}></Card>
    <Card title={card[1].title} content={card[1].content}></Card>
  
    </>
  )
}

export default App
