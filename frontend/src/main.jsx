import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ChakraProvider>
            <ColorModeScript initialColorMode="light" />
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    </StrictMode>
);
