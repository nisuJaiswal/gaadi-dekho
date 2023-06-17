"use client";
import { CarType } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

interface CarDetilsType {
  isOpen: boolean;
  closeModal: () => void;
  car: CarType;
}
const CarDetails = ({ isOpen, closeModal, car }: CarDetilsType) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as={"div"} onClose={closeModal} className="relative z-10">
          {/* <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in dutation-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          > */}
          <div className="fixed inset-0 bg-black bg-opacity-25" />
          {/* </Transition.Child> */}

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              {/* <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in dutation-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-96"
              > */}
              <Dialog.Panel
                className={
                  "relative max-h-[90vh] w-full max-w-lg overflow-y-auto transform rounded-2xl bg-white text-left flex flex-col gap-5 transition-all text-black p-6 shadow-xl"
                }
              >
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-2 z-10 w-fit p-2 bg-primary-blue-100 right-2 rounded-full"
                >
                  <Image
                    src={"/close.svg"}
                    width={20}
                    height={20}
                    alt="img"
                    className="object-contain"
                  />
                </button>

                <div className="flex-1 flex flex-col gap-3">
                  <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                    <Image
                      src={"/hero.png"}
                      alt={"logo"}
                      fill
                      priority
                      className="object-contain"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-1 relative h-24 w-full bg-primary-blue-100">
                      <Image
                        src={"/hero.png"}
                        alt={"logo"}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative h-24 w-full bg-primary-blue-100">
                      <Image
                        src={"/hero.png"}
                        alt={"logo"}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 relative h-24 w-full bg-primary-blue-100">
                      <Image
                        src={"/hero.png"}
                        alt={"logo"}
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <h2 className="text-xl font-semibold capitalize ">
                    {car.make} {car.model}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-4">
                    {Object.entries(car).map(([key, val]) => (
                      <div
                        className="flex justify-between gap-5 w-full text-right"
                        key={key}
                      >
                        <h4 className="capitalize text-gray">
                          {key.split("_").join(" ")}
                        </h4>
                        <p>{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Dialog.Panel>
              {/* </Transition.Child> */}
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
