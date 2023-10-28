import {Composition} from 'remotion';
import {Title} from './Title';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="sampletext"
				component={Title}
				durationInFrames={3600}
				fps={60}
				width={1280}
				height={720}
			/>
		</>
	);
};
