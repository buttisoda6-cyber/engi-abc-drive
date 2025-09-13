// Engineering Terms Data - Prime Movers & Hybrid Vehicles A-Z
import batteryImg from "@/assets/battery.jpg";
import electricMotorImg from "@/assets/electric-motor.jpg";
import hybridSystemImg from "@/assets/hybrid-system.jpg";
import alternatorImg from "@/assets/alternator.jpg";
import fuelCellImg from "@/assets/fuel-cell.jpg";
import drivetrainImg from "@/assets/drivetrain.jpg";
import inverterImg from "@/assets/inverter.jpg";
import regenerativeBrakingImg from "@/assets/regenerative-braking.jpg";
import turbineImg from "@/assets/turbine.jpg";

export interface EngineeringTerm {
  letter: string;
  term: string;
  description: string;
  image?: string;
}

export const engineeringTerms: EngineeringTerm[] = [
  {
    letter: "A",
    term: "Alternator",
    description: "A generator that converts mechanical energy to electrical energy in alternating current",
    image: alternatorImg
  },
  {
    letter: "B",
    term: "Battery",
    description: "Energy storage device that converts chemical energy to electrical energy",
    image: batteryImg
  },
  {
    letter: "C",
    term: "Combustion Engine",
    description: "Internal combustion engine that burns fuel to create mechanical power",
    image: "/placeholder.svg"
  },
  {
    letter: "D",
    term: "Drivetrain",
    description: "System that transfers power from the engine to the wheels",
    image: drivetrainImg
  },
  {
    letter: "E",
    term: "Electric Motor",
    description: "Device that converts electrical energy into mechanical energy",
    image: electricMotorImg
  },
  {
    letter: "F",
    term: "Fuel Cell",
    description: "Electrochemical device that converts chemical energy directly to electricity",
    image: fuelCellImg
  },
  {
    letter: "G",
    term: "Generator",
    description: "Machine that converts mechanical energy into electrical energy",
    image: "/placeholder.svg"
  },
  {
    letter: "H",
    term: "Hybrid System",
    description: "Propulsion system combining two or more power sources",
    image: hybridSystemImg
  },
  {
    letter: "I",
    term: "Inverter",
    description: "Electronic device that converts DC to AC power",
    image: inverterImg
  },
  {
    letter: "J",
    term: "Jet Engine",
    description: "Reaction engine that generates thrust by expelling jet exhaust",
    image: "/placeholder.svg"
  },
  {
    letter: "K",
    term: "Kinetic Energy",
    description: "Energy possessed by a body due to its motion",
    image: "/placeholder.svg"
  },
  {
    letter: "L",
    term: "Li-ion Battery",
    description: "Rechargeable battery using lithium ions as charge carriers",
    image: batteryImg
  },
  {
    letter: "M",
    term: "Motor Controller",
    description: "Electronic device that regulates the speed and torque of electric motors",
    image: "/placeholder.svg"
  },
  {
    letter: "N",
    term: "NiMH Battery",
    description: "Nickel-metal hydride rechargeable battery technology",
    image: "/placeholder.svg"
  },
  {
    letter: "O",
    term: "Otto Cycle",
    description: "Thermodynamic cycle used in gasoline internal combustion engines",
    image: "/placeholder.svg"
  },
  {
    letter: "P",
    term: "Power Electronics",
    description: "Technology dealing with conversion and control of electric power",
    image: "/placeholder.svg"
  },
  {
    letter: "Q",
    term: "Quasi-Static Process",
    description: "Thermodynamic process that occurs slowly enough to maintain equilibrium",
    image: "/placeholder.svg"
  },
  {
    letter: "R",
    term: "Regenerative Braking",
    description: "Energy recovery mechanism that slows down a vehicle by converting kinetic energy to stored energy",
    image: regenerativeBrakingImg
  },
  {
    letter: "S",
    term: "Starter Motor",
    description: "Electric motor used to start internal combustion engines",
    image: "/placeholder.svg"
  },
  {
    letter: "T",
    term: "Turbine",
    description: "Rotary mechanical device that extracts energy from fluid flow",
    image: turbineImg
  },
  {
    letter: "U",
    term: "Ultracapacitor",
    description: "Energy storage device with high power density and fast charge/discharge",
    image: "/placeholder.svg"
  },
  {
    letter: "V",
    term: "Variable Valve Timing",
    description: "Technology to alter timing of valve opening and closing in internal combustion engines",
    image: "/placeholder.svg"
  },
  {
    letter: "W",
    term: "Wankel Engine",
    description: "Rotary internal combustion engine with triangular rotor design",
    image: "/placeholder.svg"
  },
  {
    letter: "X",
    term: "Xenon Headlights",
    description: "High-intensity discharge lamps using xenon gas for automotive lighting",
    image: "/placeholder.svg"
  },
  {
    letter: "Y",
    term: "Yaw Control",
    description: "Vehicle stability system that controls rotation around vertical axis",
    image: "/placeholder.svg"
  },
  {
    letter: "Z",
    term: "Zero Emission Vehicle",
    description: "Vehicle that produces no exhaust gas or other emissions",
    image: "/placeholder.svg"
  }
];