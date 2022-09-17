import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./myProjects.css";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetcData = async () => {
      const response = await axios.get(
        `https://localhost:7080/Project/GetProjects/`
      );

      setProjects(response.data);
    };
    fetcData();
  }, []);

  const handleSelectProject = (id) => {
    window.location.replace(`/myProjects/${id}`);
  };

  return (
    <>
      <h2>
        My Projects{" "}
        <Link className="btn btn-primary pull-right" to="/new-project">
          {" "}
          <i className="fa fa-plus"></i> New Project{" "}
        </Link>{" "}
      </h2>
      {projects.length > 0 && (
        <div className="table-responsive">
          <table id="tableProjects" className="table table-striped table-hover">
            <thead>
              <tr>
                <th>State</th>
                <th>Title</th>
                <th>Description</th>
                <th>Created</th>
                <th>Modified</th>
              </tr>
            </thead>
            <tbody>
              {projects?.map((project, index) => {
                return (
                  <tr
                    key={index}
                    className="project-row"
                    data-projectid={project.id}
                    onClick={(e) => handleSelectProject(project.id)}
                  >
                    <td>{project.state}</td>
                    <td>
                      {project.title.length < 30
                        ? project.title
                        : project.title.substring(0, 30) + "..."}
                    </td>
                    <td>
                      {" "}
                      {project.title.length < 100
                        ? project.title
                        : project.title.substring(0, 100) + "..."}
                    </td>
                    <td>{project.dateCreated}</td>
                    <td>{project.dateModified}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
  /*
  @section Scripts {
      <script type="text/javascript">
  
          var $this = this;
  
          //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          // jQuery
  
          $(document).ready(function () {
  
              $(".project-row").click(function () {
                  console.log($(this).data("projectid"));
                  window.location.href = '@Url.Content("~/Process/Project")?projectId=' + $(this).data("projectid");
              });
  
          });
  
      </script>
    */
};

export default MyProjects;
