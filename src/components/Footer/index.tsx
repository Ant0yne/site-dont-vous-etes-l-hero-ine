// cSpell: words soliveres

import AboutMeButton from "../AboutMeButton";

const RootFooter = () => {
	return (
		<footer className="text-center mt-auto flex flex-col">
			<AboutMeButton />
			<small>
				Copyright &copy; 2024 Antoine SOLIVERES - Tous droits réservés
			</small>
		</footer>
	);
};

export default RootFooter;
