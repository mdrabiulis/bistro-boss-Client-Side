import { useEffect, useState } from "react";

const useOurMenu = () => {
  const [ourPurpleMenu, setOurPurpleMenu] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        setOurPurpleMenu(data);
        setLoading(false)
      });
  }, []);
  return {ourPurpleMenu,loading};
};

export default useOurMenu;
