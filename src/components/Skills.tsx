import {
  faBootstrap,
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";

const iconMap: Record<string, IconDefinition> = {
  faHtml5: faHtml5,
  faCss3: faCss3,
  faJs: faJs,
  faReact: faReact,
  faBootstrap: faBootstrap,
  faNodeJs: faNodeJs,
  faGit: faGit,
  faGithub: faGithub,
};

interface SkillsProps {
  data: {
    icon: string;
    name: string;
    text: string;
    color: string;
  }[];
}
const Skills = (props: SkillsProps) => {
  return (
    <div id="skills" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
          <p>Here are some of the skills used for this site.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3">
                  {" "}
                  <FontAwesomeIcon
                    icon={iconMap[d.icon]}
                    size="5x"
                    color={d.color}
                  />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};

export default Skills;
