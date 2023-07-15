import React, { useEffect } from "react";
import Loading from "react-fullscreen-loading";

function Loader() {
  useEffect(() => {
    document.querySelector(".loading-background").style.opacity = 0.7;
  }, []);

  return <Loading loading={true} background="#bec8c1" loaderColor="#3498db" />;
}

export default Loader;
