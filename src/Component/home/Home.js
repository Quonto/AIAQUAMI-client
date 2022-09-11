import picture from "../../Content/img/logos/AIAQUAMI.png";
import logo from "../../Content/img/logos/fzn-logo-primary-dark-EN.png";
import PMFlogo from "../../Content/img/logos/PMF_Nis.png";
import ELFAKlogo from "../../Content/img/logos/Elfak.png";
import PMFKGlogo from "../../Content/img/logos/PMF_Kragujevac.png";
import BFBGlogo from "../../Content/img/logos/BF_BG.png";
import DJMteam from "../../Content/img/team/Djuradj_Milosevic.jpg";
import AMteam from "../../Content/img/team/Aleksandar_Milosavljevic.jpg";
import BPteam from "../../Content/img/team/Bratislav_Predic.jpg";
import MRteam from "../../Content/img/team/Milena_Radenkovic.jpg";
import KSteam from "../../Content/img/team/Katarina_Stojanovic.jpg";
import DSZteam from "../../Content/img/team/Dimitrija_Savic_Zdravkovic.jpg";
import PSteam from "../../Content/img/team/Predrag_Simovic.jpg";
import "./home.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="container body-content">
      <div className="jumbotron">
        <div className="row team-member">
          <div className="col-sm-4 col-md-3 col-lg-2 visible-sm visible-md visible-lg">
            <img
              src={picture}
              className="img-circle img-responsive"
              alt="AIAQUAMI"
            />
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <h1>AIAQUAMI</h1>
            <p className="lead">
              Application of deep learning in bioassessment of aquatic
              ecosystems: toward the construction of automatic identifier of
              aquatic macroinvertebrates
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>About the project</h2>
          <p>
            Biodiversity loss and degradation of aquatic ecosystems have been
            accelerating worldwide over the last decades. To halt or even revert
            this process is of pivotal importance for sustainable development. A
            cost-effective biomonitoring system is a basis for any conservation
            management, through which comprehensive taxa lists, ideally at high
            taxonomic resolution (i.e., species level), are provided. The
            identification of biotic material as the first step in this process
            is hindered when the traditional morphology-based approach is
            applied. This is especially true for „dark taxa“, such as non-biting
            midges (Chironomidae, Diptera), a group of species which is
            ecologically abundant and important, yet their identification is
            difficult, time-consuming, and requires high expertise. Having all
            this in mind, this project is combining morphology-, DNA- and deep
            learning-based approaches simultaneously on aquatic
            macroinvertebrate samples in order to build a new application for
            artificial intelligence-based identification of species. This will
            be one of the first implementations of artificial intelligence and
            deep learning method in the biomonitoring world. To realize the main
            objective of the project, two hundred macroinvertebrate species,
            encompassing chironomids and EPT group, from the South Morava river
            basin and Danube, morphologically identified and validated by DNA
            taxonomy, will be used for the construction of the deep learning
            model. The main project deliverable will be the web-based and
            standalone applications suitable to end-users that employ the
            obtained deep learning model. The results of the proposed project
            will facilitate the identification process of macroinvertebrates, as
            a key group for aquatic ecosystem monitoring, via machine learning
            and enable their cost-effective implementation in routine
            bioassessment programs.
          </p>

          <h2>Funded by</h2>
          <a
            href="http://fondzanauku.gov.rs/?lang=en"
            target="_blank"
            className="team-member-link"
          >
            <div className="row team-member">
              <div className="col-xs-12">
                <img
                  src={logo}
                  className="img-responsive"
                  alt="Science Fund of the Republic of Serbia"
                />
              </div>
            </div>
          </a>

          <h2>Participating institutions</h2>
          <a
            href="https://www.pmf.ni.ac.rs/"
            target="_blank"
            className="team-member-link"
          >
            <div className="row team-member">
              <div className="col-xs-4">
                <img
                  src={PMFlogo}
                  className="img-responsive"
                  alt="University of Niš, Faculty of Sciences and Mathematics"
                />
              </div>
              <div className="col-xs-8">
                <h4>University of Niš</h4>
                <h4>Faculty of Sciences and Mathematics</h4>
              </div>
            </div>
          </a>
          <a
            href="https://www.elfak.ni.ac.rs/en/"
            target="_blank"
            className="team-member-link"
          >
            <div className="row team-member">
              <div className="col-xs-4">
                <img
                  src={ELFAKlogo}
                  className="img-responsive"
                  alt="University of Niš, Faculty of Electronic Engineering"
                />
              </div>
              <div className="col-xs-8">
                <h4>University of Niš</h4>
                <h4>Faculty of Electronic Engineering</h4>
              </div>
            </div>
          </a>
          <a
            href="https://www.pmf.kg.ac.rs/?lang=eng"
            target="_blank"
            className="team-member-link"
          >
            <div className="row team-member">
              <div className="col-xs-4">
                <img
                  src={PMFKGlogo}
                  className="img-responsive"
                  alt="University of Kragujevac, Faculty of Science"
                />
              </div>
              <div className="col-xs-8">
                <h4>University of Kragujevac</h4>
                <h4>Faculty of Science</h4>
              </div>
            </div>
          </a>
          <a
            href="https://www.bio.bg.ac.rs/"
            target="_blank"
            className="team-member-link"
          >
            <div className="row team-member">
              <div className="col-xs-4">
                <img
                  src={BFBGlogo}
                  className="img-responsive"
                  alt="University of Belgrade, Faculty of Biology"
                />
              </div>
              <div className="col-xs-8">
                <h4>University of Belgrade</h4>
                <h4>Faculty of Biology</h4>
              </div>
            </div>
          </a>

          <h2>Team</h2>
          <a
            href="https://www.pmf.ni.ac.rs/nastavnici-i-saradnici/?idz=276"
            target="_blank"
            className="team-member-link"
          >
            <div className="row team-member">
              <div className="col-xs-4">
                <img
                  src={DJMteam}
                  className="img-circle img-thumbnail img-responsive"
                  alt="Djuradj Milošević"
                />
              </div>
              <div className="col-xs-8">
                <h4>
                  Djuradj Milošević
                  <br />
                  <small>Principal Investigator</small>
                </h4>
                <p>
                  University of Niš
                  <br />
                  Faculty of Sciences and Mathematics
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/aleksandarmilosavljevic/"
            target="_blank"
            className="team-member-link"
          >
            <div className="row team-member">
              <div className="col-xs-4">
                <img
                  src={AMteam}
                  className="img-circle img-thumbnail img-responsive"
                  alt="Aleksandar Milosavljević"
                />
              </div>
              <div className="col-xs-8">
                <h4>Aleksandar Milosavljević</h4>
                <p>
                  University of Niš
                  <br />
                  Faculty of Electronic Engineering
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/bratislav-predi%C4%87-531ab52b/"
            target="_blank"
            className="team-member-link"
          >
            <div className="row team-member">
              <div className="col-xs-4">
                <img
                  src={BPteam}
                  className="img-circle img-thumbnail img-responsive"
                  alt="Bratislav Predić"
                />
              </div>
              <div className="col-xs-8">
                <h4>Bratislav Predić</h4>
                <p>
                  University of Niš
                  <br />
                  Faculty of Electronic Engineering
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.pmf.kg.ac.rs/?id=274"
            target="_blank"
            className="team-member-link"
          >
            <div className="row team-member">
              <div className="col-xs-4">
                <img
                  src={MRteam}
                  className="img-circle img-thumbnail img-responsive"
                  alt="Milena Radenković"
                />
              </div>
              <div className="col-xs-8">
                <h4>Milena Radenković</h4>
                <p>
                  University of Kragujevac
                  <br />
                  Faculty of Sciences and Mathematics
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/katarina-stojanovi%C4%87-9854a121/"
            target="_blank"
            className="team-member-link"
          >
            <div className="row team-member">
              <div className="col-xs-4">
                <img
                  src={KSteam}
                  className="img-circle img-thumbnail img-responsive"
                  alt="Katarina Stojanović"
                />
              </div>
              <div className="col-xs-8">
                <h4>Katarina Stojanović</h4>
                <p>
                  University of Belgrade
                  <br />
                  Faculty of Biology
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/thedimitrija/"
            target="_blank"
            className="team-member-link"
          >
            <div className="row team-member">
              <div className="col-xs-4">
                <img
                  src={DSZteam}
                  className="img-circle img-thumbnail img-responsive"
                  alt="Dimitrija Savić-Zdravković"
                />
              </div>
              <div className="col-xs-8">
                <h4>Dimitrija Savić-Zdravković</h4>
                <p>
                  University of Niš
                  <br />
                  Faculty of Sciences and Mathematics
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://www.researchgate.net/profile/Predrag-Simovic"
            target="_blank"
            className="team-member-link"
          >
            <div className="row team-member">
              <div className="col-xs-4">
                <img
                  src={PSteam}
                  className="img-circle img-thumbnail img-responsive"
                  alt="Predrag Simović"
                />
              </div>
              <div className="col-xs-8">
                <h4>Predrag Simović</h4>
                <p>
                  University of Kragujevac
                  <br />
                  Faculty of Sciences and Mathematics
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="col-md-6">
          <a
            className="twitter-timeline"
            href="https://twitter.com/AIAQUAMI?ref_src=twsrc%5Etfw"
          >
            Tweets by AIAQUAMI
          </a>
          <Helmet>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
          </Helmet>
        </div>
      </div>
    </div>
  );
};

export default Home;
