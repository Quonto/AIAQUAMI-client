import { useGlobalContext } from "../../Context/Context";

const MyProjects = () => {
  const { user } = useGlobalContext();

  return (
    <>
      {user === null ? (
        <>{window.location.replace("/login")}Login</>
      ) : (
        <div className="container body-content">
          <h2>MY Project</h2>
        </div>
      )}
    </>
  );
};

export default MyProjects;
