import { log } from "console";
import styles from "../styles.module.css";
import React,{useState, useEffect} from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSeacrTerm] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('https://efbdpjvnpulvomzjmpfz.supabase.co/functions/v1/rest-interview');
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    }
    catch(error) {
      console.error('Error fetching data ',error);
    }
  };

  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <div className={styles.hello}>
      <p>Find Location</p>
      <input 
      type="text" 
      placeholder="Enter Location Name"
      value={searchTerm}
      onChange={(e)=>setSeacrTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Is Permanent</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  );
};

export default Home;
