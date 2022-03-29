import React, { useState, useEffect } from "react";
import LanguageMenu from "../../components/LanguageMenu/LanguageMenu";
import "./Technologies.css";
import LanguageDetail from "../../components/LanguageDetail/LanguageDetail";
import ItemTechnologies from "../../components/ItemTechnologies/ItemTechnologies";
export default function Technologies(props) {
  const [language, setLanguage] = useState();

  useEffect(() => {
    setLanguage({
      ...language,
      list : props.lang,
    });
  }, [props.lang]);
  return (
    <div className="page technologie">
        <div className="technologie_container">
            {language
                ? language.list.map((item, index) => <ItemTechnologies key={index} name={item.name} description={item.roadmap}></ItemTechnologies>)
                : null}
        </div>
    </div>
  );
}
