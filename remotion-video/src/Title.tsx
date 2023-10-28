import {useCurrentFrame, useVideoConfig ,Video} from 'remotion';
import audio  from './audio.mp3';
export const Title: React.FC = () => {
	const frame = useCurrentFrame();
	const {durationInFrames, width} = useVideoConfig();

	const textToFillWidth = 'Keshana';
	const fontSize = 1;

	const repetitions = Math.ceil(width / (textToFillWidth.length * fontSize));

	let repeatedText = textToFillWidth.repeat(repetitions);

	const predefinedColors: string[] = [
		'#d3224b',
		'#ba9db8',
		'#d37c1f',
		'#9ebdb0',
		'#ba9c9c',
		'#bb9eb8',
		'#bcbe9f',
		'#b7797a',
		'#7da4bb',
		'#af7cb9',
		'#c54a4d',
		'#528dd7',
		'#5ccf7b',
		'#cbaa64',
		'#985dc5',
		'#5ed2a4',
		'#df892f',
		'#38bad3',
	];

	const repeatedDivs = Array(predefinedColors.length)
		.fill(0)
		.map((_, index) => {
			const animationProgress =
				(frame / durationInFrames) *
				100 *
				(index === 0
					? 0.02
					: index === 1
					? 0.3
					: index === 2
					? 0.8
					: index === 3
					? 0.06
					: index === 4
					? 0.3
					: index === 5
					? 0.4
					: index === 6
					? 0.18
					: index === 7
					? 0.09
					: index === 8
					? 0.05
					: index === 9
					? 0.27
					: index === 10
					? 0.36
					: index === 11
					? 0.19
					: index === 12
					? 0.19
					: index === 13
					? 0.1
					: index === 14
					? 0.1
					: index === 15
					? 0.3
					: index === 16
					? 0.6
					: 0.8);

			return (
				<div
					key={index}
					style={{
						fontSize: 44,
						color: predefinedColors[index],
						fontFamily: 'monospace',
						whiteSpace: 'nowrap',
						lineHeight: 0.9,
					  
						transform:
							index % 2 === 0
								? `translateX(${-animationProgress * 0.1 * width}px)`
								: `translateX(${animationProgress * 0.1 * width}px)`,
					}}
				>
					{repeatedText}
				</div>
			);
		});

	return (
		<div
			style={{
				backgroundColor: 'black',
				overflow: 'hidden',
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			{repeatedDivs}
			<Video src={audio} />
		</div>
	);
};
