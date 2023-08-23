import microChipImage from "../assets/microchip.png";
import robotArmImage from "../assets/robot-arm.png";
import webDevImage from "../assets/web-programming.png";
import pcbImage from "../assets/pcb.png";
import workImage from "../assets/job.png";
import gearImage from "../assets/settings.png";

const bioItems = [
  { header: "Name", value: "Naufan Rikza Ahamda" },
  { header: "Location", value: "Malang, West Java, Indonesia" },
  { header: "Phone", value: "+6281-383-465-562" },
  { header: "Email", value: "naufanrikzaahmada@gmail.com" },
];

const interestItems = [
  {
    imgSrc: microChipImage,
    imgName: "controller",
    value: "Embedded System",
  },
  {
    imgSrc: robotArmImage,
    imgName: "robot-arm",
    value: "Robotics",
  },
  {
    imgSrc: webDevImage,
    imgName: "web",
    value: "Web Development",
  },
  {
    imgSrc: pcbImage,
    imgName: "pcb",
    value: "Electronic ",
  },
];

const experienceItem = [
  {
    id: 0,
    icon: { name: "work", imgSrc: workImage },
    posName: "Research and Development Hardware Engineer",
    companyName: "PT. Intitek Presisi Integrasi - TIMBANGANPAS.COM",
    workTime: "2 years 4 months",
    details: [
      "Analyze customer problem and build the solution with custom hardware system",
      "Design electronics circuit for electronic balance integration system",
      "Develop firmware for electronic balance integration system using ESP32, Arduino, and Raspberry",
    ],
  },
  {
    id: 1,
    icon: { name: "gear", imgSrc: gearImage },
    posName: "Embedded System Developer",
    companyName: "UB-TECH (a part of Brawijaya University)",
    workTime: "2 years 4 months",
    details: [
      "Develop whole firmware in UV Cabinet for Mask Disinfection project",
      "Develop whole firmware in UV Disinfection Robot project",
      "Contributed in developing a part of firmware in Sterilization Chamber project",
      "Develop whole firmware in Plasma Disinfection Chamber project",
    ],
  },
  {
    id: 2,
    icon: { name: "work", imgSrc: workImage },
    posName: "Brawijaya Robotics Team",
    companyName: "Brawijaya Robotics Team",
    workTime: "2 years 10 months",
    details: [
      "Design and implement robot algorithm with ARM microcontroller",
      "Design inter-communication between robot's subsystems",
      "Collaborate with electrical designer to determine robot electrical specification",
      "Appointed as Embedded Software Team Coordinator",
    ],
  },
  {
    id: 3,
    icon: { name: "work", imgSrc: workImage },
    posName: "Laboratory Asistant",
    companyName: "Mechatronics and Robotics Laboratory of Brawijaya University",
    workTime: "2 years 10 months",
    details: [
      "Teaching student about robots basic systems susch as: sensor, constroller, and actuator",
      "Asisting student in doing practicum, especially in controllers programming",
      "Provide Quizzes to students",
    ],
  },
  {
    id: 4,
    icon: { name: "work", imgSrc: workImage },
    posName: "Laboratory Asistant",
    companyName: "Electronics Laboratory of Brawijaya University",
    workTime: "11 months",
    details: [
      "Teaching student about semi-conductor components in electronics susch as: diode, transistor, triac, and OP-AMP",
      "Asisting student in doing practicum, especially in simple transistor circuit design",
      "Provide Quizzes to students",
    ],
  },
];

const skillsItem = [
  { id : 0, name: "C++", value: 90 },
  { id : 1, name: "C", value: 90 },
  { id : 2, name: "Python", value: 75 },
  { id : 3, name: "Arduino", value: 90 },
  { id : 4, name: "STM32", value: 80 },
  { id : 5, name: "ESP32", value: 90 },
  { id : 6, name: "Raspberry Pi", value: 80 },
  { id : 7, name: "React", value: 70 },
  { id : 8, name: "Node JS", value: 70 },
];

const utils = { bioItems, interestItems, experienceItem, skillsItem };

export default utils;
