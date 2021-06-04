import React from "react";
import { Navbar } from "./Navbar.js";
import Jumbotron from "./Jumbotron.js";
import Card from "./Card.js";

function Home() {
	return (
		<div className="container-fluid">
			<Navbar />
			<Jumbotron
				title="Iniciacion Mundo Warhammer"
				text="El Mundo de Warhammer es el planeta donde se desarrolla todos los acontecimientos de Warhammer Fantasy. Forma parte de un sistema estelar compuesto por 10 planetas que orbitan alrededor de una estrella."
			/>
			<div className="row">
				<Card
					title="Empire"
					src="https://2.bp.blogspot.com/-IVjrp3NqTpw/V3xNygVi-5I/AAAAAAAALhQ/AGdT68RlPlsc43teTqUlptEYf04UDKTaACKgB/s320/hqdefault.jpg"
					text="Desde los tiempos de Sigmar, el Imperio ha mantenido ejércitos profesionales para defender sus tierras. Las partidas de reclutamiento viajan por las provincias haciendo sonar sus tambores y prometiendo una vida llena de aventuras y gloria para todos aquellos que se unan a los ejércitos del Emperador."
					url="https://warhammerfantasy.fandom.com/es/wiki/Categor%C3%ADa:Imperio"
				/>
				<Card
					title="Dwarfs"
					src="https://2.bp.blogspot.com/-GeAlN3IdE54/WItK_4kML9I/AAAAAAAADn8/uOYQPH874-QBdvrWrZLO8ZQqNLxJUZ9UACLcB/s1600/Dwarfs.jpg"
					text="Los Enanos son una de las razas más antiguas del Mundo de Warhammer. Las Montañas del Fin del Mundo, la vasta y adusta cadena montañosa que da forma a la frontera Este del Viejo Mundo, ha sido su hogar desde el principio de los tiempos. En el pasado, fue aquí donde los Enanos construyeron sus gigantescas fortalezas subterráneas; entre altas montañas e interminables abismos."
					url="https://warhammerfantasy.fandom.com/es/wiki/Categor%C3%ADa:Enanos"
				/>
				<Card
					title="Elven"
					src="https://i.pinimg.com/564x/a1/d7/ff/a1d7ff37494e8655d02ce2f72469e179.jpg"
					text="Los orígenes de los Altos Elfos se remontan a los del propio mundo, cuando surgieron en la paradisíaca isla-continente de Ulthuan. Considerados una de las más antiguas y grandes de todas las razas civilizadas, los Altos Elfos son gráciles y nobles donde la mayoría de mortales son torpes y primitivos."
					url="https://warhammerfantasy.fandom.com/es/wiki/Categor%C3%ADa:Altos_Elfos"
				/>
				<Card
					title="Bretonian"
					src="https://i.pinimg.com/474x/80/7f/a7/807fa737df14007890d2f4002c78e6e5--writing-fantasy-fantasy-warrior.jpg"
					text="Bretonia es uno de los grandes reinos del Viejo Mundo, casi rivalizando con el Imperio tanto en tamaño, como en riqueza y poder. Se extiende desde las Montañas Grises en el este, hasta el Gran Océano Occidental. Al sur limita con Estalia y Tilea y al norte con el tormentoso Mar de las Garras que azota su rocosa costa."
					url="https://warhammerfantasy.fandom.com/es/wiki/Categor%C3%ADa:Bretonia"
				/>
			</div>
		</div>
	);
}
export default Home;
