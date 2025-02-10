import { createContext, ReactNode, useContext, useState } from "react";

interface IGlobalContext {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const globalContextCreated = createContext<IGlobalContext | null>(null);

export const UseContext = () => {
    const context = useContext(globalContextCreated);
    if (!context || context.value.trim() === "") {
        throw new Error("The value is empty");
    }
    return context;
};

export const ProviderContextGlobal = ({ children }: { children: ReactNode }) => {
    const [value, setValue] = useState<string>("hola");

    return (
        <globalContextCreated.Provider value={{ value, setValue }}>
            {children}
        </globalContextCreated.Provider>
    );
};
