
import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from "../assets/3d/island.glb";

export function Island({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) {
  const islandRef = useRef();
  // Get access to the Three.js renderer and viewport
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  // Use a ref for the last mouse x position
  const lastX = useRef(0);
  // Use a ref for rotation speed
  const rotationSpeed = useRef(0);
  // Define a damping factor to control rotation damping
  const dampingFactor = 0.95;

  // Handle pointer (mouse or touch) down event
  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    // Calculate the clientX based on whether it's a touch event or a mouse event
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    // Store the current clientX position for reference
    lastX.current = clientX;
  };

  // Handle pointer (mouse or touch) up event
  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  // Handle pointer (mouse or touch) move event
  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      // If rotation is enabled, calculate the change in clientX position
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;

      // calculate the change in the horizontal position of the mouse cursor or touch input,
      // relative to the viewport's width
      const delta = (clientX - lastX.current) / viewport.width;

      // Update the island's rotation based on the mouse/touch movement
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;

      // Update the reference for the last clientX position
      lastX.current = clientX;

      // Update the rotation speed
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  // Handle keydown events
  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  // Handle keyup events
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  // Touch events for mobile devices
  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
  
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }
  
  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }
  
  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();
  
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
  
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  useEffect(() => {
    // Add event listeners for pointer and keyboard events
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);

    // Remove event listeners when component unmounts
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  // This function is called on each frame update
  useFrame(() => {
    // If not rotating, apply damping to slow down the rotation (smoothly)
    if (!isRotating) {
      // Apply damping factor
      rotationSpeed.current *= dampingFactor;

      // Stop rotation when speed is very small
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
    // {Island 3D model from: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907}
    <a.group ref={islandRef} {...props} dispose={null}>
      <group position={[-44.516, 45.46, 10.285]} rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, -34.814]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tower_base_wall_0.geometry}
            material={materials.wall}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.tower_base_planks_0.geometry}
            material={materials.planks}
          />
        </group>
      </group>
      <group position={[-22.341, 70.746, -26.347]} rotation={[0, 0.667, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.house_base_wall_0.geometry}
          material={materials.wall}
          position={[-4.244, 0, -22.805]}
        />
      </group>
      <group position={[-19.572, 3.067, 56.714]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.roof_roof_0.geometry}
          material={materials.roof}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.roof_wooden_skel_no_op_0.geometry}
          material={materials.wooden_skel_no_op}
        />
      </group>
      <group position={[-62.013, 69.642, 4.806]} rotation={[-2.987, -1.271, -2.962]} scale={0.557}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stone_details_wall_0.geometry}
          material={materials.wall}
          position={[0, 0, -9.758]}
        />
      </group>
      <group position={[-60.621, 71.68, -29.659]} rotation={[2.675, -0.9, 2.732]} scale={0.295}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wood_loose_planks_wooden_skel_no_op_0.geometry}
          material={materials.wooden_skel_no_op}
          position={[167.603, 70.907, -5.194]}
        />
      </group>
      <group position={[65.223, 90.387, -43.067]} rotation={[-1.861, 0.588, 1.284]} scale={0.611}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves_op_branches_0.geometry}
          material={materials.op_branches}
          position={[-2.491, -18.554, -1.982]}
        />
      </group>
      <group position={[45.452, 50.763, -23.448]} rotation={[2.684, 0.646, -2.739]} scale={0.233}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.grass_op_branches_0.geometry}
          material={materials.op_branches}
          position={[-0.562, 11.093, 0]}
        />
      </group>
      <group
        position={[36.662, 0.659, 17.226]}
        rotation={[0.107, 1.046, -0.139]}
        scale={[1.221, 1.208, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['rocks_Material_#413_0'].geometry}
          material={materials.Material_413}
          position={[-100.304, -21.28, -15.81]}
        />
      </group>
      <group position={[46.878, 46.628, 8.397]} rotation={[-0.002, 0.334, -0.09]} scale={0.799}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['ferns_Material_#650_0'].geometry}
          material={materials.Material_650}
          position={[-13.284, 9.049, 0]}
        />
      </group>
      <group position={[-8.336, 32.703, -8.657]} rotation={[-0.04, -0.953, -0.058]} scale={0.736}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wood_structure_wooden_skel_no_op_0.geometry}
          material={materials.wooden_skel_no_op}
          position={[77.142, -2.511, -9.584]}
        />
      </group>
      <group
        position={[15.005, 38.223, -26.353]}
        rotation={[-Math.PI / 2, 0, 1.904]}
        scale={[0.049, 0.049, 0.159]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['barrels_door_+_barrels_0'].geometry}
          material={materials.door__barrels}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.barrels_planks_0.geometry}
          material={materials.planks}
        />
      </group>
      <group
        position={[-1.063, 56.917, -47.881]}
        rotation={[0, -1.281, 0]}
        scale={[0.398, 0.155, 0.603]}>
        <group position={[77.142, -2.511, -9.584]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.windows_wooden_skel_no_op_0.geometry}
            material={materials.wooden_skel_no_op}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['windows_door_+_barrels_0'].geometry}
            material={materials.door__barrels}
          />
        </group>
      </group>
      <group position={[18.805, -42.02, 19.523]} rotation={[1.559, 0.008, -0.351]} scale={0.474}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wood_beams_wooden_skel_no_op_0.geometry}
          material={materials.wooden_skel_no_op}
          position={[-186.901, 79.687, -8.777]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.base_tower_wall_0.geometry}
        material={materials.wall}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tree_trunk_bark_0.geometry}
        material={materials.bark}
        position={[47.887, 83.803, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.grass_floor_grass_0.geometry}
        material={materials.grass}
        rotation={[-Math.PI / 2, 0, 1.328]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['door_door_+_barrels_0'].geometry}
        material={materials.door__barrels}
        position={[-11.427, 60.918, -3.194]}
        rotation={[0, 0.773, 0]}
        scale={[0.84, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['klimop_Material_#650_0'].geometry}
        material={materials.Material_650}
        position={[-54.458, 38.769, -13.438]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </a.group>
  );
}