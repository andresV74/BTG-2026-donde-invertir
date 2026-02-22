import Ico1 from '@/assets/ico--keys.webp';
import Ico2 from '@/assets/ico--strategies.webp';
import Ico3 from '@/assets/ico--market.webp';

interface CardData {
	icon: ImageMetadata;
	title: string;
	description: string;
}

export const cardsData: CardData[] = [
	{
		icon: Ico1,
		title: 'Claves macro, tasas y mercados',
		description: 'En 2026, la volatilidad exigirá decisiones estratégicas, disciplina y diversificación ante un entorno macroeconómico más complejo.'
	},
	{
		icon: Ico2,
		title: 'Estrategia de inversión 2026: Una lectura al nuevo entorno global y local',
		description: 'ELa desaceleración global, la polarización política y el mayor riesgo fiscal están redefiniendo la forma de invertir hacia 2026.'
	},
	{
		icon: Ico3,
		title: 'El mercado de acciones: Escenarios y oportunidades',
		description: 'El mercado accionario colombiano entra en una nueva etapa tras un 2025 histórico, donde las elecciones y la selección sectorial marcarán el rumbo hacia 2026.'
	},
]