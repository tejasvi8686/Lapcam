// eslint-disable-next-line no-unused-vars
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';


function App() {

  const response = [
    {
      itemName: "Nirma",
      itemdate: "20",
      itemMonth: "june",
      itemYear: "1998",
    },

    {
      itemName: "Nirma2",
      itemdate: "202",
      itemMonth: "june2",
      itemYear: "19982",
    },

    {
      itemName: "Nirma3",
      itemdate: "203",
      itemMonth: "june3",
      itemYear: "19983",
    }
  ];
  return (
    <div>

    <Card><Item name={response[0].itemName}> Hello jee mai apki first iteam</Item>
   <ItemDate  day={response[0].itemdate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

   <Item name={response[1].itemName}></Item>
   <ItemDate day={response[1].itemdate} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>

   <Item  name={response[2].itemName} ></Item>
   <ItemDate day={response[2].itemdate} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate></Card>

  
   

   <div className='App'>Hello jee</div>
    
   </div>
  );
}

export default App;
