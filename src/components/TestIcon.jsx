import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const TestIcon = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faEnvelope} className="text-blue-500  size='2x'" />
      <p>This is a test for fontawesome icon</p>
    </div>
  );
};

export default TestIcon;
