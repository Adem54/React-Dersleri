import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {NavLink as Link} from "react-router-dom";
function YaziListesi() {
  const [yazilistesi, setYazilistesi] = useState([]);
  useEffect(() => {
    axios
      .get("https://react-yazi-yorum.herokuapp.com/posts")
      .then((response) => {
        setYazilistesi(response.data);
      });
  }, []);
  return (
    <div className="ui relaxed divided list">
      {yazilistesi.map((yazi) => {
        return (
          <div className="item" key={yazi.id}>
            <i className="large github middle aligned icon"></i>
            <div className="content">
              <Link to={`/posts/${yazi.id}`} className="header">{yazi.title}</Link>  
              <div className="description">{yazi.created_at}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default YaziListesi;
