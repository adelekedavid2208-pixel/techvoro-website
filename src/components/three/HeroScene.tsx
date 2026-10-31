
"use client";

import { Suspense, useMemo } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  Bounds,
  ContactShadows,
  Float,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";

function createNovaTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 2048;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Could not create NOVA screen texture.");
  }

  // Background
  const background = ctx.createLinearGradient(0, 0, 1024, 2048);
  background.addColorStop(0, "#101D35");
  background.addColorStop(1, "#080D19");

  ctx.fillStyle = background;
  ctx.fillRect(0, 0, 1024, 2048);

  const roundedRect = (
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ) => {
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, radius);
  };

  const text = (
    value: string,
    x: number,
    y: number,
    size: number,
    color: string,
    weight = "400"
  ) => {
    ctx.font = `${weight} ${size}px Arial`;
    ctx.fillStyle = color;
    ctx.fillText(value, x, y);
  };

  // Status bar
  text("9:41", 68, 92, 32, "#FFFFFF", "600");
  text("●  ●  ▰", 800, 92, 27, "#FFFFFF", "600");

  // Brand
  text("N", 68, 210, 65, "#55A0FF", "700");
  text("NOVA", 130, 205, 42, "#FFFFFF", "700");
  text("YOUR BUSINESS, IN FOCUS", 132, 247, 17, "#8FA3C4", "600");

  // Avatar
  const avatarGradient = ctx.createLinearGradient(850, 145, 950, 245);
  avatarGradient.addColorStop(0, "#477BFF");
  avatarGradient.addColorStop(1, "#39D5E8");

  ctx.fillStyle = avatarGradient;
  ctx.beginPath();
  ctx.arc(900, 195, 48, 0, Math.PI * 2);
  ctx.fill();

  text("JD", 873, 207, 30, "#FFFFFF", "700");

  // Greeting
  text("Good morning,", 68, 365, 38, "#A6B0C2");
  text("James Davidson", 68, 425, 57, "#FFFFFF", "700");
  text("Here's your business overview.", 68, 480, 26, "#8FA3C4");

  // Revenue card
  const cardGradient = ctx.createLinearGradient(68, 535, 950, 920);
  cardGradient.addColorStop(0, "#1C3D72");
  cardGradient.addColorStop(1, "#142744");

  roundedRect(48, 535, 928, 390, 38);
  ctx.fillStyle = cardGradient;
  ctx.fill();

  text("TOTAL REVENUE", 95, 620, 25, "#B7C9E8", "600");
  text("$48,295.00", 95, 720, 76, "#FFFFFF", "700");

  // Growth indicator
  roundedRect(95, 770, 190, 65, 28);
  ctx.fillStyle = "rgba(57,213,232,0.16)";
  ctx.fill();

  text("↗  12.8%", 120, 813, 29, "#54E5C1", "700");
  text("vs. last month", 310, 813, 25, "#B7C9E8");

  // Revenue chart
  const chartPoints = [
    [95, 875],
    [210, 850],
    [325, 865],
    [440, 820],
    [555, 840],
    [670, 785],
    [785, 800],
    [920, 750],
  ];

  const chartGradient = ctx.createLinearGradient(0, 750, 0, 920);
  chartGradient.addColorStop(0, "rgba(57,213,232,0.35)");
  chartGradient.addColorStop(1, "rgba(57,213,232,0)");

  ctx.beginPath();
  chartPoints.forEach(([x, y], index) => {
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.lineTo(920, 920);
  ctx.lineTo(95, 920);
  ctx.closePath();
  ctx.fillStyle = chartGradient;
  ctx.fill();

  ctx.beginPath();
  chartPoints.forEach(([x, y], index) => {
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.strokeStyle = "#39D5E8";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.stroke();

  // Section heading
  text("Performance", 68, 1040, 43, "#FFFFFF", "700");
  text("Your business at a glance", 68, 1085, 24, "#8FA3C4");

  // Two metric cards
  const metricCards = [
    { x: 48, title: "ORDERS", value: "1,284", change: "+8.4%" },
    { x: 530, title: "CUSTOMERS", value: "856", change: "+6.2%" },
  ];

  metricCards.forEach((card) => {
    roundedRect(card.x, 1135, 446, 270, 30);
    ctx.fillStyle = "#142238";
    ctx.fill();

    text(card.title, card.x + 35, 1205, 22, "#8FA3C4", "600");
    text(card.value, card.x + 35, 1290, 57, "#FFFFFF", "700");
    text(card.change, card.x + 35, 1350, 25, "#54E5C1", "600");
  });

  // Recent activity
  text("Recent activity", 68, 1515, 43, "#FFFFFF", "700");

  const activities = [
    { name: "New order received", detail: "Order #NV-2048", amount: "+$240" },
    { name: "Payment completed", detail: "Order #NV-2047", amount: "+$185" },
    { name: "New customer", detail: "Sarah Williams", amount: "NEW" },
  ];

  activities.forEach((item, index) => {
    const y = 1595 + index * 125;

    ctx.beginPath();
    ctx.arc(105, y - 8, 31, 0, Math.PI * 2);
    ctx.fillStyle = "#1E3B61";
    ctx.fill();

    text("✓", 91, y + 3, 28, "#54E5C1", "700");
    text(item.name, 160, y - 12, 27, "#FFFFFF", "600");
    text(item.detail, 160, y + 28, 21, "#8FA3C4");
    text(item.amount, 790, y + 5, 25, "#54E5C1", "700");
  });

  // Bottom navigation
  ctx.fillStyle = "#0D1729";
  ctx.fillRect(0, 1920, 1024, 128);

  const navItems = [
    { label: "Home", x: 125 },
    { label: "Analytics", x: 375 },
    { label: "Orders", x: 635 },
    { label: "Profile", x: 875 },
  ];

  navItems.forEach((item, index) => {
    text(
      ["⌂", "▥", "▤", "●"][index],
      item.x,
      1975,
      34,
      index === 0 ? "#55A0FF" : "#8192AE",
      "600"
    );

    text(
      item.label,
      item.x - 25,
      2020,
      19,
      index === 0 ? "#55A0FF" : "#8192AE",
      "600"
    );
  });

  const texture = new THREE.CanvasTexture(canvas);

texture.colorSpace = THREE.SRGBColorSpace;
texture.flipY = false;
texture.anisotropy = 16;
texture.minFilter = THREE.LinearMipmapLinearFilter;
texture.magFilter = THREE.LinearFilter;
texture.generateMipmaps = true;
texture.needsUpdate = true;

  return texture;
}

function Smartphone() {
  const { scene } = useGLTF("/models/smartphone.glb");

  const model = useMemo(() => {
    const clonedScene = scene.clone(true);
    const texture = createNovaTexture();

    clonedScene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      if (
  object.name === "Display_panel_1" ||
  object.name === "Display_panel_2" ||
  object.name === "Front_cover_glass"
  
) {
  const mesh = object as THREE.Mesh;

  console.log("SCREEN LAYER:", mesh.name);

  const materials = Array.isArray(mesh.material)
  ? mesh.material
  : [mesh.material];

console.log(
  "MATERIAL DETAILS:",
  mesh.name,
  materials.map((material) => ({
    name: material.name,
    type: material.type,
    transparent: material.transparent,
    opacity: material.opacity,
    depthWrite: material.depthWrite,
    visible: material.visible,
    map: Boolean((material as THREE.MeshStandardMaterial).map),
    alphaMap: Boolean((material as THREE.MeshStandardMaterial).alphaMap),
    emissiveMap: Boolean((material as THREE.MeshStandardMaterial).emissiveMap),
    transmission: (material as THREE.MeshPhysicalMaterial).transmission,
  }))
);
}
if (object.name === "Front_cover_glass") {
  object.visible = false;
  return;
}
      if (object.name !== "Display_panel_2") return;
      const mesh = object as THREE.Mesh;
const uv = mesh.geometry.attributes.uv;

if (uv) {
  let minU = Infinity;
  let maxU = -Infinity;
  let minV = Infinity;
  let maxV = -Infinity;

  for (let i = 0; i < uv.count; i++) {
    minU = Math.min(minU, uv.getX(i));
    maxU = Math.max(maxU, uv.getX(i));
    minV = Math.min(minV, uv.getY(i));
    maxV = Math.max(maxV, uv.getY(i));
  }

  console.log("SCREEN GEOMETRY:", {
  name: mesh.name,
  position: mesh.position.toArray(),
  rotation: mesh.rotation.toArray(),
  scale: mesh.scale.toArray(),
  boundingBox: mesh.geometry.boundingBox,
  groups: mesh.geometry.groups,
  indexCount: mesh.geometry.index?.count,
  materialCount: Array.isArray(mesh.material)
    ? mesh.material.length
    : 1,
  uvCount: uv?.count,
});
}

      const applyTexture = (original: THREE.Material) => {
        const material = original.clone() as THREE.MeshStandardMaterial;
        material.map = texture;
material.emissiveMap = null;
material.emissive.set("#000000");
material.emissiveIntensity = 0;
material.color.set("#FFFFFF");
material.needsUpdate = true;
        
        
        return material;
      };

      object.material = Array.isArray(object.material)
        ? object.material.map(applyTexture)
        : applyTexture(object.material);
    });

    return clonedScene;
  }, [scene]);

  return (
    <Bounds fit clip observe margin={1.2}>
      <PresentationControls
  global
  rotation={[0.08, -0.25, 0]}
  polar={[-0.25, 0.25]}
  azimuth={[-0.5, 0.5]}
>
        <Float
          speed={1.2}
          rotationIntensity={0.12}
          floatIntensity={0.25}
        >
          <primitive object={model} />
        </Float>
      </PresentationControls>
    </Bounds>
  );
}

export default function HeroScene() {
  return (
    <div className="h-[650px] w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.1} />

        <directionalLight position={[5, 5, 5]} intensity={2.5} />

        <pointLight
          position={[-4, 2, 3]}
          intensity={35}
          color="#477BFF"
        />

        <pointLight
          position={[3, -2, -2]}
          intensity={25}
          color="#39D5E8"
        />

        <Suspense fallback={null}>
          <Smartphone />

          <ContactShadows
            position={[0, -1.5, 0]}
            opacity={0.4}
            scale={4}
            blur={2.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/smartphone.glb");
