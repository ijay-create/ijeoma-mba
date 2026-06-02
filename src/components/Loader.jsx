import "../styles/loader.css";

const Loader = () => {
  return (
    <div className="loader">

      {/* ENERGY FIELD */}
      <div className="energy-field"></div>

      {/* PORTAL CORE */}
      <div className="portal">

        <div className="portal-glow"></div>

        <div className="core"></div>

        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>

      </div>

      {/* TEXT */}
      <div className="loader-text">
        <h1>
          Dev<span>Designer</span>
        </h1>
        <p>Booting creative system...</p>
      </div>

    </div>
  );
};

export default Loader;