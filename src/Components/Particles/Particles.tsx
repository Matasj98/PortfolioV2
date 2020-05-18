import React from "react";
import Particles from "react-particles-js";

const ParticlesStyled = () => {
    return (
        <Particles
            style={{ position: "absolute" }}
            params={{
                particles: {
                    number: {
                        value: 200,
                        density: {
                            enable: true,
                            value_area: 1500,
                        },
                    },
                    line_linked: {
                        enable: true,
                        opacity: 0.05,
                    },
                    move: {
                        // direction: "right",
                        speed: 2,
                    },
                    size: {
                        value: 1,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.05,
                        },
                    },
                },
                // retina_detect: true,
            }}
        />
    );
};

export default ParticlesStyled;
