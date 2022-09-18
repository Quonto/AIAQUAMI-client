import { Link, useParams } from "react-router-dom";

import "./newProject.css";
import "../../Scripts/dropzone/dropzone.css";
import "../../Scripts/dropzone/basic.css";

import { useGlobalContext } from "../../Context/Context";
import { useState, useEffect } from "react";
import axios from "axios";

const NewProject = () => {
  const { id } = useParams();
  const { user } = useGlobalContext();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [project, setProject] = useState({
    id: 0,
    userId: user.id,
    state: 1,
    title: "",
    description: "",
    percenteComplite: "",
  });

  const [projectImages] = useState([
    {
      id: 0,
      state: 1,
      size: 0,
      name: "",
      class1: "",
      classProbability1: "",
      class2: "",
      classProbability2: "",
      class3: "",
      classProbability3: "",
      class4: "",
      classProbability4: "",
      class5: "",
      classProbability5: "",
    },
  ]);

  useEffect(() => {
    if (id > 0) {
      const fetchProduct = async () => {
        const response = await axios.get(
          `https://localhost:7080/Project/GetProject/${id}`
        );
        setProject(response.data);
      };
      fetchProduct();
    }
  }, [id]);

  /*
  useEffect(() => {
    const Dropzone = document.createElement("script");
    Dropzone.src = "../../Scripts/dropzone/dropzone.js";
    //http://localhost:3000/Scripts/dropzone/dropzone.js

    Dropzone.async = true;
    document.body.appendChild(Dropzone);
    return () => {
      document.body.removeChild(Dropzone);
    };
  }, []);*/

  const saveFile = async (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    if (project.id === 0) {
      const response = await axios.post(
        `https://localhost:7080/Project/CreateProject/`,
        project
      );
      setProject(response.data);
    }
  };

  const uploadFile = async (e) => {
    const formData = new FormData();

    formData.append("projectId", project.id);
    formData.append("formFile", file);
    formData.append("fileName", fileName);

    try {
      const response = await axios.post(
        `https://localhost:7080/api/file/FileUpload/`,
        formData
      );
      console.log(response);
    } catch (ex) {
      console.log(ex);
    }
  };

  const handleDelete = async () => {
    axios.delete(`https://localhost:7080/Project/DeleteProject/${id}`);
    window.location.replace("/myProjects");
  };

  const handleEdit = async (id) => {
    axios.put(`https://localhost:7080/Project/UpdateProjectState/${id}`);
    window.location.replace(`/myProjects/${id}`);
  };

  const handleChangeTitle = async (title) => {
    if (project.id === 0) {
      const newProject = { ...project, title };

      const response = await axios.post(
        `https://localhost:7080/Project/CreateProject/`,
        newProject
      );

      setProject(response.data);
    } else {
      const newProject = { ...project, title };

      const response = await axios.put(
        `https://localhost:7080/Project/UpdateProject/`,
        newProject
      );

      setProject(response.data);
    }

    /*
    if (
      title.length === 0 &&
      project.description === "" &&
      projectImages[0].id === 0
    ) {
      axios.delete(
        `https://localhost:7080/Project/DeleteProject/${project.id}`
      );

      setProject({
        id: 0,
        userId: user.id,
        state: 1,
        title: "",
        description: "",
        percenteComplite: "",
      });
    }*/
  };

  const handleChangeDescription = async (description) => {
    if (project.id === 0) {
      const newProject = { ...project, description };
      const response = await axios.post(
        `https://localhost:7080/Project/CreateProject/`,
        newProject
      );
      setProject(response.data);
    } else {
      const newProject = { ...project, description };
      const response = await axios.put(
        `https://localhost:7080/Project/UpdateProject/`,
        newProject
      );
      setProject(response.data);
    }
    /*
    if (
      description.length === 0 &&
      project.title === "" &&
      projectImages[0].id === 0
    ) {
      axios.delete(
        `https://localhost:7080/Project/DeleteProject/${project.id}`
      );

      setProject({
        id: 0,
        userId: user.id,
        state: 1,
        title: "",
        description: "",
        percenteComplite: "",
      });
      
    }*/
  };

  return (
    <>
      <h2>
        Setup project{" "}
        <Link className="btn btn-default pull-right" to={"/myProjects"}>
          <i className="fa fa-times"></i> Close
        </Link>
      </h2>

      <div className="row">
        <div className="form-horizontal col-sm-12">
          <div className="form-group">
            <label className="col-sm-2 control-label" htmlFor="projectTitle">
              Title:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="projectTitle"
                defaultValue={project.title}
                onInput={(e) => handleChangeTitle(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label
              className="col-sm-2 control-label"
              htmlFor="projectDescription"
            >
              Description:
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id={project.description}
                defaultValue={project.description}
                onInput={(e) => handleChangeDescription(e.target.value)}
              />
            </div>
          </div>

          {(() => {
            if (project.state !== 2) {
              // Processing
              return (
                <div className="form-group">
                  <div className="col-xs-6 col-sm-offset-2 col-sm-5">
                    {(() => {
                      if (project.state <= 1) {
                        return (
                          <button
                            id="projectProcess"
                            type="button"
                            className="btn btn-primary btn-block"
                          >
                            <i className="fa fa-gear"></i> Process
                          </button>
                        );
                      } else {
                        return (
                          <button
                            id="projectEdit"
                            type="button"
                            className="btn btn-primary btn-block"
                            onClick={(e) => handleEdit(project.id)}
                          >
                            <i className="fa fa-pencil"></i> Edit
                          </button>
                        );
                      }
                    })()}
                  </div>
                  <div className="col-xs-6 col-sm-5">
                    <button
                      id="projectDelete"
                      type="button"
                      className="btn btn-danger btn-block"
                      onClick={(e) => handleDelete(project.id)}
                    >
                      <i className="fa fa-trash"></i> Delete
                    </button>
                  </div>
                </div>
              );
            }
          })()}
        </div>
      </div>

      {(() => {
        if (project.state <= 1) {
          // Setup project
          return (
            <div className="row">
              <div className="col-sm-12">
                <input type="hidden" name="projectId" value={project.id} />
                <div className="fallback">
                  <input type="file" onChange={saveFile} />
                  <input type="button" value="Upload" onClick={uploadFile} />
                </div>
                {projectImages.map((image, index) => {})}
              </div>
            </div>
          );
        } else if (project.state === 2) {
          // Project is processing
          return (
            <div className="row">
              <div className="col-sm-12">
                <div className="text-center">
                  Please wait while project processing finishes...
                </div>
                <div className="progress">
                  <div
                    id="projectProgressBar"
                    className="progress-bar progress-bar-striped active"
                    role="progressbar"
                    aria-valuenow={project.percenteComplite}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: project.percenteComplite + "%" }}
                  ></div>
                </div>
              </div>
            </div>
          );
        } else if (project.state === 3) {
          // View processed project

          return projectImages?.map((image, index) => {
            return (
              <div className="row" key={index}>
                <div
                  className="col-sm-6"
                  data-imageid={image.id}
                  style={{ paddingBottom: "15px" }}
                >
                  <img
                    style={{ margin: "auto" }}
                    className="img-responsive img-rounded"
                    alt={image.name}
                    src=""
                  />
                </div>
                <div className="col-sm-6">
                  <div className="alert alert-info">
                    <strong>{image.name}</strong>
                  </div>
                  <div className="well">
                    <div>
                      {image.class1}
                      <span className="pull-right">
                        {image.classProbability1}%
                      </span>
                    </div>
                    <div className="progress progress-probability">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={image.classProbability1}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${image.classProbability1}%` }}
                      ></div>
                    </div>
                    <div>
                      {image.class2}
                      <span className="pull-right">
                        {image.classProbability2}%
                      </span>
                    </div>
                    <div className="progress progress-probability">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={image.classProbability2}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${image.classProbability2}%` }}
                      ></div>
                    </div>
                    <div>
                      {image.class3}
                      <span className="pull-right">
                        {image.classProbability3}%
                      </span>
                    </div>
                    <div className="progress progress-probability">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={image.classProbability3}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${image.classProbability3}%` }}
                      ></div>
                    </div>
                    <div>
                      {image.class4}
                      <span className="pull-right">
                        {image.classProbability4}%
                      </span>
                    </div>
                    <div className="progress progress-probability">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={image.classProbability4}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${image.classProbability4}%` }}
                      ></div>
                    </div>
                    <div>
                      {image.class5}
                      <span className="pull-right">
                        {image.classProbability5}%
                      </span>
                    </div>
                    <div className="progress progress-probability">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow={image.classProbability5}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${image.classProbability5}%` }}
                      ></div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            );
          });
        }
      })()}
    </>
  );
};

export default NewProject;
