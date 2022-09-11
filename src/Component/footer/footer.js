const Footer = () => {
  const currentYear = () => {
    const date = new Date().toISOString();
    const d = date.split("T");
    const da = d[0].split("-");
    return da[0];
  };

  return (
    <div className="container body-content">
      <hr />
      <footer>
        <p>&copy; {currentYear()} AIAQUAMI Team</p>
      </footer>
    </div>
  );
};

export default Footer;
