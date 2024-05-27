import CharterSheet from "@/components/CharacterSheet";
import Modal from "@/components/Modal/Modal";

const ModalCharacter = async () => {
	return (
		<Modal>
			<p>c'est moi la modal</p>
			<CharterSheet />
		</Modal>
	);
};

export default ModalCharacter;
