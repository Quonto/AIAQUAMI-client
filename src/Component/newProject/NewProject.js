import { Link, useParams } from "react-router-dom";
import "./newProject.css";
import "../../Scripts/dropzone/dropzone.css";
import "../../Scripts/dropzone/basic.css";
import { useState, useEffect } from "react";
import axios from "axios";

const NewProject = () => {
  const { id } = useParams();

  const [project, setProject] = useState({
    id: 0,
    state: 1,
    title: "",
    description: "",
    percenteComplite: "",
  });

  const [projectImages, setProjectsImages] = useState([
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
    const fetchProduct = async () => {
      const response = await axios.get(
        `https://localhost:7080/Project/GetProject/${id}`
      );

      setProject(response.data);
    };
    fetchProduct();
  }, []);

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
                className="htmlForm-control"
                id="projectTitle"
                value={project.title}
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
                <form
                  action="FileUpload"
                  method="post"
                  encType="multipart/form-data"
                  className="dropzone"
                  id="dropzoneProjectImage"
                >
                  <div className="dz-default dz-message">
                    <button className="dz-button" type="button">
                      Drop files here to upload
                    </button>
                  </div>
                </form>
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
