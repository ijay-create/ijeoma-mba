import { useParams } from "react-router-dom";

const CaseStudy = () => {

  const { id } = useParams();

  return (

    <div className="case-study">

      <h1>
        Case Study {id}
      </h1>

    </div>

  );
};

export default CaseStudy;