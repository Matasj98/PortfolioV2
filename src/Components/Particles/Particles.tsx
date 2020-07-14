import React from "react";
import Particles from "react-particles-js";

const ParticlesStyled = () => {
    return (
        <Particles
            style={{ position: "fixed", top: "0", bottom: "0", right: "0", left: "0" }}
            params={{
                particles: {
                    number: {
                        value: 300,
                    },
                    line_linked: {
                        enable: false,
                    },
                    move: {
                        speed: 4,
                    },
                    size: {
                        value: 1,
                    },
                },
            }}
        />
    );
};

export default ParticlesStyled;
