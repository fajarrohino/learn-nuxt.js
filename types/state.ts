import { reactive } from "vue";
import type { IShip } from "./ship";

export const ships = reactive([
  {
    id: 1,
    name: "Kapal Besar",
    loads: "gandum, beras, jagung",
    origin: "tanjung priuk",
    destination: "tanjung perak",
  },
  {
    id: 2,
    name: "Kapal kecil",
    loads: "gandum, beras, jagung",
    origin: "tanjung perak",
    destination: "tanjung priuk",
  },
  {
    id: 3,
    name: "Kapal mid",
    loads: "Narkoba",
    origin: "tanjung perak",
    destination: "tanjung priuk",
  },
]);

export const addShip = (ship: IShip) => {
  ships.push(ship);
};

export const updateShip = (updateShip: IShip) => {
  const idUpdateShip = ships.findIndex((ship) => ship.id === updateShip.id);
  console.log(idUpdateShip, updateShip);
  ships[idUpdateShip] = updateShip;
};

export const deleteShip = (id: number) => {
  const idShip = ships.findIndex((ship) => ship.id === id);
  console.log("the load delete");
  ships.splice(idShip, 1);
};
