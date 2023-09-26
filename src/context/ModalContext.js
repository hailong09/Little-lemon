import { createContext, useContext, useState } from "react";
import Modal from "../components/Modal";

const ModalContext = createContext()

export const ModalContextProvider = ({ children }) => {
    let [isOpen, setIsOpen] = useState(false)

    const modalContextData = {
        isOpen,
        setIsOpen
    }
    return <ModalContext.Provider value={modalContextData}>
        <Modal />
        {children}
    </ModalContext.Provider>
}

export const useModal = () => useContext(ModalContext)