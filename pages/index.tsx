import { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import { Canvas, useFrame, Vector3 } from '@react-three/fiber';

function setupThreeJS() {
	import('three').then(THREE => {
		const canvas = document.querySelector(
			'#bunnytest'
		) as HTMLCanvasElement;
		const renderer = new THREE.WebGLRenderer({ canvas });

		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 550;

		const scene = new THREE.Scene();
		const geometry = new THREE.BoxGeometry(1, 1, 1);
		const material = new THREE.MeshStandardMaterial({ color: 0x44aa88 });
		const cube = new THREE.Mesh(geometry, material);

		const color = 0xffffff;
		const intensity = 1;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(-1, 2, 4);

		import('three/examples/jsm/loaders/GLTFLoader').then(GLTF => {
			new GLTF.GLTFLoader().load(
				'/models/bunny.gltf',
				model => {
					scene.add(model.scene);
					console.log(model.cameras);
					renderer.render(scene, model.cameras[0]);
				},
				undefined,
				error => console.log(error)
			);
		});

		scene.add(light);
		// renderer.render(scene, camera);

		function render() {
			requestAnimationFrame(render);
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			// renderer.render(scene, camera);
		}
		render();
	});
}

function Box(props: { position?: Vector3 | undefined }) {
	// This reference will give us direct access to the mesh
	const mesh = useRef();
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	// Rotate mesh every frame, this is outside of React without overhead
	useFrame(() => (mesh.current.rotation.x += 0.01));

	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
		>
			<boxGeometry args={[1, 2, 3]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	);
}

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Coming Soon!</title>
				<meta
					name='description'
					content='Website for the Now Live chrome extension'
				/>
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>

			<main className={styles.main}>
				<Canvas>
					<ambientLight />
					<pointLight position={[10, 10, 10]} />
					<Box position={[-1.2, 0, 0]} />
					<Box position={[1.2, 0, 0]} />
				</Canvas>
			</main>

			<footer className={styles.footer}>
				<Image
					src='/models/icon/iconRender.png'
					height='20em'
					width='20em'
					alt='Now Live Icon'
				/>
				<p>
					Developed by{' '}
					<a
						href='https://github.com/jamesinaxx'
						className={styles.userLink}
					>
						jamesinaxx
					</a>
				</p>
			</footer>
		</div>
	);
}
