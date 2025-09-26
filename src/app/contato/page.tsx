import { MainImage } from "@/components/MainImage/MainImage";
import balanca from "../../assets/balanca.png";
import { Form } from "@/components/Form/Form";
import "./contato.css";
export default function Contato() {
  return (
    <>
      <MainImage img={balanca} alt="Contato" title="Contato" />
      <div className="form-container_contact">
        <Form />
      </div>
    </>
  );
}
