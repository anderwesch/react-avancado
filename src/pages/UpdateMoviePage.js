import { useParams } from "react-router-dom";

export default function UpdateMoviePage() {
  const { id, slug } = useParams();

  return (
    <div>
      { id } { slug }
    </div>
  );
}